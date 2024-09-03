const vendors = [
  {
      name: 'COEP Xerox Center',
      location: 'Wellesely Rd,Shivajinagar,Pune-411 005',
      services: ['A4', 'A3', 'Color', 'B&W'],
      status: 'AVAILABLE',
      image: 'shop/coep1.PNG'
  },
  {
      name: 'Jumbo XeroX Services',
      location: ' shop no 1, Chandan Shopping Center, Bhaji Market, Chandan Nagar, Pune, Maharashtra 411014',
      services: ['A4', 'A3', 'Color', 'B&W'],
      status: 'Closed',
      image: 'shop/103.jpg'
  },
  {
    name: 'COEP Hostel Xerox',
    location: ' Wellesely Rd,Shivajinagar,Pune-411 005',
    services: ['A4', 'A3', 'Color', 'B&W'],
    status: 'AVAILABLE',
    image: 'shop/coep2.PNG'
  }
  // Add more vendors as needed
];

const vendorList = document.getElementById('vendor-list');

vendors.forEach((vendor, index) => {
  const vendorCard = document.createElement('div');
  vendorCard.classList.add('vendor-card');

  vendorCard.innerHTML = `
      <img src="${vendor.image}" alt="${vendor.name}" class="vendor-image">
      <div class="vendor-info">
          <h3 class="vendor-name">${vendor.name}</h3>
          <p class="vendor-location">${vendor.location}</p>
          <p class="vendor-status ${vendor.status.toLowerCase()}">${vendor.status}</p>
          <button class="vendor-order-button" onclick="placeOrder(${index})" ${vendor.status === 'Closed' ? 'disabled' : ''}>
              ${vendor.status === 'Closed' ? 'Closed' : 'Place Order'}
          </button>
      </div>
  `;

  vendorList.appendChild(vendorCard);
});

function placeOrder(vendorIndex) {
  const selectedVendor = vendors[vendorIndex];
  localStorage.setItem('selectedVendor', JSON.stringify(selectedVendor));
  window.location.href = 'order.html';
}























document.addEventListener('DOMContentLoaded', () => {
  // Show loading animation
  const loadingElement = document.getElementById('loading');
  loadingElement.style.display = 'block';

  // Function to hide loading animation and ask for location permissions
  const hideLoadingAndAskForLocation = () => {
    loadingElement.style.display = 'none';

    // Check for location permissions
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          console.log('Location retrieved:', position);
          // Additional code to handle the retrieved location can be added here
        },
        (error) => {
          alert('Unable to retrieve your location.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }

    
  };

  // Hide loading animation and ask for location after 2 seconds
  setTimeout(hideLoadingAndAskForLocation, 2000); // 2000 milliseconds = 2 seconds
});



