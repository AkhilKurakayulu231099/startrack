//Getting main Div container
var mainDiv = document.querySelector('.dx-cardlist');
var container = document.createElement('div');
//adding classNames to main Div
container.setAttribute('class','lyt-container');
 mainDiv.appendChild(container);

//creating div
var containerDivCard = document.createElement('div');
//adding class to container Div
containerDivCard.setAttribute('class','lyt-container');  
mainDiv.appendChild(containerDivCard);

//creating section element
var sectionCard = document.createElement('section');
//adding Id to section
sectionCard.setAttribute('class','layout-container');
//adding classNames to section
sectionCard.classList.add('clearfix','bg-color--shell','no-padding');
containerDivCard.appendChild(sectionCard);

//creating div
var containerDivCardOne = document.createElement('div');
//adding class to container Div
containerDivCardOne.setAttribute('class','layout-container-wrapper');  
sectionCard.appendChild(containerDivCardOne);

//Creating Inside div one
var containerDivCardTwo = document.createElement('div');
//adding class
containerDivCardTwo.setAttribute('class','flex-container');
containerDivCardTwo.classList.add('flex-container--single-row','flex-container--center');
containerDivCardOne.appendChild(containerDivCardTwo);

//Creating Inside div two
var containerDivCardThree = document.createElement('div');
//adding class
containerDivCardThree.setAttribute('class','card');  
containerDivCardTwo.appendChild(containerDivCardThree);

//creating article
var articleElemOne = document.createElement('article');
//adding class to article
articleElemOne.setAttribute('class','tile');
articleElemOne.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
containerDivCardThree.appendChild(articleElemOne);

//Creating Inside div three
var containerDivCardFour = document.createElement('div');
//adding class
containerDivCardFour.setAttribute('class','tile-image');  
articleElemOne.appendChild(containerDivCardFour);

//Creating Inside div four
var containerDivCardFive = document.createElement('div');
//adding class
containerDivCardFive.setAttribute('class','adpimg__container');
containerDivCardFive.classList.add('adpimg__display--fluid','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h75-v50');
containerDivCardFour.appendChild(containerDivCardFive);

var pictureOne = document.querySelector('.dx-cardlist > div > div > picture');
containerDivCardFive.appendChild(pictureOne);

document.querySelector('.tile-image > .adpimg__obj-fit--h75-v50 > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivCardSix = document.createElement('div');
//adding class to container Div
containerDivCardSix.setAttribute('class','tile-content');  
articleElemOne.appendChild(containerDivCardSix);

//Creating Inside div container two
var containerDivCardSeven = document.createElement('div');
//adding class
containerDivCardSeven.setAttribute('class','tile-content-copy');
containerDivCardSix.appendChild(containerDivCardSeven);

//Creating Inside two div container two
var containerDivCardeight = document.createElement('h4');
//adding class
containerDivCardeight.setAttribute('class','tile-title');
containerDivCardSeven.appendChild(containerDivCardeight);

//Creating Inside three div container two
var containerDivCardNine = document.createElement('div');
//adding class
containerDivCardNine.setAttribute('class','rte-wrapper');
containerDivCardeight.appendChild(containerDivCardNine);

//Creating Inside div four para container two with value
var containerDivCardTenValue = document.querySelector('.dx-cardlist > div > div > p');
containerDivCardNine.appendChild(containerDivCardTenValue);

//Creating Inside five div container two
var containerTwoInsideDivEleven = document.createElement('div');
//adding class
containerTwoInsideDivEleven.setAttribute('class','tile-copy');
containerDivCardSeven.appendChild(containerTwoInsideDivEleven);

//Creating Inside six div container two
var containerTwoInsideDivTwelve = document.createElement('div');
//adding class
containerTwoInsideDivTwelve.setAttribute('class','rte-wrapper');
containerTwoInsideDivTwelve.classList.add('cmp-text');
containerTwoInsideDivEleven.appendChild(containerTwoInsideDivTwelve);


//Creating Inside div eight ul container two
var containerUL = document.createElement('ul');
containerTwoInsideDivTwelve.appendChild(containerUL);

//Creating Inside div nine li container two
var containerLI = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLI);

//Creating Inside div nine li container three
var containerLIOne = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLIOne);

//Creating Inside div nine li container four
var containerLITwo = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLITwo);

//Creating Inside div nine li container five
var containerLIThree = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLIThree);

//Creating Inside div nine li container six
var containerLIFour = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLI);

//Creating Inside div nine li container seven
var containerLIFive = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLIFive);

