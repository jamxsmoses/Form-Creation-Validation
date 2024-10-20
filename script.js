document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  document.querySelector("button").addEventListener("click", (e) => {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    let isValid = true;
    const messages = [];

    if (username.length < 3) {
      isValid = false;
      messages.push("Username shoud be greater than 3");
      console.log(isValid, "from username");
    }

    if (!email.includes("@") || !email.includes(".")) {
      isValid = false;
      messages.push("Mail format is name@domain.com");
      console.log(isValid, "from email");
    }

    if (password.length < 8) {
      isValid = false;
      messages.push("Password should be minimum of 8 characters");
      console.log(isValid, "from password");
    }

    console.log(isValid);
    feedbackDiv.style.display = "block";

    if (isValid === true) {
      feedbackDiv.textContent = "Registration Successful";
      feedbackDiv.style.color = "#28a745";
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545";
    }

    console.log(messages);
    console.log(isValid);

    feedbackDiv.dis;
  });
});
