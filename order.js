

document.addEventListener('DOMContentLoaded', function() {
  // Retrieve and display selected vendor name
  const vendor = JSON.parse(localStorage.getItem('selectedVendor'));
  if (vendor) {
      document.getElementById('vendorName').value = vendor.name;
  }

  // Pricing data
  const pricing = {
      A4: {
          bw: { single: 2, double: 3 },
          color: { single: 10, double: 15 }
      },
      A3: {
          bw: { single: 4, double: 6 },
          color: { single: 20, double: 30 }
      }
  };

  // Form element references
  const paperSizeSelect = document.getElementById('paperSize');
  const printTypeSelect = document.getElementById('printType');
  const sideTypeSelect = document.getElementById('sideType');
  const pagesInput = document.getElementById('pages');
  const totalAmountSpan = document.getElementById('totalAmount');
  const uploadDocument = document.getElementById('uploadDocument');
  const deliveryAddressInput = document.getElementById('deliveryAddress');

  // Calculate total amount
  function calculateTotal() {
      const paperSize = paperSizeSelect.value;
      const printType = printTypeSelect.value;
      const sideType = sideTypeSelect.value;
      const pages = parseInt(pagesInput.value) || 1;

      const pricePerPage = pricing[paperSize][printType][sideType];
      const totalAmount = pricePerPage * pages;

      totalAmountSpan.textContent = totalAmount;
  }

  // Event listeners for recalculating total amount
  paperSizeSelect.addEventListener('change', calculateTotal);
  printTypeSelect.addEventListener('change', calculateTotal);
  sideTypeSelect.addEventListener('change', calculateTotal);
  pagesInput.addEventListener('input', calculateTotal);

  // Initial calculation on page load
  calculateTotal();

  // Handle document upload
  function handleDocumentUpload() {
      const selectedFile = uploadDocument.files[0]; // Get the uploaded file

      if (selectedFile) {
          // Store the file information in localStorage
          localStorage.setItem('uploadedDocument', selectedFile.name); // Store file name for simplicity
          // You can also add further handling, such as preview or validation, if needed
      }
  }

  // Handle form submission
  document.getElementById('orderForm').addEventListener('submit', function(e) {
      e.preventDefault(); // Prevent default form submission

      // Collect form data
      const vendorName = document.getElementById('vendorName').value;
      const paperSize = paperSizeSelect.value;
      const printType = printTypeSelect.value;
      const sideType = sideTypeSelect.value;
      const pages = parseInt(pagesInput.value) || 1;
      const deliveryAddress = deliveryAddressInput.value;
      const totalAmount = totalAmountSpan.textContent;

      // Handle document upload
      handleDocumentUpload();

      // Retrieve existing orders or create a new array
      const orders = JSON.parse(localStorage.getItem('orders')) || [];

      // Add new order to orders array
      orders.push({ vendorName, paperSize, printType, sideType, pages, deliveryAddress, totalAmount });

      // Save updated orders array back to localStorage
      localStorage.setItem('orders', JSON.stringify(orders));

      // Redirect to order history page
    //   window.location.href = 'order-his.html';
  });
});
