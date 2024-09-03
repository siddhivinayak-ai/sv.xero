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





















document.addEventListener('DOMContentLoaded', function() {
  // Check if location permission has already been requested
  if (!localStorage.getItem('locationPermission')) {
      // Ask for location permission
      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
              function(position) {
                  // Store the permission granted flag
                  localStorage.setItem('locationPermission', 'granted');
                  // You can use the position.coords.latitude and position.coords.longitude
                  console.log("Latitude: " + position.coords.latitude + ", Longitude: " + position.coords.longitude);
              },
              function(error) {
                  console.error("Error occurred. Error code: " + error.code);
                  // Handle errors here
              }
          );
      } else {
          console.log("Geolocation is not supported by this browser.");
      }
  } else {
      console.log("Location permission already granted.");
      // Optionally retrieve and use the previously stored location data
  }
});




