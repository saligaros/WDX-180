/**
 * 30 Days Of JavaScript: Document Object Model(DOM) Exercise
 * 
 * Complete the challenges found below:
 * 
 * 1. Get the first paragraph by using **_document.querySelector(tagname)_**
 * 2. Get each of the the paragraph using **_document.querySelector('#id')_**
 * 3. Get all the p as nodeList using **_document.querySelectorAll(tagname)_**
 * 4. Set id and class attribute for all the paragraphs using different attribute setting methods
 */

// INSERT YOUR CODE HERE

let firstParagraph = document.querySelector('p');
let paragraph1 = document.querySelector('#paragraph1');
let paragraph2 = document.querySelector('#paragraph2');
let paragraph3 = document.querySelector('#paragraph3');
let paragraph4 = document.querySelector('#paragraph4');
let allParagraphs = document.querySelectorAll('p');
allParagraphs.forEach(paragraph => {
    paragraph.classList.add('style3');
});
firstParagraph.classList.replace('style3','style1');
paragraph2.classList.replace('style3','style2');

allParagraphs.forEach(paragraph => {
    paragraph.id = "newest";
})
paragraph3.id = 'new';
firstParagraph.id = 'newer';