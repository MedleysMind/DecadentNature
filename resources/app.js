


$(document).ready(function() {

  let linkElement = document.createElement('a');
  linkElement.style.visibility= 'hidden';
  linkElement.style.position= 'absolute';
  linkElement.href = 'mailto:rickie420g@gmail.com';
  document.body.appendChild(linkElement);
  
  let clicker = document.getElementById(contactForm);
  
  clicker.onclick = () => {
    linkElement.click();
  }

  //collapses drop down banner on click
  // $('.btn-primary').on('click', function(){
  // $('.dropdown').slideUp(750);
  // })
  // Send contact info and message to client email
  // Opens up the appropriate modal for terms
  // $(".bottomModal").click(function() {
  //   alert("Got Clicked");
  // });

  // Add smooth scrolling to all links
  $(".nav-link").on("click", function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();
      // Store hash
      var hash = this.hash;
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top
        },
        800,
        function() {
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        }
      );
    } // End if
  });
});
// On button click close and add cookie (expires in 100 days)
