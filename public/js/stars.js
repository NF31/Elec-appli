const stars = document.querySelectorAll('.stars input[type="radio"]');

stars.forEach((star, index) => {
  star.addEventListener('click', () => {
    // Parcourt tous les labels précédents et ajoute une classe pour les rendre jaunes
    for (let i = 0; i <= index; i++) {
      const label = stars[i].nextElementSibling;
      label.classList.add('yellow');
    }
    // Parcourt tous les labels suivants et supprime la classe pour les rendre blanches
    for (let i = index + 1; i < stars.length; i++) {
      const label = stars[i].nextElementSibling;
      label.classList.remove('yellow');
    }
  });
});
