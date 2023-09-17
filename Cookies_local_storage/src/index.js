function setCookies() {
    const firstname = document.getElementById("firstname").value;
    const email = document.getElementById("email").value;

    const expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 10); // Set expiration to 10 days from now
    const options = `expires=${expirationDate.toUTCString()};path=/`;

    document.cookie = `firstname=${firstname}; ${options}`;
    document.cookie = `email=${email}; ${options}`;
}

function showCookies() {
    const cookies = document.cookie.split(';');

    const paragraph = document.createElement('p');

    cookies.forEach(cookie => {
        const [name, value] = cookie.trim().split('=');
        paragraph.innerHTML += `${name}: ${value}<br>`;
    });

    document.body.appendChild(paragraph);
}
