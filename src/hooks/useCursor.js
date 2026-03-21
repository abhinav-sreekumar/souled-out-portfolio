import { useEffect } from 'react';

function useCursor() {
  useEffect(() => {
    const dot = document.getElementById('cur-dot');
    const ring = document.getElementById('cur-ring');
    let mx = 0, my = 0, rx = 0, ry = 0;

    const handleMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
      if (dot) {
        dot.style.left = mx + 'px';
        dot.style.top = my + 'px';
      }
    };

    function loop() {
      rx += (mx - rx) * .11;
      ry += (my - ry) * .11;
      if (ring) {
        ring.style.left = rx + 'px';
        ring.style.top = ry + 'px';
      }
      requestAnimationFrame(loop);
    }

    const handleMouseEnter = () => document.body.classList.add('hov');
    const handleMouseLeave = () => document.body.classList.remove('hov');

    document.addEventListener('mousemove', handleMouseMove);
    const animationId = requestAnimationFrame(loop);

    // Add hover listeners to interactive elements
    const interactiveElements = document.querySelectorAll('a, .stage-item');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationId);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
}

export default useCursor;
