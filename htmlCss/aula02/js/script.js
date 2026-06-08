document.addEventListener('DOMContentLoaded', () =>{
    const button = document.getElementById('btn-accordion');
    const panel = document.getElementById('painel-accordion');

    if (button && panel) {
        button.addEventListener('click', () => {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            button.setAttribute('aria-expanded', !isExpanded);
            panel.classList.toggle('is-visible');
        });
    }
});