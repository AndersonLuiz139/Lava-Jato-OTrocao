// Menu do celular (abre e fecha pelo botão do header)
const btnMenu = document.getElementById('btn-menu');
const menu = document.getElementById('menu');

btnMenu.addEventListener('click', () => {
  const aberto = menu.classList.toggle('aberto');
  btnMenu.setAttribute('aria-expanded', String(aberto));
  btnMenu.querySelector('i').className = aberto ? 'bi bi-x-lg' : 'bi bi-list';
});

// Fecha o menu ao clicar em um link
menu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    menu.classList.remove('aberto');
    btnMenu.setAttribute('aria-expanded', 'false');
    btnMenu.querySelector('i').className = 'bi bi-list';
  });
});

// Ano atual no rodapé
document.getElementById('ano').textContent = new Date().getFullYear();
