import { useEffect, useState, RefObject } from "react";

export const useObserver = (ref: RefObject<Element>): boolean => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Update visibility state only if different to minimize re-renders
        if (entry.isIntersecting !== isVisible) {
          setIsVisible(entry.isIntersecting);
        }
      },
      { threshold: 0.1 }
    );

    const currentElement = ref.current;

    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
    // Depending on your setup, you might want to add `isVisible` to the dependency array
    // But be cautious as it might lead to an infinite loop if not handled correctly
  }, [ref, isVisible]);

  return isVisible;
};
