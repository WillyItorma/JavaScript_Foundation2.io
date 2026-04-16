 /*document.addEventListener("DOMContentLoaded", function () {
            const calculateBtn = document.getElementById('calculateBtn');
            calculateBtn.addEventListener('click', function () {
                const amount = parseFloat(document.getElementById('amount').value);
                const years = parseInt(document.getElementById('years').value);
                const interestRate = 0.10; // 5% per year

                if (isNaN(amount) || amount <= 0) {
                    alert("Please enter a valid amount.");
                    return;
                }

                const totalInterest = amount * interestRate * years;
                const totalPayment = amount + totalInterest;
                const yearlyPayment = totalPayment / years;
                const monthlyPayment = totalPayment / (years * 12);

                document.getElementById('result').innerHTML = `
                <strong>Results:</strong><br>
                Total Interest: ₱${totalInterest.toFixed(2)}<br>
                Total Payment: ₱${totalPayment.toFixed(2)}<br>
                Yearly Payment: ₱${yearlyPayment.toFixed(2)}<br>
                <span style="color:green;">Monthly Payment:  ₱${monthlyPayment.toFixed(2)}</span>
                `;

            });

        });*/

function calculateInterest() {
            const principal = parseFloat(document.getElementById("principal").value);
            const years = parseInt(document.getElementById("years").value);
            const rate = 10; // 10% per year

            if (isNaN(principal) || isNaN(years)) {
                document.getElementById("result").innerText = "Please enter valid numbers."; 
                return;
            }

            // Simple interest formula: A = P(1 + rt)
            
            const totalAmount = principal * (1 + (rate / 100) * years);
            const interest = totalAmount - principal;

            document.getElementById("result").innerHTML =  `
            Interest: ₱${interest.toFixed(2)} <br>
            Total Amount after ${years} years: ₱${totalAmount.toFixed(2)}
           `;
        }

        //Hamburger button 
  const header = document.querySelector("header");
  const hamburgerBtn = document.querySelector("#hamburger-btn");
  const closeMenuBtn = document.querySelector("#close-menu-btn");

  // Toggle mobile menu on hamburger button click
  hamburgerBtn.addEventListener("click", () => header.classList.toggle("show-mobile-menu"));

  // Close mobile menu on close button click
  closeMenuBtn.addEventListener("click", () => hamburgerBtn.click());
