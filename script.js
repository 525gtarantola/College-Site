document.addEventListener("DOMContentLoaded", function() {
  const brandLink = document.getElementById('brand-link');

  // Initially set the opacity to 0
  brandLink.style.opacity = '0';
  brandLink.style.transition = 'opacity 0.5s'; // Smooth transition for opacity

  // Show or hide the button based on scroll position
  window.addEventListener('scroll', function() {
    console.log(window.scrollY); // Check the scroll position
    if (window.scrollY > 50) { // Change to 50 pixels
      brandLink.style.opacity = '1'; // Show the button
    } else {
      brandLink.style.opacity = '0'; // Hide the button
    }
  });

  // Add click event to smooth scroll to top
  brandLink.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Smooth scroll to the top
    });
  });
});