document.getElementById("nameForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;

    document.getElementById("message").textContent = "Welcome, " + name + "! Thanks for visiting my website.";

    document.getElementById("nameForm").reset();
});