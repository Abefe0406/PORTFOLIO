// Function to toggle the mobile menu
function toggleMenu() {
      const navItems = document.querySelector('.nav-items');
      navItems.classList.toggle('active');
}

      // Event listener for window resize to handle mobile view
window.addEventListener('resize', () => {
      const navItems = document.querySelector('.nav-items');
      if (window.innerWidth > 768) {
              navItems.classList.remove('active'); // Remove active class on larger screens
      }
});

      // Event listener for the logo click to toggle menu
// document.querySelector('.logo-image').addEventListener('click', toggleMenu);

var tablinks = document.getElementsByClassName("tab-links")

var tabcontent = document.getElementsByClassName("tab-contents")

function openTab(tabName) {
      // Hide all tab contents
      const tabContents = document.querySelectorAll('.tab-contents');
      tabContents.forEach(content => {
            content.classList.remove('active-tab');
      });

      // Show the selected tab content
      const activeTab = document.getElementById(tabName);
      activeTab.classList.add('active-tab');

      // Remove active-link from all tab links
      const tabLinks = document.querySelectorAll('.tab-links');
      tabLinks.forEach(link => {
            link.classList.remove('active-link');
      });

      // Add active-link to the clicked tab
      const clickedTab = document.querySelector(`.tab-links[onclick="openTab('${tabName}')"]`);
      if (clickedTab) {
            clickedTab.classList.add('active-link');
      }
}
function showAlert(service) {
      alert('You clicked on ' + service + ' Service!');
}

