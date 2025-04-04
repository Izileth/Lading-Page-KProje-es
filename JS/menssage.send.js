function ativarLinksWhatsApp(numeroWhatsApp = '5599999999999') {
    const links = document.querySelectorAll('.botao-orcamento');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
        e.preventDefault();

        const produto = this.dataset.produto || 'serviço';
        const nomeEmpresa = this.dataset.nome || 'nossa empresa';

        const mensagem = `Olá! Gostaria de solicitar um orçamento para ${produto}. Vi no site ${nomeEmpresa} e me interessei pelo serviço.`;

        const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;

        window.open(url, '_blank');
        });
    });
}

// Ativa quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function () {
  ativarLinksWhatsApp('5591981125595'); // Substitua com seu número do WhatsApp (com DDI e DDD, sem + ou traços)
});
