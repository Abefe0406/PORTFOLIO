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
document.querySelector('.logo-image').addEventListener('click', toggleMenu);

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

const scriptURL = 'https://script.google.com/macros/s/AKfycbxX8umZTx_cKmvdR0C-Pq912Qo8huFJFtPq4RIeUny2jZAZXwYcyZ1RYunC_2rPsx9E/exec';
        const form = document.forms['submit-to-google-sheet'];
    
        const msg = document.getElementById('msg');

        form.addEventListener('submit', e => {
            e.preventDefault();
            fetch(scriptURL, { method: 'POST', body: new FormData(form) })
                .then(response => {
                    msg.innerHTML = "Message sent successfully!";
                    setTimeout(function() {
                        msg.innerHTML = ""; // Clear the message after 5 seconds
                    }, 5000);
                    form.reset();
                })
                .catch(error => {
                    console.error('Error!', error.message);
                });
        });

        function openmenu() {
            const navItems = document.getElementById('sidemenu');
            navItems.classList.add('active'); // Add the 'active' class to show the menu
        }

        function closemenu() {
            const navItems = document.getElementById('sidemenu');
            navItems.classList.remove('active'); // Remove the 'active' class to hide the menu
        }

        function navigate(event, section) {
            event.preventDefault(); // Prevent default anchor behavior
            closemenu(); // Close the menu
            document.querySelector(`#${section}`).scrollIntoView({ behavior: 'smooth' }); // Scroll to the section
        }

        function checkConnection() {
            if (navigator.onLine) {
                document.getElementById('offline-message').style.display = 'none';
                document.getElementById('portfolio-container').style.display = 'block';
            } else {
                document.getElementById('offline-message').style.display = 'block';
                document.getElementById('portfolio-container').style.display = 'none';
            }
        }

        // Check connection on page load
        window.onload = checkConnection;

        // Listen for online and offline events
        window.addEventListener('online', () => {
            location.reload(); // Refresh the page when back online
        });

        window.addEventListener('offline', checkConnection);
