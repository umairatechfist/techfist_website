document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    var form = this;
    var status = document.getElementById('status');
    var data = new FormData(form);
    var xhr = new XMLHttpRequest();

    xhr.open(form.method, 'https://formspree.io/f/xeqynwnd'); // Replace with your Formspree endpoint
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;

        if (xhr.status === 200) {
            // Clear the form inputs upon successful submission
            form.reset();
            // Update the status message to indicate successful submission
            status.innerHTML = 'Message sent! We will get back to you soon.';
            // Redirect to a new page after a short delay (e.g., 3 seconds)
            setTimeout(function() {
                window.location.href = 'https://www.example.com/thank-you.html'; // Replace with your desired thank you page URL
            }, 3000); // Redirect after 3 seconds (3000 milliseconds)
        } else {
            // Update the status message to indicate submission failure
            status.innerHTML = 'Oops! There was a problem sending your message.';
        }
    };

    // Send form data asynchronously
    xhr.send(data);
});
