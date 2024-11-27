document.body.querySelector('#hbgBtn').addEventListener('click', (event) => {
   const menu = document.body.querySelector('#menu');
   const burger_open = document.body.querySelector('.burger__open');
   const burger_close = document.body.querySelector('.burger__close');

   if (menu.style.display === 'none') {
      menu.style.display = 'flex';
      burger_open.style.display = 'none';
      burger_close.style.display = 'initial';
   } else {
      menu.style.display = 'none';
      burger_open.style.display = 'initial';
      burger_close.style.display = 'none';
   }
 });