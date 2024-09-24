// JavaScript to add interactivity
document.addEventListener("DOMContentLoaded", function () {
    // Toggle the navbar on smaller screens
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', function () {
        navbarCollapse.classList.toggle('show');
    });

    // Smooth scroll for internal links
    const links = document.querySelectorAll('.navbar-nav a[href^="#"], .navbar-brand');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Form submission handling
    const contactForm = document.getElementById('contact-form');
    const formContainer = document.querySelector('.container');

    if (contactForm) {
        contactForm.addEventListener('submit', function (e) {
            e.preventDefault();
            
            // Get form data
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Display a confirmation message
            formContainer.innerHTML = `
                <div class="alert alert-success mt-4">
                    <h4 class="alert-heading">Message Sent!</h4>
                    <p>Thank you, ${name}. Your message has been sent to <strong>anilk010555@gmail.com</strong>.</p>
                    <hr>
                    <p class="mb-0">We will get back to you as soon as possible.</p>
                </div>
            `;

            // Optionally, reset the form (in this case not necessary since we're replacing the form)
            // contactForm.reset();
        });
    }
});
