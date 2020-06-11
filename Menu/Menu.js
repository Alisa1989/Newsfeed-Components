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

  Step 1: Write a function that will create a menu component as seen below:
                                                 
  <div class="menu">                             // menu      
    <ul>                                         // menubar aka accordion
      {each menu item as a list item}            // menuComponent
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


function createMenuComponent(title)
{
  const singleComponent = document.createElement('li');
  singleComponent.textContent = title;

  menuBar.appendChild(singleComponent);
 
  return menuBar;
}

// create menu and menuBar
const menu = document.createElement('div');
menu.classList.add('menu');
menu.classList.add('menu--open');

const menuBar = document.createElement('ul');

//append menu to header and menuBar to menu
const header = document.querySelector('.header');
header.appendChild(menu);
menu.appendChild(menuBar);

//add menuButton action
let menuButton = document.querySelector('.menu-button');
menuButton.addEventListener('click', ()=>
{
  menu.classList.toggle('menu--open');
  console.log('button clicked!');
})

//put menuItems in menu
menuItems.forEach((itemObj) => 
  {
  const menuComponent = createMenuComponent(itemObj);
  } 
);
