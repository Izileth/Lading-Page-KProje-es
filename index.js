
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