import { useEffect } from 'react';

function useMagneticEffect(selector = '.magnetic') {
  useEffect(() => {
    const elements = document.querySelectorAll(selector);

    elements.forEach(element => {
      const handleMouseMove = (e) => {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * 0.3;
        const deltaY = (e.clientY - centerY) * 0.3;

        element.style.transform = `translate(${deltaX}px, ${deltaY}px)`;
      };

      const handleMouseLeave = () => {
        element.style.transform = 'translate(0px, 0px)';
      };

      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        element.removeEventListener('mousemove', handleMouseMove);
        element.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, [selector]);
}

export default useMagneticEffect;
