// Product image
 let images = [
			'image/gallery-1.jpg',
			'image/gallery-2.jpg',
			'image/gallery-3.jpg',
			'image/gallery-4.jpg'
			
		];
		let index = 0;

		function changeImage(imageSrc) {
			document.getElementById('largeImage').src = imageSrc;
		}

		function prevImage() {
			index = (index - 1 + images.length) % images.length;
			document.getElementById('largeImage').src = images[index];
		}

		function nextImage() {
			index = (index + 1) % images.length;
			document.getElementById('largeImage').src = images[index];
		}


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

  //Show toast notification
        function showToast(message) {
            const toast = document.getElementById("toast");
            toast.textContent = message;
            toast.classList.add("show");

            //Hide it after 3 seconds
            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        }

        document.getElementById("showToastBtn").addEventListener("click", () => {
        showToast('Request was successfully sent!');
        });
    