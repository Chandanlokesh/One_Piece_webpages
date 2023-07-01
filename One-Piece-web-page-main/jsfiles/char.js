function handleScroll() {
  const flexBoxes = document.querySelectorAll('.a');
  
  for (let i = 0; i < flexBoxes.length; i++) {
    const box = flexBoxes[i];
    const boxTop = box.getBoundingClientRect().top;
    
    if (i < 2) { // Check if it's the first or second flex box
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
      box.style.transition = 'none'; // Disable the transition effect
    } else if (boxTop < window.innerHeight) {
      box.style.opacity = 1;
      box.style.transform = 'translateY(0)';
      box.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
    } else {
      box.style.opacity = 0;
      box.style.transform = 'translateY(100px)';
      box.style.transition = 'opacity 0.5s ease-in, transform 0.5s ease-in';
    }
  }
}

function setupInitialBoxes() {
  const initialBoxes = Array.from(document.querySelectorAll('.flex-box')).slice(0, 2);
  initialBoxes.forEach((box) => {
    box.style.opacity = 1;
    box.style.transform = 'translateY(0)';
    box.style.transition = 'none'; // Disable the transition effect
  });
}

document.addEventListener('scroll', handleScroll);
document.addEventListener('DOMContentLoaded', setupInitialBoxes);
