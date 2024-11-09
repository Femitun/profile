"use strict";

// Initialize EmailJS with your Public Key
(function() {
  emailjs.init("7pJzwqIbYoMqNt7Qz");
})();

// Function to send email
function sendEmail() {
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // EmailJS parameters
  const templateParams = {
    user_email: email,
    message: message,
  };

  emailjs
    .send("service_ysg5dln", "template_b3spvy2", templateParams)
    .then((response) => {
      console.log("Email sent successfully:", response.status, response.text);
      showToast();
    })
    .catch((error) => {
      console.error("Email sending error:", error);
    });
}

// Function to show toast notification
function showToast() {
  const toast = document.getElementById("success");
  toast.classList.add("show");
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000); // Duration of toast visibility in ms
}
