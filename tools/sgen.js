// DESCRIPTION: Script to dynamically generate Syllabus and related content in Markdown format
// USAGE: WDX-180/> node tools/sgen.js curriculum/curriculum.yaml
/**
 * REPLACES: {{ WDX:Syllabus }} => curriculum.yaml
 * REPLACES: {{ WDX:WEEK }}     => weekly.yaml
 */

// 0) IMPORTS: =================================================================
const path = require("node:path");
const fs = require("node:fs");
const { parseArgs } = require("node:util");
const marked = require("marked");
const matter = require('gray-matter');
const yaml = require('yaml');
const {
  warn,
  ok,
  info,
  xmark
} = require("./utils");

// 1) OUR FUNCTIONS: ===========================================================

// APPEND FRONTMATTER TO THE OUTPUT FILE:
function getFrontMatterStringFromObject(fm) {

  const fmEntries = Object.entries(fm);
  let fmString = "";
  if (fmEntries.length !== 0) {
    fmString += "---\n";
    fmEntries.forEach(line => {
      fmString += `${line[0]}: ${line[1]}\n`
    });
    fmString += "---\n";
  }
  return fmString;

}

function createSyllabusEntries(syllabus, messages) {

  let syllabusText = "";
  const syllabusEntries = Object.entries(syllabus);

  syllabusEntries.forEach(([key, value], i, s) => {

    syllabusText += `### ${value.title}\n\n`

    if (value.schedule) {
      const weekOrDay = Object.keys(value.schedule)[0];
      const weekOrDaySingular = weekOrDay.slice(0, -1);
      const unit = weekOrDaySingular[0].toUpperCase() + weekOrDaySingular.slice(1);
      const unitLowerCase = unit.toLowerCase();
      const scheduleEntries = Object.entries(value.schedule[weekOrDay]);

      scheduleEntries.forEach(([index, v], idx, list) => {

        const indexPadded = index.padStart(2, "0");
        const link = v.open ? `${unitLowerCase}${indexPadded}/index.md` : "#";
        if (v.no_unit) {
          syllabusText += `  - [**${v.title}**](${link})`;
        } else {
          syllabusText += `  - [**${unit} ${indexPadded}**: ${v.title}](${link})`;
        }
        if (!v.open) {
          syllabusText += ` _(${messages.MODULE_CURRENTLY_NOT_AVAILABLE})_`;
        }
        const isLastSyllabusEntry = i === (s.length - 1);
        const isLastScheduleEntry = idx === (list.length - 1);

        if (!(isLastSyllabusEntry && isLastScheduleEntry)) {
          syllabusText += "\n";
        }

        if (idx === (list.length - 1) && (i !== (s.length - 1))) {
          syllabusText += "\n";
        }
      });
    }

  });

  return syllabusText;

}

function replaceMarkdownWithSyllabus(markdownTokens, syllabusText) {

  const SYLLABUS_PATTERN = "WDX:Syllabus"

  return markdownTokens.map(token => {

    const isParagraph = token.type === "paragraph";
    const hasText = token.text;
    if (!hasText) {
      return token;
    }
    const containsSyllabusPattern = token.text.indexOf(SYLLABUS_PATTERN) > -1;

    if (isParagraph && hasText && containsSyllabusPattern) {
      token.raw = syllabusText;
    }

    return token;
  });

}

function createSyllabusFromMarkdownText({ configYaml, textContent }) {

  const { Syllabus: syllabus, messages } = yaml.parse(configYaml);

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm, orig } = matter(textContent);
  // Parse markdown tokens:
  const markdownTokens = marked.lexer(content);

  const syllabusText = createSyllabusEntries(syllabus, messages);

  const updatedMarkdown = replaceMarkdownWithSyllabus(markdownTokens, syllabusText);

  // APPEND FRONTMATTER TO THE OUTPUT FILE:
  const fmString = getFrontMatterStringFromObject(fm);

  // WRITE MARKDOWN FILE:
  const outputText = updatedMarkdown.map(t => t.raw).join("");

  return fmString + outputText;

}

