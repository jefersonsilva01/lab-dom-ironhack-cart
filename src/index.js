// ITERATION 1

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText;
  const quantity = product.querySelector('.quantity input').value;
  const subtotal = product.querySelector('.subtotal span');

  const calcSubtotal = price * quantity;

  subtotal.innerHTML = calcSubtotal;

  return calcSubtotal;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  const products = document.getElementsByClassName('product');
  const totalValue = document.querySelector('#total-value span');
  let total = 0;

  [...products].forEach(element => {
    total += updateSubtotal(element);
  });

  // ITERATION 3
  //... your code goes here
  totalValue.innerHTML = total;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget.parentNode.parentNode;
  console.log('The target in remove is:', target);
  //... your code goes here
  target.parentNode.removeChild(target);

  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
  const productName = document.querySelector('.create-product input[type=text]');
  const productPrice = document.querySelector('.create-product input[type=number]');
  const tbody = document.querySelector('tbody');
  const tr = document.createElement('tr');

  tr.classList.add("product");

  tr.innerHTML = `
  <tr class="product">
    <td class="name">
      <span>${productName.value}</span>
    </td>
    <td class="price">$<span>${productPrice.value}</span></td>
    <td class="quantity">
      <input type="number" value="0" min="0" placeholder="Quantity" />
    </td>
    <td class="subtotal">$<span>0</span></td>
    <td class="action">
      <button class="btn btn-remove">Remove</button>
    </td>
  </tr>
  `.trim();

  tr.querySelector('.btn-remove').addEventListener('click', removeProduct);

  tbody.appendChild(tr);

  productName.value = '';
  productPrice.value = 0;
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');

  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
  const removeProductBtns = document.getElementsByClassName('btn-remove');
  const createProductBtn = document.getElementById('create');

  [...removeProductBtns].forEach(element => element.addEventListener('click', removeProduct));
  createProductBtn.addEventListener('click', createProduct);
});
