// Selecionando os elementos
const menuHamburger = document.querySelector('.menu-hamburger');
const menuBar = document.querySelector('.menu-bar');

// Adicionando o listener de click para alternar a classe 'active'
menuHamburger.addEventListener('click', () => {
    menuHamburger.classList.toggle('active');  // Rotaciona o ícone da hamburger
    menuBar.classList.toggle('active');        // Exibe ou esconde o menu
});

// FAQ 
document.addEventListener('DOMContentLoaded', function () {
    const faqButtons = document.querySelectorAll('.faq-btn');

    faqButtons.forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault(); // Evita o comportamento padrão do link
            const answer = this.previousElementSibling; // Seleciona o elemento <p> anterior

            if (answer.classList.contains('open')) {
                answer.classList.remove('open'); // Oculta a resposta
                this.textContent = 'Responder'; // Altera o texto do botão
            } else {
                answer.classList.add('open'); // Mostra a resposta
                this.textContent = 'Ocultar'; // Altera o texto do botão
            }
        });
    });
});