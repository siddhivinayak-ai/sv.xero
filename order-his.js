
























document.addEventListener('DOMContentLoaded', function() {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const orderContainer = document.getElementById('order-container');

  orders.forEach((order, index) => {
      const orderCard = document.createElement('div');
      orderCard.classList.add('order-card');

      orderCard.innerHTML = `
          <button style="background-color:red; color:white; margin-bottom:10px;" class="delete-btn" onclick="deleteOrder(${index})">Delete</button>
          <h3>${order.vendorName}</h3>
          <p class="document-name">Document: ${order.uploadedDocument || 'N/A'}</p>
          <p>Paper Size: ${order.paperSize}</p>
          <p>Print Type: ${order.printType}</p>
          <p>Side: ${order.sideType}</p>
          <p>Pages: ${order.pages}</p>
          <p>Total Amount: Rs ${order.totalAmount}</p>
          <p>Delivery Address: ${order.deliveryAddress}</p>
          <button onclick="markAsDone(${index})">Mark as Done</button>
          <button onclick="notReceived(${index})">Not Received</button>
          <button onclick="reorder(${index})">Reorder</button>
      `;

      orderContainer.appendChild(orderCard);
  });
});

function markAsDone(index) {
  // Logic to mark the order as done
}

function notReceived(index) {
  // Logic to mark the order as not received
}

function deleteOrder(index) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  orders.splice(index, 1);
  localStorage.setItem('orders', JSON.stringify(orders));
  window.location.reload();
}

function reorder(index) {
  const orders = JSON.parse(localStorage.getItem('orders')) || [];
  const order = orders[index];
  localStorage.setItem('selectedVendor', JSON.stringify({ name: order.vendorName }));
  window.location.href = 'order.html';
}
