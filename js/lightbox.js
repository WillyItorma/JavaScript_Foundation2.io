
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

 // Select elements
        const popup = document.getElementById("popup");
         const popupImg = document.getElementById("popup-img");
         const popupCaption = document.getElementById("popup-caption");
         const closeBtn = document.getElementById("close-btn");

         // Add click event to each image in the gallery
         document.querySelectorAll(".gallery img").forEach(img => {
            img.addEventListener("click", () => {
            popupImg.src = img.src;
            popupCaption.textContent = img.dataset.caption;
            popup.style.display = "flex";
         });
        });

        // Close the popup when close button was clicked
        closeBtn.addEventListener("click", () => {
            popup.style.display = "none";
        });