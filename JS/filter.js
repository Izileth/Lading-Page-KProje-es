document.addEventListener('DOMContentLoaded', function() {
    // Selecionar elementos
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    // Adicionar event listeners aos botões de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remover classe 'active' de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Adicionar classe 'active' ao botão clicado
            this.classList.add('active');
            
            // Obter categoria do filtro
            const filterValue = this.getAttribute('data-filter');
            
            // Filtrar itens
            portfolioItems.forEach(item => {
                // Remover animação anterior
                item.style.opacity = '0';
                item.style.transform = 'scale(0.8)';
                
                // Se o filtro for 'todos' ou o item corresponder à categoria do filtro
                if (filterValue === 'todos' || item.getAttribute('data-category') === filterValue) {
                    setTimeout(() => {
                        item.style.display = 'block';
                        // Adicionar animação de entrada
                        setTimeout(() => {
                            item.style.opacity = '1';
                            item.style.transform = 'scale(1)';
                        }, 50);
                    }, 300);
                } else {
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Inicialização com efeito de entrada escalonado
    portfolioItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            item.style.transition = 'all 0.5s ease';
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
        }, 100 * index);
    });
    
    // Adicionar lightbox para as imagens (versão simples)
    const portfolioLinks = document.querySelectorAll('.portfolio-link');
    
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const imageUrl = this.closest('.portfolio-item').querySelector('.portfolio-img').src;
            const title = this.closest('.overlay-content').querySelector('h3').textContent;
            
            // Criar lightbox
            const lightbox = document.createElement('div');
            lightbox.className = 'portfolio-lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-content">
                    <span class="close-lightbox">&times;</span>
                    <h3>${title}</h3>
                    <img src="${imageUrl}" alt="${title}">
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            // Prevenir scroll do body
            document.body.style.overflow = 'hidden';
            
            // Aparecer lightbox com animação
            setTimeout(() => {
                lightbox.style.opacity = '1';
            }, 10);
            
            // Fechar lightbox ao clicar no X ou fora da imagem
            lightbox.addEventListener('click', function(e) {
                if (e.target.classList.contains('close-lightbox') || e.target.classList.contains('portfolio-lightbox')) {
                    lightbox.style.opacity = '0';
                    setTimeout(() => {
                        document.body.removeChild(lightbox);
                        document.body.style.overflow = 'auto';
                    }, 300);
                }
            });
        });
    });
});