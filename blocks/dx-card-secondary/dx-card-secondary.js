//Getting main Div container
var mainDiv = document.querySelector('.dx-card-secondary');
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
containerInsideDivfour.classList.add('adpimg__display--fluid','adpimg__obj-fit', 'js-object-fit','adpimg__obj-fit--h50-v50','card-1-secondary');
containerInsideDivthree.appendChild(containerInsideDivfour);

var pict = document.querySelector('.dx-card-secondary > div > div > picture');
containerInsideDivfour.appendChild(pict);

document.querySelector('.card-1-secondary > picture > img').setAttribute('class', 'adpimg__img')

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
containerTwoInsideDivTwo.setAttribute('id','card-title-id-7');
containerTwoInsideDiv.appendChild(containerTwoInsideDivTwo);

//Creating Inside three div container two
var containerTwoInsideDivThree = document.createElement('div');
//adding class
containerTwoInsideDivThree.setAttribute('class','rte-wrapper');
containerTwoInsideDivTwo.appendChild(containerTwoInsideDivThree);

//Creating Inside div four para container two with value
//var containerTwoInsideDivFour = document.createElement('p');
// containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
//var containerTwoInsideDivFourValue = document.querySelector('.dx-card-secondary > div > div > p');
//containerTwoInsideDivThree.appendChild(containerTwoInsideDivFour);
//containerTwoInsideDivFour.appendChild(containerTwoInsideDivFourValue);
containerTwoInsideDivThree.appendChild(document.querySelector('.dx-card-secondary > div > div > p'));

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
//var containerTwoInsideDivSevenValue = document.querySelector('.dx-card-secondary > div > div > p');
//containerTwoInsideDivSix.appendChild(containerTwoInsideDivSeven);
//containerTwoInsideDivSeven.appendChild(containerTwoInsideDivSevenValue);
containerTwoInsideDivSix.appendChild(document.querySelector('.dx-card-secondary > div > div > p'));

var containerTwoInsideDivSevenn = document.createElement('div');
containerTwoInsideDivSevenn.setAttribute('class','cta-wrapper');
containerTwoInsideDivSevenn.classList.add('cta-wrapper--column','cta-wrapper--left');
containerDivTwo.appendChild(containerTwoInsideDivSevenn);

var anchorNew = document.createElement('a');
var anchorValue = document.querySelector('.dx-card-secondary > div > div > p > a').innerText;
var anchorLink =  document.querySelector('.dx-card-secondary > div > div > p > a').href;
anchorNew.setAttribute('id','cta-1-521868-463698');
anchorNew.setAttribute('class','link-chevron');
anchorNew.setAttribute('href',anchorLink);
anchorNew.setAttribute('title',anchorValue);
anchorNew.setAttribute('data-event','site interaction');
anchorNew.setAttribute('data-category','card|save-on-overseas-shipping|li');
anchorNew.setAttribute('data-description','learn-more');
anchorNew.setAttribute('aria-labelledby','cta-1-521868-463698 card-title-id-7');
containerDivTwo.appendChild(anchorNew);
anchorNew.innerHTML = anchorValue;
document.querySelector('.dx-card-secondary > div > div > p > a').style.display = 'none';
