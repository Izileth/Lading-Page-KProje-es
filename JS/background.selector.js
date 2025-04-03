document.querySelectorAll('.bg-servicos').forEach(section => {
    const bgImage = section.getAttribute('data-background');
    if (bgImage) {
        section.style.backgroundImage = `url('${bgImage}')`;
    }
});
