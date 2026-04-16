 
 const button = document.getElementById("convertBtn");

    button.addEventListener("click", function() {
      const usd = document.getElementById("usdInput").value;
      const rate = 56; // example rate (1 USD = 56 PHP)

      if (usd === "" || usd <= 0) {
        document.getElementById("result").textContent = "Please enter a valid amount.";
        return;
      }

      const php = usd * rate;
      document.getElementById("result").textContent = usd + " USD = " + php.toFixed(2) + " PHP";
    });