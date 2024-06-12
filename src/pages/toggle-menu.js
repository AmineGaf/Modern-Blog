function attachMenuListeners() {
  const menuButton = document.getElementById('menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const closeMenuButton = document.getElementById('close-menu-button');

  if (!menuButton || !mobileMenu || !closeMenuButton) return;

  // Function to toggle mobile menu visibility
  const toggleMenu = () => {
    mobileMenu.classList.toggle('hidden');
  };

  // Function to close mobile menu
  const closeMenu = () => {
    mobileMenu.classList.add('hidden');
  };

  // Remove existing event listeners to prevent duplication
  menuButton.removeEventListener('click', toggleMenu);
  closeMenuButton.removeEventListener('click', closeMenu);

  // Attach event listeners
  menuButton.addEventListener('click', toggleMenu);
  closeMenuButton.addEventListener('click', closeMenu);
}

// Attach event listeners on initial load
document.addEventListener('DOMContentLoaded', attachMenuListeners);

// Re-attach event listeners on navigation (if using client-side routing)
window.addEventListener('astro:after-swap', attachMenuListeners);
