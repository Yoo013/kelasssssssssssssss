// Add this JavaScript code to generate the falling stars
const createStars = (numStars) => {
    const starsContainer = document.querySelector('.stars');
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement('div');
      star.classList.add('star');
      star.style.left = `${Math.random() * 40}vw`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      star.style.animationDuration = `${1 + Math.random() * 2}s`;
      starsContainer.appendChild(star);
    }
  };
  
  document.addEventListener('DOMContentLoaded', () => {
    createStars(100);
  });
  