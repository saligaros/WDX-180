// REFERENCE: https://github.com/in-tech-gration/flems/tree/master
;(function flemInit() {

  function init(){

    console.log('Flem initialization...');

    // Changed from .main-section to .flems-button to avoid listening to false click events
    // querySelectorAll to get all possible buttons for liveCode inside a page
    const flemsButtonEls = document.querySelectorAll(".flems-button");
    const flemsEnableButtonHREF = "#flems-enable";
    // TODO: Implement Fullscreen mode:
    // ELEMENT.exitFullscreen() 
    // ELEMENT.requestFullscreen();

    try {

      if (!flemsButtonEls) {
        throw new Error("No .flems-button elements found.");
        return false;
      }

      flemsButtonEls.forEach(flemsButtonEl => 
        flemsButtonEl.addEventListener("click", e => {

          const { target } = e;

          if (!target.href) {
            throw new Error("Not target.href found. target:", target);
            return false;
          }

          const hrefURL = new URL(target.href);

          if (hrefURL.hash !== flemsEnableButtonHREF) {
            throw new Error("Has does not include #flems-enable. href: ", href);
            return false;
          }

          e.preventDefault();
          const parentSiblingCodeSection = target.parentElement.previousElementSibling;

          if (!parentSiblingCodeSection) {
            throw new Error("Did not find a parentSiblingCodeSection. parentSiblingCodeSection:", parentSiblingCodeSection);
            return false;
          }

          // Check if the Code Editor has already been initialized 
          const nextElementSibling = target.nextElementSibling;
          if ( nextElementSibling && nextElementSibling.classList.contains("wdx-flems-editor") ){
            return false;
          }

          const code = parentSiblingCodeSection.textContent;
          const codeEditor = document.createElement("div");
          codeEditor.setAttribute("class", "wdx-flems-editor")
          target.insertAdjacentElement("afterEnd", codeEditor);

          // Initialize JavaScript Code Playground:
          // Check for both language-js and language-javascript classes.
          if ( parentSiblingCodeSection.classList.contains("language-js") || parentSiblingCodeSection.classList.contains("language-javascript") ){

            const flems = Flems(codeEditor, {
              files: [{
                name: 'playground.js',
                content: `\n${code}\n`
              }],
              shareButton     : false,
              middle          : 80,
              selected        : '.js',
              autoHeight      : true,

              // Default Settings:
              color           : 'rgb(38,50,56)',
              theme           : 'material', // and 'none' or 'default'
              resizeable      : true,
              editable        : true,
              toolbar         : true,
              fileTabs        : true,
              linkTabs        : true,
              reloadButton    : true,
              console         : true,
              autoReload      : true,
              autoReloadDelay : 400
            });

          }

        })
      );

    } catch (e) {

      console.log(e);

    }

  }

  document.addEventListener('DOMContentLoaded', (event) => {
    init();
  });

}());
