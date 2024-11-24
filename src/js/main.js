document.body.querySelector('#hbgBtn').addEventListener('click', (event) => {
    const menu = document.body.querySelector('#menu');
    if (menu.style.display === 'none')
       menu.style.display = 'initial';
    else
       menu.style.display = 'none';
 });