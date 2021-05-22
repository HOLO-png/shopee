document.addEventListener(
  'DOMContentLoaded',
  () => {
    const vackNgan = document.querySelector('.vackNgan');
    const vachNgan = document.querySelector('.vachNgan');
    const next = document.querySelector('.next.btn-icon');
    const prev = document.querySelector('.prev.btn-icon');

    prev.style.display = 'none';
    next.onclick = () => {
      vackNgan.style.display = 'none';
      vachNgan.classList.add('active');
      next.style.display = 'none';
      prev.style.display = 'block';
    };

    prev.onclick = () => {
      vackNgan.style.display = 'flex';
      vachNgan.classList.remove('active');
      vackNgan.classList.add('active');
      next.style.display = 'block';
      prev.style.display = 'none';
    };
  },
  false
);