//Creating Inside div nine li container eight
var containerLISix = document.querySelector('.dx-cardlist > div > div > ul > li');
containerUL.appendChild(containerLISix);

//-------------------------------------------------------


//Creating Inside div two
var containerDivCardtwoThree = document.createElement('div');
//adding class
containerDivCardtwoThree.setAttribute('class','card');  
containerDivCardTwo.appendChild(containerDivCardtwoThree);

//creating article
var articleElemOnee = document.createElement('article');
//adding class to article
articleElemOnee.setAttribute('class','tile');
articleElemOnee.classList.add('tile--featured','tile--card','bg-color','tile--image-right','tile--simulate-links');
containerDivCardtwoThree.appendChild(articleElemOnee);

//Creating Inside div three
var containerDivCardtwoFour = document.createElement('div');
//adding class
containerDivCardtwoFour.setAttribute('class','tile-image');  
articleElemOnee.appendChild(containerDivCardtwoFour);

//Creating Inside div four
var containerDivCardtwoFive = document.createElement('div');
//adding class
containerDivCardtwoFive.setAttribute('class','adpimg__container');
containerDivCardtwoFive.classList.add('adpimg__display--fluid','adpimg__obj-fit','js-object-fit','adpimg__obj-fit--h75-v50','tester__addon');
containerDivCardtwoFour.appendChild(containerDivCardtwoFive);

var pictureOnee = document.querySelector('.dx-cardlist > div > div > picture');
containerDivCardtwoFive.appendChild(pictureOnee);

document.querySelector('.tile-image > .tester__addon > picture > img').setAttribute('class', 'adpimg__img');

//creating div container two
var containerDivCardtwoSix = document.createElement('div');
//adding class to container Div
containerDivCardtwoSix.setAttribute('class','tile-content');  
articleElemOnee.appendChild(containerDivCardtwoSix);

//Creating Inside div container two
var containerDivCardtwoSeven = document.createElement('div');
//adding class
containerDivCardtwoSeven.setAttribute('class','tile-content-copy');
containerDivCardtwoSix.appendChild(containerDivCardtwoSeven);

//Creating Inside two div container two
var containerDivCardtwoeight = document.createElement('h4');
//adding class
containerDivCardtwoeight.setAttribute('class','tile-title');
containerDivCardtwoSeven.appendChild(containerDivCardtwoeight);

//Creating Inside three div container two
var containerDivCardtwoNine = document.createElement('div');
//adding class
containerDivCardtwoNine.setAttribute('class','rte-wrapper');
containerDivCardtwoeight.appendChild(containerDivCardtwoNine);

//Creating Inside div four para container two with value
var containerDivCardtwoTenValue = document.querySelector('.dx-cardlist > div > div > p');
containerDivCardtwoNine.appendChild(containerDivCardtwoTenValue);

//Creating Inside five div container two
var containerTwoInsideDivtwoEleven = document.createElement('div');
//adding class
containerTwoInsideDivtwoEleven.setAttribute('class','tile-copy');
containerDivCardtwoSeven.appendChild(containerTwoInsideDivtwoEleven);

//Creating Inside six div container two
var containerTwoInsideDivtwoTwelve = document.createElement('div');
//adding class
containerTwoInsideDivtwoTwelve.setAttribute('class','rte-wrapper');
containerTwoInsideDivtwoTwelve.classList.add('cmp-text');
containerTwoInsideDivtwoEleven.appendChild(containerTwoInsideDivtwoTwelve);

//Creating Inside div seven para container two with value

var containerTwoInsideDivtwoSevenValue = document.querySelector('.dx-cardlist > div > div > p');
containerTwoInsideDivtwoTwelve.appendChild(containerTwoInsideDivtwoSevenValue);

//Creating Inside div eight ul container two
var containertwoUL = document.createElement('ul');
containerTwoInsideDivtwoTwelve.appendChild(containertwoUL);

//Creating Inside div nine li container two
var containertwoLI = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containertwoLI);

//Creating Inside div nine li container three
var containerLItwoOne = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoOne);

//Creating Inside div nine li container four
var containerLItwoTwo = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoTwo);

//Creating Inside div nine li container five
var containerLItwoThree = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoThree);

//Creating Inside div nine li container six
var containerLItwoFour = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoFour);

//Creating Inside div nine li container seven
var containerLItwoFive = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoFive);

//Creating Inside div nine li container eight
var containerLItwoSix = document.querySelector('.dx-cardlist > div > div > ul > li');
containertwoUL.appendChild(containerLItwoSix);

//-------------------------------------------------------
