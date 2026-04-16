const header = document.querySelector("header");
      const hamburgerBtn = document.querySelector("#hamburger-btn");
      const closeMenuBtn = document.querySelector("#close-menu-btn");

      // Toggle mobile menu on hamburger button click
      hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

      // Close mobile menu on close button click
      closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
    

      //increment and decrement counter
const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');

//initialize counter
let counter = 0;

//increment the counter and update the display when the button is clicked
incrementButton.addEventListener('click', function(){
counter += 1; //increment the counter by 1
counterDisplay.textContent = counter; //update the counter display
});

//decrememnt the counter and update the display when the button is clicked
decrementButton.addEventListener('click', function(){
counter -= 1; //decrement the counter by 1
counterDisplay.textContent = counter; //update the counter display
});

//Reset button
const resetButton = document.getElementById('resetButton');

//add an event listener to the reset button to refresh the page
resetButton.addEventListener('click', function(){
location.reload(); //refresh the page

});


const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

//Get references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
    return namePattern.test(name);
}

// Add an event listener to the button 
greetButton.addEventListener('click', function(){
// Get the value of the input
const username = usernameInput.value.trim();

// Check if the input is not empty and valid
if (username === '') {
    greetingMessage.textContent = 'Fill out !';
} else if (!isValidName(username)) {
    greetingMessage.textContent = 'Invalid input. Please use only letters.';
} else {
    // Set the greeting message
    greetingMessage.textContent = `How are you today, ${username}!`;
}
});

const emailaddressInput = document.getElementById('emailaddress');
const emailButton = document.getElementById('emailButton');
const emailGreeting = document.getElementById('emailGreeting');

//Get references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
    return namePattern.test(name);
}

// Add an event listener to the button 
emailButton.addEventListener('click', function(){
// Get the value of the input
const emailaddress = emailaddressInput.value.trim();

// Check if the input is not empty and valid
if (emailaddress === '') {
    emailGreeting.textContent = 'Fill out !';
} else if (!isValidName(emailaddress)) {
    emailGreeting.textContent = 'Invalid input. Please use only letters.';
} else {
    // Set the greeting message
    emailGreeting.textContent = `How are you today, ${emailaddress}!`;
}
});


const lastnameInput = document.getElementById('lastname');
const buttonGreet = document.getElementById('buttonGreet');
const messageGreeting = document.getElementById('messageGreeting');

//Get references to the form elements

//function to check if the input contains only letters
function isValidName(name) {
    const namePattern = /^[a-zA-Z\s]+$/; // Regular expression to allow only letters and spaces
    return namePattern.test(name);
}

// Add an event listener to the button 
buttonGreet.addEventListener('click', function(){
// Get the value of the input
const lastname = lastnameInput.value.trim();

// Check if the input is not empty and valid
if (lastname === '') {
    messageGreeting.textContent = 'Fill out !';
} else if (!isValidName(lastname)) {
    messageGreeting.textContent = 'Invalid input. Please use only letters.';
} else {
    // Set the greeting message
    messageGreeting.textContent = `How are you today, ${lastname}!`;
}
});


const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', function(){

    //create a new paragraph element
    const newParagraph = document.createElement('p')

    //set its text content
    newParagraph.textContent = 'The ticket price is changing from time to time, Please bare with us Thank you!';

    //append the paragraphto the center
    paragraphContainer.appendChild(newParagraph);
});




