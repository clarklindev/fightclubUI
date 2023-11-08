export const smoothScroll = (target: HTMLElement, duration: number, offset: number) => {
  const startPosition = window.scrollY;
  const targetPosition = target.getBoundingClientRect().top + window.scrollY + offset;
  const distance = targetPosition - startPosition;
  const startTime = performance.now();

  function scrollAnimation(currentTime: DOMHighResTimeStamp) {
    const timeElapsed = currentTime - startTime;
    const progress = Math.min(timeElapsed / duration, 1);
    window.scrollTo(0, startPosition + distance * progress);

    if (timeElapsed < duration) {
      requestAnimationFrame(scrollAnimation);
    }
  }

  requestAnimationFrame(scrollAnimation);
};

// Usage
// const targetElement = document.querySelector<HTMLElement>('#yourTargetElement'); // Replace with your target element
// const duration = 1000; // 1 second (in milliseconds)
// const offset = -20; //navbar height would be the offset

// smoothScroll(targetElement, duration, offset);
