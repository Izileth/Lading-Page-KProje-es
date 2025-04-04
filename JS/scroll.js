function ativarRolagemSuave() {
  const linksInternos = document.querySelectorAll('a[href^="#"]');

  linksInternos.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const id = this.getAttribute('href');
      const destino = document.querySelector(id);

      if (destino) {
        destino.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

// Ativa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', ativarRolagemSuave);
