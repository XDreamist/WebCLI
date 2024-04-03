document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.querySelector('.overlay');
    const curvature = 3.0;
  
    function updateCurvature() {
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;
      const diagonalLength = Math.sqrt(viewportWidth ** 2 + viewportHeight ** 2);
      const blurRadius = (diagonalLength - Math.min(viewportWidth, viewportHeight)) / 2 / curvature;
      overlay.style.width = `${blurRadius}px`;
      overlay.style.height = `${blurRadius}px`;
      overlay.style.borderRadius = `${blurRadius}px`;
    }
  
    window.addEventListener('resize', updateCurvature);
    updateCurvature();
  });