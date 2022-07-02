// whatsapp button - copy
var whatsappButton = document.getElementById("whatsapp-btn");
var copyMessage = document.getElementById("copy");

whatsappButton.addEventListener("mouseover", function(event) {
copyMessage.classList.toggle("grey");
});

whatsappButton.addEventListener("mouseout", function(event) {
  copyMessage.classList.toggle("grey");
});

whatsappButton.addEventListener("click", function(event) {
  navigator.clipboard.writeText("727962079");
  copyMessage.innerHTML = "copied";
  setTimeout(changeBack, 2000);
});

function changeBack(){
  copyMessage.innerHTML = "copy number";
}

// -----------------------------------
var message;
var iconClass;
var contactForm = document.getElementById("contact-form");
var contactResultDiv = document.getElementById("contact-result-div");

// using emailjs for email services
(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('PI2zpdTrrjly9wPjx');
})();

// sending the contact form
contactForm.addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('conversational_english', 'contact_form', this)
      .then(function() {
        console.log('SUCCESS!');
        iconClass = "fa-envelope-circle-check"
        message = "Message successfully sent!";
        showResult(message, iconClass);
      }, function(error) {
        console.log('FAILED...', error);
        iconClass = "fa-circle-exclamation"
        message = "Something went wrong. Please call or message +420 727962079 instead!"
        showResult(message, iconClass);
      });
  });

  function showResult(text, icon) {
    // hide contact form
    contactForm.classList.add("hide");
    contactForm.classList.remove("show");
    // show contact result div
    contactResultDiv.classList.add("show");
    contactResultDiv.classList.remove("hide");
    document.querySelector("#contact-result-div i").classList.add(icon);
    document.getElementById("contact-form-result").innerHTML = text;
  }
