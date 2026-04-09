document.addEventListener('DOMContentLoaded', function() {
    // Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('nav ul');

    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }

    // Delivery Form Submission (Basic Example)
    const deliveryForm = document.getElementById('delivery-form');
    const formMessage = document.getElementById('form-message');

    if (deliveryForm) {
        deliveryForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            // In a real application, you would send this data to a server.
            // For now, we'll just simulate a success message.
            const formData = new FormData(deliveryForm);
            const data = Object.fromEntries(formData.entries());

            console.log('Delivery Application Data:', data);

            // Display a success message
            if (formMessage) {
                formMessage.textContent = 'Thank you for your application! We will review it shortly.';
                formMessage.className = 'form-message success'; // Apply success class
            }

            // Optionally, reset the form after a delay
            setTimeout(() => {
                deliveryForm.reset();
                if (formMessage) {
                    formMessage.textContent = '';
                    formMessage.className = 'form-message';
                }
            }, 5000); // Reset after 5 seconds
        });
    }
});
