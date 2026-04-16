 // Read query parameters and display them
        const params = new URLSearchParams(window.location.search);
        const productName = params.get('product') || 'N/A';
        const quantity = params.get('qty') || '0';
        const total = params.get('total') || '0';

        document.getElementById('productName').textContent = productName;
         document.getElementById('qty').textContent = quantity;
         document.getElementById('total').textContent = total;

         //Back to button handler
         document.getElementById('backBtn').addEventListener('click', function () {
         window.location.href = "products.html";
         });

         //proceed to payment handler
         document.getElementById('payBtn').addEventListener('click', function () {
          alert(`Proceeding to payment...\n\nProduct: ${productName}\nQuantity: ${quantity}\nTotal Price: $${total}`);
         });
        
        
