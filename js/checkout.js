document.querySelectorAll('.product-item').forEach(item => {
    const decreaseBtn = item.querySelector('.decrease');
    const increaseBtn = item.querySelector('.increase');
    const countSpan = item.querySelector('.count');
    const priceElement = item.querySelector('.price');
  
    const getPriceValue = () => parseFloat(priceElement.textContent.replace('$', ''));
  
    decreaseBtn.addEventListener('click', () => {
      let current = parseInt(countSpan.textContent);
      if (current > 1) {
        countSpan.textContent = current - 1;
        updateSummary();
      }
    });
  
    increaseBtn.addEventListener('click', () => {
      let current = parseInt(countSpan.textContent);
      countSpan.textContent = current + 1;
      updateSummary();
    });
  });
  
  // 🔄 Actualiza el total, cantidad de ítems y subtotal
  function updateSummary() {
    const items = document.querySelectorAll('.product-item');
    let totalItems = 0;
    let totalPrice = 0;
  
    items.forEach(item => {
      const count = parseInt(item.querySelector('.count').textContent);
      const price = parseFloat(item.querySelector('.price').textContent.replace('$', ''));
      totalItems += count;
      totalPrice += count * price;
    });
  
    document.querySelector('.items-count').textContent = `${totalItems} items`;
    document.querySelector('.total').textContent = `$${totalPrice.toFixed(2)}`;
    document.querySelector('.subtotal-amount').textContent = `$${totalPrice.toFixed(2)}`;
  }
  
  document.querySelector('.pay-btn').addEventListener('click', () => {
    Swal.fire({
      icon: 'success',
      title: '¡Gracias por tu compra!',
      text: 'Tu pedido ha sido procesado con éxito. 🚀',
      confirmButtonText: 'Continuar',
      confirmButtonColor: '#000',
    });
  });