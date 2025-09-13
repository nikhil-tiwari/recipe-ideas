import { useState, useEffect, useRef } from "react";

const useInView = (options) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(ref.current);
        }
      },
      { threshold: 0.2, ...options }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [ref, options]);

  return [ref, isInView];
};

export default useInView;
