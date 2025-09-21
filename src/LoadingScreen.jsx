import { useState, useEffect, useRef } from 'react';
import App from './App';

export default function LoadingScreen() {
  const [count, setCount] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const duration = 3000; // 3 seconds
    const increment = 100 / (duration / 16); // 60fps smooth animation
    const startTime = Date.now();

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const newCount = Math.floor(easeOut * 100);
      
      setCount(newCount);

      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        // Start fade out after reaching 100%
        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setIsLoading(false), 800);
        }, 200);
      }
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  if (!isLoading) {
    return (
      <App/>
    );
  }

  return (
    <div 
      className={`fixed inset-0 bg-black flex items-center justify-center z-50 transition-opacity duration-700 ${
        fadeOut ? 'opacity-0' : 'opacity-100'
      }`}
    >
      <div className="text-center">
        {/* Counter with pulsing animation */}
        <div 
          className="text-8xl font-mono font-bold text-white mb-8 select-none animate-pulse"
          style={{
            animationDuration: '2s',
            animationTimingFunction: 'ease-in-out'
          }}
        >
          {count}%
        </div>
        
        {/* Progress Bar */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-white rounded-full transition-all duration-75 ease-out"
            style={{ 
              width: `${count}%`,
              transform: 'translateZ(0)' // Hardware acceleration
            }}
          ></div>
        </div>
        
        {/* Loading text with subtle fade */}
        <div 
          className="text-white text-lg font-light mt-6 opacity-60 animate-pulse"
          style={{
            animationDuration: '9s',
            animationTimingFunction: 'ease-in-out'
          }}
        >
          Loading...
        </div>
      </div>
    </div>
  );
}