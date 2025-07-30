async function loadProducts() {
  const productList = document.getElementById('product-list');
  productList.innerHTML = 'Loading...';

  const { data, error } = await supabase.from('products').select('*');

  if (error) {
    productList.innerHTML = 'Failed to load products.';
    console.error(error);
    return;
  }

  if (data.length === 0) {
    productList.innerHTML = 'No products found.';
    return;
  }

  productList.innerHTML = '';
  data.forEach(product => {
    const item = document.createElement('div');
    item.className = 'product';
    item.innerHTML = `
      <strong>${product.name}</strong><br>
      Price: ₱${product.price}<br>
      Stock: ${product.stock}
      <hr>
    `;
    productList.appendChild(item);
  });
}

loadProducts();
