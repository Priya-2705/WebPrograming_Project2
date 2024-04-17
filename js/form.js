"use strict";

// Event listener for when the DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function () {
  // Declaration of constant for email pattern
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Event handler for form submission
  document.querySelector("form").addEventListener("submit", function (event) {
    // Prevent the default form submission
    event.preventDefault();

    const uname = document.querySelector("input[name='uname']").value.trim();

    // Check if email matches the pattern
    if (!emailPattern.test(uname)) {
      alert("Please enter a valid email address.");
      return;
    }

    // If all validations pass, submit the form
    alert("Form submitted successfully!");
    this.submit();
  });
});
