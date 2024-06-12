document.addEventListener('DOMContentLoaded', () => {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu-button');
  const navigationLinks = document.querySelectorAll('#mobile-menu a');

  // Toggle mobile menu visibility
  menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close mobile menu
  closeMenuButton.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });

  // Close mobile menu when a navigation link is clicked
  navigationLinks.forEach(link => {
    link.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });
  });
});
