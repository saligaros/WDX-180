//@ts-check

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

const paragraphs = document.querySelectorAll('p');
paragraphs[3].textContent = 'Fourth Paragraph';
paragraphs[0].style.fontSize = '24px';
paragraphs[1].style.border = '1px solid red';
paragraphs[3].style.backgroundColor = 'gray';

paragraphs.forEach((paragraph, i) => {
    if (i % 2 === 0) {
        paragraph.style.backgroundColor = 'green';
    } else {
        paragraph.style.backgroundColor = 'red';
    }
})
paragraphs.forEach(paragraph => {
paragraph.classList.add('nothing');
})

paragraphs[0].id='1';
paragraphs[1].id='2';
paragraphs[2].id='3';
paragraphs[3].id='4';



 