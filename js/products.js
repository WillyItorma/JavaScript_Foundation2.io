
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


// Check out product korea package 
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 800;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_korea');
		const totalSpan = document.getElementById('total_korea');
		const increaseBtn = document.getElementById('increaseBtn_korea');
		const decreaseBtn = document.getElementById('decreaseBtn_korea');
		const checkoutBtn = document.getElementById('checkoutBtn_korea');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Korea%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});

// Japan package tour check out product
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 1000;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_japan');
		const totalSpan = document.getElementById('total_japan');
		const increaseBtn = document.getElementById('increaseBtn_japan');
		const decreaseBtn = document.getElementById('decreaseBtn_japan');
		const checkoutBtn = document.getElementById('checkoutBtn_japan');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Japan%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});

// Vietnam package tour check out product
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 500;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_vietnam');
		const totalSpan = document.getElementById('total_vietnam');
		const increaseBtn = document.getElementById('increaseBtn_vietnam');
		const decreaseBtn = document.getElementById('decreaseBtn_vietnam');
		const checkoutBtn = document.getElementById('checkoutBtn_vietnam');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Vietnam%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});

// Dubai package tour check out product
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 700;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_dubai');
		const totalSpan = document.getElementById('total_dubai');
		const increaseBtn = document.getElementById('increaseBtn_dubai');
		const decreaseBtn = document.getElementById('decreaseBtn_dubai');
		const checkoutBtn = document.getElementById('checkoutBtn_dubai');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Dubai%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});

// taiwan package tour check out product
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 400;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_taiwan');
		const totalSpan = document.getElementById('total_taiwan');
		const increaseBtn = document.getElementById('increaseBtn_taiwan');
		const decreaseBtn = document.getElementById('decreaseBtn_taiwan');
		const checkoutBtn = document.getElementById('checkoutBtn_taiwan');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Taiwan%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});


// thailand package tour check out product
document.addEventListener('DOMContentLoaded', () => {
		const unitPrice = 300;
		let quantity = 1;

		const quantitySpan = document.getElementById('quantity_thailand');
		const totalSpan = document.getElementById('total_thailand');
		const increaseBtn = document.getElementById('increaseBtn_thailand');
		const decreaseBtn = document.getElementById('decreaseBtn_thailand');
		const checkoutBtn = document.getElementById('checkoutBtn_thailand');

		function updateTotal() {
			quantitySpan.textContent = quantity;
			totalSpan.textContent = (quantity * unitPrice).toFixed(2);
		}

		increaseBtn.addEventListener('click', () => {
			quantity++;
			updateTotal();
		});

		decreaseBtn.addEventListener('click', () => {
			if (quantity > 1) {
				quantity--;
				updateTotal();
			}
		});

		checkoutBtn.addEventListener('click', () => {
			const total = quantity * unitPrice;
			window.location.href = `checkout.html?product=Thailand%20PackageTour&qty=${quantity}&total=${total}`;
		});
		updateTotal();
		});





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