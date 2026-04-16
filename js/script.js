
//Alert message
const alertButton = document.getElementById('alertButton');

//Display alert button is click (onclick function)
alertButton.addEventListener('click', function () {
    alert('Hello! Welcome To My Website')
});




//Hamburger button 
  const header = document.querySelector("header");
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  // Toggle mobile menu on hamburger button click
  hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

  // Close mobile menu on close button click
  closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());

  /* When the user clicks on the button, 
  toggle between hiding and showing the dropdown content */
  function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
  }


const toggle = document.getElementById('toggle');
const toggleButton = document.getElementById('toggleButton');

//toggle the menu visibility when the menu button is clicked
toggleButton.addEventListener('click', function() {
    if (toggle.style.display === 'none') {
        toggle.style.display = 'block';
    } else {
        toggle.style.display = 'none';
    }

});


const myButton = document.getElementById("myButton");
const myImg = document.getElementById("myImg");

myButton.addEventListener("click", event =>{

    if(myImg.style.visibility === "hidden"){
        myImg.style.visibility = "visible";
        myButton.textContent = "Hide";
    }
else{
    myImg.style.visibility = "hidden";
    myButton.textContent = "Show";
}
});


const toggleBtn = document.getElementById('toggle-btn');
const video = document.getElementById('video');

toggleBtn.addEventListener('click', () => {
  video.classList.toggle('hidden');
});




 