//@ts-check

const header = document.querySelector('h1');
const year = document.querySelector('span');
const subheader = document.querySelector('h2');
const datetime = document.querySelector('h3');
const list = document.querySelectorAll('li');

list.forEach((item, i) => {
    if (i === 0) {
        item.style.backgroundColor='green';
        item.style.fontFamily='arial';
    } else if (i === 1) {
        item.style.backgroundColor='yellow';
        item.style.fontFamily='arial';
    } else {
        item.style.backgroundColor='red';
        item.style.fontFamily='arial';
    } 
});

list.forEach(item => {
    item.classList.add('box');
})

if ( header !== null && datetime !== null && subheader !== null && year !== null) {
    header.style.textAlign = 'center';
    subheader.style.textAlign = 'center';
    year.style.fontSize = '60px';
    header.style.fontFamily = 'arial';
    subheader.style.fontFamily = 'arial';
    datetime.style.fontFamily = 'arial';
    datetime.style.display = 'inline'
    datetime.style.margin = 'auto'
    year.style.fontFamily = 'arial';
}
let index = 0
const colors = ['purple', 'blue', 'orange', 'yellow']
function changeColor() {
    if (year !==null) {
    year.style.color=colors[index]
    index = (index + 1) % colors.length;
    setTimeout(changeColor,1000);
    }}

let index2 = 0
const colors2 = ['gray','yellow','red','blue']
function changeColor2() {
    if (datetime !== null) {
        datetime.style.backgroundColor = colors2[index2];
        index2 = (index2 + 1) % colors2.length;
        setTimeout(changeColor2,1000)
}}
changeColor() 
changeColor2()   
