/**
 * Utility function for smooth scrolling to a section with header offset
 * Reusable across components to avoid code duplication
 */
export const scrollToSection = (sectionId, offset = 80) => {
  const element = document.querySelector(sectionId);
  if (element) {
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

