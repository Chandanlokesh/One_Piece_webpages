
function scrollToElement(id) {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
  
  window.addEventListener("load", function () {
    var flexContainers = document.getElementsByClassName("flex-container-2");
  
    for (var i = 0; i < flexContainers.length; i++) {
      var slides = flexContainers[i].getElementsByClassName("slide1");
      var currentSlide = 0;
  
      setInterval(function () {
        for (var j = 0; j < slides.length; j++) {
          slides[j].style.opacity = 0;
        }
  
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
      }, 2000);
    }
  });
  
  window.addEventListener("load", function () {
    var flexContainers = document.getElementsByClassName("flex-container-2");
  
    for (var i = 0; i < flexContainers.length; i++) {
      var slides = flexContainers[i].getElementsByClassName("slide2");
      var currentSlide = 0;
  
      setInterval(function () {
        for (var j = 0; j < slides.length; j++) {
          slides[j].style.opacity = 0;
        }
  
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
      }, 2000);
    }
  });
  window.addEventListener("load", function () {
    var flexContainers = document.getElementsByClassName("flex-container-2");
  
    for (var i = 0; i < flexContainers.length; i++) {
      var slides = flexContainers[i].getElementsByClassName("slide3");
      var currentSlide = 0;
  
      setInterval(function () {
        for (var j = 0; j < slides.length; j++) {
          slides[j].style.opacity = 0;
        }
  
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
      }, 2000);
    }
  });
  
  window.addEventListener("load", function () {
    var flexContainers = document.getElementsByClassName("flex-container-2");
  
    for (var i = 0; i < flexContainers.length; i++) {
      var slides = flexContainers[i].getElementsByClassName("slide4");
      var currentSlide = 0;
  
      setInterval(function () {
        for (var j = 0; j < slides.length; j++) {
          slides[j].style.opacity = 0;
        }
  
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
      }, 2000);
    }
  });
  window.addEventListener("load", function () {
    var flexContainers = document.getElementsByClassName("flex-container-2");
  
    for (var i = 0; i < flexContainers.length; i++) {
      var slides = flexContainers[i].getElementsByClassName("slide5");
      var currentSlide = 0;
  
      setInterval(function () {
        for (var j = 0; j < slides.length; j++) {
          slides[j].style.opacity = 0;
        }
  
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.opacity = 1;
      }, 2000);
    }
  });