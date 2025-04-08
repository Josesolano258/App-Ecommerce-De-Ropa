document.querySelectorAll('.product-item').forEach(item => {
    const decreaseBtn = item.querySelector('.decrease');
    const increaseBtn = item.querySelector('.increase');
    const countSpan = item.querySelector('.count');

    decreaseBtn.addEventListener('click', () => {
      let current = parseInt(countSpan.textContent);
      if (current > 1) countSpan.textContent = current - 1;
    });

    increaseBtn.addEventListener('click', () => {
      let current = parseInt(countSpan.textContent);
      countSpan.textContent = current + 1;
    });
  });