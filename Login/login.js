// Using plain JavaScript

// Add the 'glowIcon' class when input field is focused
var inputTextFields = document.querySelectorAll(".input_text");

inputTextFields.forEach(function(inputField) {
  inputField.addEventListener("focus", function() {
    var icon = this.previousElementSibling;
    if (icon.classList.contains("fa")) {
      icon.classList.add("glowIcon");
    }
  });
});

// Remove the 'glowIcon' class when input field loses focus
inputTextFields.forEach(function(inputField) {
  inputField.addEventListener("focusout", function() {
    var icon = this.previousElementSibling;
    if (icon.classList.contains("fa")) {
      icon.classList.remove("glowIcon");
    }
  });
});