function createWeeklyContentFromYaml({ configYaml, filename }) {

  const { input, schedule, title } = yaml.parse(configYaml);
  const weeklyFolder = path.join("curriculum", filename);
  const weeklyFolderExists = fs.existsSync(weeklyFolder)

  if ( weeklyFolderExists ) {

    console.log(`Folder '${filename}' already exists.`);
    
  } else {
    
    fs.mkdirSync(weeklyFolder);
    console.log(`Folder '${filename}' created.`);
    
  }

  const textContent = fs.readFileSync(input, "utf-8");

  // Parse markdown and separate Frontmatter and main content:
  const { content, data: fm, orig } = matter(textContent);
  // console.log({fm}); // { title: '{{ WDX:WEEK }} | {{ WDX:TITLE }}' }

  const numOfWeek = filename.split("week")[1]; // 04

  // Mini-parsers: (to be moved elsewhere and unit-tested)
  function parseWeeklyPatterns({ raw, numOfWeek }){

    const weekRegex        = /\{\{\s?WDX:\s?WEEK\s?\}\}/gi;
    const titleRegex       = /\{\{\s?WDX:\s?TITLE\s?\}\}/gi;
    const dateUpdatedRegex = /\{\{\s?WDX:\s?DATE_UPDATED\s?\}\}/gi;

    const date = new Date();
    const DDMMYYYY = `${date.getDate()}/${date.getMonth()+1}/${date.getFullYear()}` 

    let newRaw = raw
    .replace(weekRegex, `Week ${numOfWeek}`)
    .replace(titleRegex, title)
    .replace(dateUpdatedRegex, DDMMYYYY);

    return newRaw;
  }

  // Parse markdown tokens:
  const markdownTokens = marked.lexer(content);
  let outputContent = "";
  markdownTokens.forEach( token =>{
    if ( token.raw ){
      const parsedTokenRaw = parseWeeklyPatterns({ raw: token.raw, numOfWeek }); 
      outputContent += parsedTokenRaw;
    } else {
      outputContent += token.raw;
    }
  });

  const fmString = getFrontMatterStringFromObject(fm);

  outputContent = parseWeeklyPatterns({ raw: fmString, numOfWeek }) + outputContent;

  const weeklyIndexMarkdown = path.join( weeklyFolder, "index.md" );
  try {
    fs.writeFileSync(weeklyIndexMarkdown, outputContent, "utf-8");
  } catch(e){
    console.log(e);
  }


}

function init() {

  const configYamlPath = process.argv[2];

  if (!configYamlPath) {
    warn("No configYamlPath.")
    process.exit();
  }

  const configYaml = fs.readFileSync(path.join(configYamlPath), "utf-8");
  const { input, output, Syllabus } = yaml.parse(configYaml);

  try {

    const textContent = fs.readFileSync(input, "utf-8");

    if (Syllabus) {  // e.g. curriculum/curriculum.yaml

      console.log(`Processing Syllabus: ${input}`);
      const outputContent = createSyllabusFromMarkdownText({ textContent, configYaml });
      fs.writeFileSync(output, outputContent, "utf-8");

    } else {  // e.g. curriculum/schedule/week04.yaml

      console.log(`Processing Weekly Content: ${configYamlPath}`);
      const filename = path.basename(configYamlPath, path.extname(configYamlPath));
      if ( filename.indexOf("week") !== 0 ){
        return warn("Weekly YAML requires the following format: 'weeklyDD.yaml'")
      } else {
        createWeeklyContentFromYaml({ configYaml, filename });
      }

    }

  } catch (e) {

    console.log(e);

  }

}

// 2) OUR VARIABLES: ===========================================================

// 3) ACTION!!! ================================================================

if (require.main === module) {
  // console.log("This script was executed directly.");
  init();
} else {
  // console.log("This script was imported as a module.");
}

// 4) EXPORT SECTION: ==========================================================

module.exports = {
  getFrontMatterStringFromObject,
  createSyllabusFromMarkdownText
}