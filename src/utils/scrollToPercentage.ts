// This code defines a function scrollToPercentage that takes a percentage value and smoothly scrolls to that percentage of the scrollable element. You can customize the duration and interval to control the smoothness of the scroll animation.

export const scrollToPercentage = async (
  scrollableElement: React.RefObject<HTMLElement>,
  percentage: number,
): Promise<void> => {
  if (scrollableElement.current) {
    const maxScrollTop = scrollableElement.current.scrollHeight - scrollableElement.current.clientHeight;
    const scrollTo = (percentage / 100) * maxScrollTop;

    // Use async/await to animate the scroll smoothly (optional)
    const duration = 300; // Duration in milliseconds

    scrollableElement.current.style.transition = `scrollTop ${duration}ms ease-in-out`;
    scrollableElement.current.scrollTop = scrollTo;

    // Wait for the transition to finish
    await new Promise<void>(resolve => {
      scrollableElement.current?.addEventListener('transitionend', () => {
        scrollableElement.current!.style.transition = ''; // Clear the transition property
        resolve();
      });
    });
  }
};
