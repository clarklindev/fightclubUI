const getDocumentScrollPercentage = (): number => {
  const maxScrollTop = document.documentElement.scrollHeight - window.innerHeight;
  const currentScrollTop = window.scrollY;

  if (maxScrollTop === 0) {
    // Prevent division by zero when the content fits within the viewport
    return 0;
  } else {
    return (currentScrollTop / maxScrollTop) * 100;
  }

  return 0; // Default to 0% if the element is not found
};

export default getDocumentScrollPercentage;
