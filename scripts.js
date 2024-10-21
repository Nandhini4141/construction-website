document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessages = document.getElementById('form-messages');

    formMessages.innerHTML = `<p>Thank you, ${name}. We will get back to you at ${email} soon!</p>`;
});
