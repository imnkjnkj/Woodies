function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav-items") {
      x.className += " responsive";
    } else {
      x.className = "nav-items";
    }
  }
  ScrollReveal().reveal('.header');
  ScrollReveal().reveal('.about-us');
  ScrollReveal().reveal('.how-it-works');
  ScrollReveal().reveal('.footer');
