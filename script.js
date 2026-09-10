```javascript
/* =========================================================
   NS – RTL & VLSI ACADEMY
   Website JavaScript
   ========================================================= */


/*
   IMPORTANT:

   Replace the number below with your NS Academy
   WhatsApp number.

   India example:

   919876543210

   Do NOT use:
   +91
   spaces
   hyphens
*/


const WHATSAPP_NUMBER = "REPLACE_WITH_YOUR_WHATSAPP_NUMBER";



/* =========================================================
   MOBILE MENU
   ========================================================= */

const menuButton = document.getElementById("menuButton");
const navigation = document.getElementById("navigation");


menuButton.addEventListener("click", function () {

  navigation.classList.toggle("open");

});



/* Close menu after clicking a navigation link */

const navigationLinks =
  document.querySelectorAll(".navigation a");


navigationLinks.forEach(function (link) {

  link.addEventListener("click", function () {

    navigation.classList.remove("open");

  });

});



/* =========================================================
   ENQUIRY FORM → WHATSAPP
   ========================================================= */

const enquiryForm =
  document.getElementById("enquiryForm");


enquiryForm.addEventListener("submit", function (event) {

  event.preventDefault();


  /* Check whether WhatsApp number has been added */

  if (
    WHATSAPP_NUMBER ===
    "REPLACE_WITH_YOUR_WHATSAPP_NUMBER"
  ) {

    alert(
      "Please add your NS Academy WhatsApp number inside script.js before publishing the website."
    );

    return;

  }


  const formData =
    new FormData(enquiryForm);


  const name =
    formData.get("name") || "Not provided";


  const phone =
    formData.get("phone") || "Not provided";


  const email =
    formData.get("email") || "Not provided";


  const qualification =
    formData.get("qualification") ||
    "Not provided";


  const course =
    formData.get("course") ||
    "Not provided";


  const message =
    formData.get("message") ||
    "Not provided";


  const whatsappMessage =

`NS – RTL & VLSI Academy
New Course Enquiry

Name: ${name}

Phone / WhatsApp: ${phone}

Email: ${email}

Qualification: ${qualification}

Course Interested In: ${course}

Message:
${message}

Thank you.`;


  const whatsappURL =
    "https://wa.me/" +
    WHATSAPP_NUMBER +
    "?text=" +
    encodeURIComponent(whatsappMessage);


  window.open(
    whatsappURL,
    "_blank"
  );

});
```
