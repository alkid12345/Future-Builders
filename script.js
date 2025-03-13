// Login and Register Navigation
document.getElementById('go-to-register').addEventListener('click', () => {
  document.getElementById('login-dashboard').style.display = 'none';
  document.getElementById('register-dashboard').style.display = 'block';
});

document.getElementById('go-to-login').addEventListener('click', () => {
  document.getElementById('register-dashboard').style.display = 'none';
  document.getElementById('login-dashboard').style.display = 'block';
});

// Login Functionality
document.getElementById('login-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const username = document.getElementById('username').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Simulate login validation
  if (username && email && password) {
    alert('Login Successful!');
    document.getElementById('login-dashboard').style.display = 'none';
    document.getElementById('admin-dashboard').style.display = 'block';
  } else {
    alert('Invalid credentials!');
  }
});

// Register Functionality
document.getElementById('register-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const fullname = document.getElementById('fullname').value;
  const email = document.getElementById('register-email').value;
  const username = document.getElementById('register-username').value;
  const password = document.getElementById('register-password').value;
  const role = document.getElementById('role').value;

  // Simulate OTP verification
  const otp = prompt('Enter OTP (123456):');
  if (otp === '123456') {
    alert('Registration Successful!');
    document.getElementById('register-dashboard').style.display = 'none';
    document.getElementById('login-dashboard').style.display = 'block';
  } else {
    alert('Invalid OTP!');
  }
});

let products = [];
let sales = [];
let transactions = [];

// Show Product Entry
function showProductEntry() {
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('product-entry-dashboard').style.display = 'block';
}

// Show Sales Entry
function showSalesEntry() {
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('sales-entry-dashboard').style.display = 'block';
}

// Show Reports & Analytics
function showReportsAnalytics() {
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('reports-analytics-dashboard').style.display = 'block';
  updateMetrics();
}

// Show Transaction Entry
function showTransactionEntry() {
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('transaction-entry-dashboard').style.display = 'block';
}

// Go Back to Admin Dashboard
function goBackToAdmin() {
  document.getElementById('product-entry-dashboard').style.display = 'none';
  document.getElementById('sales-entry-dashboard').style.display = 'none';
  document.getElementById('reports-analytics-dashboard').style.display = 'none';
  document.getElementById('transaction-entry-dashboard').style.display = 'none';
  document.getElementById('admin-dashboard').style.display = 'block';
}

// Product Entry Form Submission
document.getElementById('product-entry-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const product = {
    name: document.getElementById('product-name').value,
    category: document.getElementById('category').value,
    supplier: document.getElementById('supplier-details').value,
    purchasePrice: document.getElementById('purchase-price').value,
    sellingPrice: document.getElementById('selling-price').value,
    stock: document.getElementById('stock-quantity').value,
    expiry: document.getElementById('expiry-date').value,
  };
  products.push(product);
  updateProductTable();
  alert('Product Entry Successful!');
  document.getElementById('product-entry-form').reset();
});

// Update Product Table
function updateProductTable() {
  const tableBody = document.querySelector('#product-table tbody');
  tableBody.innerHTML = '';
  products.forEach(product => {
    const row = `<tr>
      <td>${product.name}</td>
      <td>${product.category}</td>
      <td>${product.supplier}</td>
      <td>${product.purchasePrice}</td>
      <td>${product.sellingPrice}</td>
      <td>${product.stock}</td>
      <td>${product.expiry}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Sales Entry Form Submission
document.getElementById('sales-entry-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const sale = {
    productName: document.getElementById('sales-product-name').value,
    quantity: document.getElementById('sales-quantity').value,
    customer: document.getElementById('customer-details').value,
    profitLoss: calculateProfitLoss(document.getElementById('sales-product-name').value, document.getElementById('sales-quantity').value),
  };
  sales.push(sale);
  updateSalesTable();
  alert('Sales Entry Successful!');
  document.getElementById('sales-entry-form').reset();
});

// Calculate Profit/Loss
function calculateProfitLoss(productName, quantity) {
  const product = products.find(p => p.name === productName);
  if (product) {
    return (product.sellingPrice - product.purchasePrice) * quantity;
  }
  return 0;
}

// Update Sales Table
function updateSalesTable() {
  const tableBody = document.querySelector('#sales-table tbody');
  tableBody.innerHTML = '';
  sales.forEach(sale => {
    const row = `<tr>
      <td>${sale.productName}</td>
      <td>${sale.quantity}</td>
      <td>${sale.customer}</td>
      <td>${sale.profitLoss}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}

// Update Metrics
function updateMetrics() {
  document.getElementById('total-stock').textContent = products.reduce((sum, p) => sum + parseInt(p.stock), 0);
  document.getElementById('total-sales-today').textContent = sales.length;
  document.getElementById('low-stock-alerts').textContent = products.filter(p => p.stock < 10).length;
  document.getElementById('expiring-soon-alerts').textContent = products.filter(p => new Date(p.expiry) < new Date()).length;
}

// Transaction Entry Form Submission
document.getElementById('transaction-entry-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const transaction = {
    productName: document.getElementById('transaction-product-name').value,
    quantity: document.getElementById('transaction-quantity').value,
    date: document.getElementById('transaction-date').value,
  };
  transactions.push(transaction);
  updateTransactionTable();
  alert('Transaction Entry Successful!');
  document.getElementById('transaction-entry-form').reset();
});

// Update Transaction Table
function updateTransactionTable() {
  const tableBody = document.querySelector('#transaction-table tbody');
  tableBody.innerHTML = '';
  transactions.forEach(transaction => {
    const row = `<tr>
      <td>${transaction.productName}</td>
      <td>${transaction.quantity}</td>
      <td>${transaction.date}</td>
    </tr>`;
    tableBody.innerHTML += row;
  });
}
// Go Back to Login Page
function goBackToLogin() {
  // Hide all dashboards
  document.getElementById('admin-dashboard').style.display = 'none';
  document.getElementById('product-entry-dashboard').style.display = 'none';
  document.getElementById('sales-entry-dashboard').style.display = 'none';
  document.getElementById('reports-analytics-dashboard').style.display = 'none';
  document.getElementById('transaction-entry-dashboard').style.display = 'none';

  // Show Login Dashboard
  document.getElementById('login-dashboard').style.display = 'block';
}
// Go Back to Login After Registration
function goBackToLoginAfterRegistration() {
  // Hide Register Dashboard
  document.getElementById('register-dashboard').style.display = 'none';

  // Show Login Dashboard
  document.getElementById('login-dashboard').style.display = 'block';
}