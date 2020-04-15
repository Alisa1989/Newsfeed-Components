/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/*
  menutItems.forEach((item) => {
    let listItem = createListItem(item);
    ul.appendChild(listItem);
  })


*/

// function createListItem(text) {
//   let listItem = document.createElement('li');
//   listItem.textContent = text;
// }

// function createMenu(arr) {
//   let div = document.createElement('div');
//   div.classList.add('menu');
  
//   for(let i= 0; i < arr.length(); i++)
//   {
//     let items = createListItem(arr[i]);
//     ul.appendChild(items);
//   } 
//   div.appendChild(ul);
// }

// let ul = document.createElement('ul');
// let menu = document.querySelector('.menu-button');

// createMenu(menuItems);

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/

// let menuButton = document.querySelector(".menu-button");
// menuButton.addEventListener('click', (event) =>{
//   console.log("something is happening");
// })

const menu = document.createElement('div');
menu.classList.add('menu');

const menuBar = document.createElement('ul');
menuBar.classList.add('menu-bar');

const menuContent = document.createElement('li');
menuContent.classList.add('menu-content');


let menuButton = document.querySelector('.menu-button');

//title
const buttonTitle = document.createElement('h3');
buttonTitle.textContent = "Title of bar";

//buttons
const buttonsContainer = document.createElement('div');
buttonsContainer.classList.add('buttons-container');
buttonsContainer.textContent = "content of menu";

const openButton = document.createElement('button');
const closeButton = document.createElement('button');
openButton.classList.add('open-button');
openButton.textContent = "\u25bc";

closeButton.classList.add('close-button');
closeButton.textContent = "\u25b2";

//appending
menuButton.appendChild(menu);
menu.appendChild(menuBar);
menuBar.appendChild(buttonTitle);
menuBar.appendChild(buttonsContainer);
menuBar.appendChild(menuContent);

//appending buttons
buttonsContainer.appendChild(openButton);
buttonsContainer.appendChild(closeButton);

console.log(menu);