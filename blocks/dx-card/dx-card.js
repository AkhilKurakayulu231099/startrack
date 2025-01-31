//Getting main Div container
var mainDiv = document.querySelector('.dx-card');
var container = document.createElement('div');
//adding classNames to main Div
container.setAttribute('class','lyt-container');
 mainDiv.appendChild(container);

//creating section element
var sectionElem = document.createElement('section');
//adding Id to section
sectionElem.setAttribute('class','layout-container');
//adding classNames to section
sectionElem.classList.add('clearfix','bg-color--shell','no-padding--bottom');
container.appendChild(sectionElem);
 
//creating div
var containerDiv = document.createElement('div');
//adding class to container Div
containerDiv.setAttribute('class','layout-container-wrapper');  
sectionElem.appendChild(containerDiv);

//Creating Inside div one
var containerInsideDiv = document.createElement('div');
//adding class
containerInsideDiv.setAttribute('class','flex-container');
containerInsideDiv.classList.add('flex-container--single-row','flex-container--center');
containerDiv.appendChild(containerInsideDiv);

//Creating Inside div two
var containerInsideDivtwo = document.createElement('div');
//adding class
containerInsideDivtwo.setAttribute('class','card');  
containerInsideDiv.appendChild(containerInsideDivtwo);

//creating article
var articleElem = document.createElement('article');
//adding class to article
articleElem.setAttribute('class','tile');
articleElem.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
containerInsideDivtwo.appendChild(articleElem);

//Creating Inside div three
var containerInsideDivthree = document.createElement('div');
//adding class
containerInsideDivthree.setAttribute('class','tile-image');  
articleElem.appendChild(containerInsideDivthree);

//Creating Inside div four
var containerInsideDivfour = document.createElement('div');
//adding class
containerInsideDivfour.setAttribute('class','adpimg__container');
containerInsideDivfour.classList.add('adpimg__display--fluid', 'adpimg__obj-fit', 'js-object-fit', 'adpimg__obj-fit--h25-v75');
containerInsideDivthree.appendChild(containerInsideDivfour);

var pict = document.querySelector('.dx-card > div > div > picture');
containerInsideDivfour.appendChild(pict);

document.querySelector('.adpimg__obj-fit--h25-v75 > picture > img').setAttribute('class', 'adpimg__img')

//creating div container two
var containerDivTwo = document.createElement('div');
//adding class to container Div
containerDivTwo.setAttribute('class','tile-content');  
articleElem.appendChild(containerDivTwo);

//Creating Inside div container two
var containerTwoInsideDiv = document.createElement('div');
//adding class
containerTwoInsideDiv.setAttribute('class','tile-content-copy');
containerDivTwo.appendChild(containerTwoInsideDiv);

//Creating Inside two div container two
var containerTwoInsideDivTwo = document.createElement('h4');
//adding class
containerTwoInsideDivTwo.setAttribute('class','tile-title');
containerTwoInsideDiv.appendChild(containerTwoInsideDivTwo);

//Creating Inside three div container two
var containerTwoInsideDivThree = document.createElement('div');
//adding class
containerTwoInsideDivThree.setAttribute('class','rte-wrapper');
containerTwoInsideDivTwo.appendChild(containerTwoInsideDivThree);

//Creating Inside div four para container two with value
// var containerTwoInsideDivFour = document.createElement('p');
// containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
var containerTwoInsideDivFourValue = document.querySelector('.dx-card > div > div > p');
containerTwoInsideDivThree.appendChild(containerTwoInsideDivFourValue);
// containerTwoInsideDivFour.innerHTML = containerTwoInsideDivFourValue;

//Creating Inside five div container two
var containerTwoInsideDivFive = document.createElement('div');
//adding class
containerTwoInsideDivFive.setAttribute('class','tile-copy');
containerTwoInsideDiv.appendChild(containerTwoInsideDivFive);

//Creating Inside six div container two
var containerTwoInsideDivSix = document.createElement('div');
//adding class
containerTwoInsideDivSix.setAttribute('class','rte-wrapper');
containerTwoInsideDivSix.classList.add('cmp-text');
containerTwoInsideDivFive.appendChild(containerTwoInsideDivSix);

//Creating Inside div seven para container two with value
//var containerTwoInsideDivSeven = document.createElement('p');
var containerTwoInsideDivSevenValue = document.querySelector('.dx-card > div > div > p');
//containerTwoInsideDivSix.appendChild(containerTwoInsideDivSeven);
containerTwoInsideDivSix.appendChild(containerTwoInsideDivSevenValue);

//Creating Inside div eight ul container two
var containerTwoInsideDivUL = document.createElement('ul');
containerTwoInsideDivSix.appendChild(containerTwoInsideDivUL);

//Creating Inside div nine li container two
//var containerTwoInsideDivLi = document.createElement('li');
var containerTwoInsideDivLiValue = document.querySelectorAll('.dx-card > div > div > ul > li')[0];
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLi);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiValue);

//Creating Inside div ten li Two container two
//var containerTwoInsideDivLiOne = document.createElement('li');
var containerTwoInsideDivLiOneValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiOne);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiOneValue);

//Creating Inside div elven li Three container two
//var containerTwoInsideDivLiTwo = document.createElement('li');
var containerTwoInsideDivLiTwoValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiTwo);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiTwoValue);

//Creating Inside div twelve li four container two
//var containerTwoInsideDivLiThree = document.createElement('li');
var containerTwoInsideDivLiThreeValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiThree);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiThreeValue);

//Creating Inside div thirteen li five container two
//var containerTwoInsideDivLiFour = document.createElement('li');
var containerTwoInsideDivLiFourValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFour);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFourValue);

//Creating Inside div fourteen li six container two
//var containerTwoInsideDivLiFive = document.createElement('li');
var containerTwoInsideDivLiFiveValue = document.querySelector('.dx-card > div > div > ul > li');
//containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFive);
containerTwoInsideDivUL.appendChild(containerTwoInsideDivLiFiveValue);
