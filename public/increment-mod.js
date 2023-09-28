const counterElements = document.querySelectorAll('.counter');
const repeatInterval = 7000; // Repeat interval in milliseconds (10 seconds)

function animateCounter(counter, targetValue) {
  let currentValue = 0;
  const animationDuration = 2000; // Duration of the animation in milliseconds
  const increment = 1; // Increment value
  
  function updateCounter() {
    const startTime = Date.now();
    
    function step() {
      const currentTime = Date.now();
      const elapsedTime = currentTime - startTime;
      
      if (elapsedTime < animationDuration) {
        // Calculate the new value based on the elapsed time
        const progress = elapsedTime / animationDuration;
        currentValue = Math.min(Math.round(progress * targetValue), targetValue);
        
        // Update the counter text
        counter.textContent = currentValue;
        
        // Request the next frame
        requestAnimationFrame(step);
      } else {
        // Animation completed, set the final value
        currentValue = targetValue;
        counter.textContent = currentValue;
      }
    }
  
    // Start the animation
    step();
  }

  // Start the animation when the element is in the viewport
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5, // When half of the element is in the viewport
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // When the element is in the viewport, start the animation
        updateCounter();
        // Disconnect the observer to avoid repeating on subsequent scrolls
        observer.disconnect();
      }
    });
  }, options);

  // Start observing each counter element
  counterElements.forEach((counterElement) => {
    observer.observe(counterElement);
  });
}

// Call the animateCounter function for each counter element with its target value
animateCounter(counterElements[0], 12 /* Target Value */);
animateCounter(counterElements[1] , 120/* Target Value */);
animateCounter(counterElements[2], 73); // Set the target value for the third counter
animateCounter(counterElements[3], 42); // Set the target value for the fourth counter

// Automatically repeat the animations every 10 seconds
setInterval(() => {
  counterElements.forEach((counterElement, index) => {
    const targetValue = index === 0 ? 12 : index === 1 ? 120 : index === 2 ? 73 : index === 3 ? 42 : 0;
    animateCounter(counterElement, targetValue);
  });
}, repeatInterval);
