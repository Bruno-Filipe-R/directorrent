const toggleTheme = document.getElementById('toggle-theme');
const body = document.body;

toggleTheme.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    
});

/* Estilo do botão
button.addEventListener('mouseover', () => {
    button.style.backgroundColor = '#008CBA';
});*/

