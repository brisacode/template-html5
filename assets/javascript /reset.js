

// Reset JavaScript

// Desativa o comportamento padrão do clique do botão direito do mouse
document.addEventListener('contextmenu', function (event) {
    event.preventDefault();
});

// Desativa a seleção de texto
document.addEventListener('selectstart', function (event) {
    event.preventDefault();
});

// Desativa o arrastar e soltar de elementos
document.addEventListener('dragstart', function (event) {
    event.preventDefault();
});

// Desativa a rotação da roda do mouse
document.addEventListener('wheel', function (event) {
    event.preventDefault();
});

// Desativa o comportamento padrão de toque e segure em dispositivos móveis
document.addEventListener('touchstart', function (event) {
    event.preventDefault();
});

// Desativa a rotação automática em dispositivos móveis
window.addEventListener('orientationchange', function (event) {
    // Mantenha a orientação em retrato
    if (window.orientation !== 0) {
        window.orientation = 0;
    }
});


document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.year').textContent = new Date().getFullYear();
});
