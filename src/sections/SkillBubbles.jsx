import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SkillBubbles = () => {
  const [bubbles, setBubbles] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const skillsRef = useRef(null);
  const bubblesRef = useRef([]);
  const animationRef = useRef(null);

  const skills = [
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", title: "HTML" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", title: "CSS" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", title: "React" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", title: "Bootstrap" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", title: "Node.js" },
    { image: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg", title: "Express.js" },
    { image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/gsap.svg", title: "GSAP" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg", title: "MongoDB" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", title: "PostgreSQL" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" },
    { image: "https://cdn1.iconfinder.com/data/icons/unicons-line-vol-3/24/github-512.png", title: "GitHub" },
    { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg", title: "VS Code" },
  ];

  // Initialize bubbles with GSAP properties
  useEffect(() => {
    const containerWidth = window.innerWidth;
    const containerHeight = window.innerHeight;
    
    const initialBubbles = skills.map((skill, index) => {
      const size = 60 + Math.random() * 40;
      return {
        id: index,
        skill,
        x: Math.random() * (containerWidth - size),
        y: Math.random() * (containerHeight - size),
        size,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        originalSize: size,
        scale: 1,
        opacity: 0,
      };
    });
    
    setBubbles(initialBubbles);
    
    // Wait for DOM elements to be ready before animating
    setTimeout(() => {
      initialBubbles.forEach((bubble, index) => {
        if (bubblesRef.current[index]) {
          gsap.fromTo(
            bubblesRef.current[index],
            { 
              scale: 0, 
              opacity: 0,
              y: bubble.y + 100 
            },
            { 
              scale: 1, 
              opacity: 1,
              y: bubble.y,
              duration: 1,
              delay: index * 0.1,
              ease: "back.out(1.7)"
            }
          );
        }
      });
    }, 100);
  }, []);

  // Mouse tracking with GSAP
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        const newPosition = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        
        // Smooth mouse tracking
        gsap.to(mousePosition, {
          x: newPosition.x,
          y: newPosition.y,
          duration: 0.1,
          ease: "power2.out",
          onUpdate: () => setMousePosition({ ...mousePosition })
        });
      }
    };

    const skillsElement = skillsRef.current;
    if (skillsElement) {
      skillsElement.addEventListener('mousemove', handleMouseMove);
      return () => skillsElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, [mousePosition]);

  // Scroll detection with GSAP
  useEffect(() => {
    const handleScroll = () => {
      if (skillsRef.current) {
        const rect = skillsRef.current.getBoundingClientRect();
        const inView = rect.top < window.innerHeight && rect.bottom > 0;
        
        if (inView !== isVisible) {
          setIsVisible(inView);
          
          // Animate visibility change
          if (inView) {
            gsap.to(bubblesRef.current, {
              opacity: 1,
              scale: 1,
              duration: 0.5,
              stagger: 0.05,
              ease: "power2.out"
            });
          } else {
            gsap.to(bubblesRef.current, {
              opacity: 0.3,
              scale: 0.8,
              duration: 0.3,
              ease: "power2.in"
            });
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isVisible]);

  // Collision detection
  const checkCollision = (bubble1, bubble2) => {
    const dx = bubble1.x + bubble1.size/2 - (bubble2.x + bubble2.size/2);
    const dy = bubble1.y + bubble1.size/2 - (bubble2.y + bubble2.size/2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    return distance < (bubble1.size + bubble2.size) / 2 + 10;
  };

  const handleBubbleCollision = (bubble1, bubble2) => {
    const dx = bubble1.x + bubble1.size/2 - (bubble2.x + bubble2.size/2);
    const dy = bubble1.y + bubble1.size/2 - (bubble2.y + bubble2.size/2);
    const distance = Math.sqrt(dx * dx + dy * dy);
    
    if (distance === 0) return { bubble1, bubble2 };
    
    const nx = dx / distance;
    const ny = dy / distance;
    
    const dvx = bubble1.vx - bubble2.vx;
    const dvy = bubble1.vy - bubble2.vy;
    const dvn = dvx * nx + dvy * ny;
    
    if (dvn > 0) return { bubble1, bubble2 };
    
    const impulse = 2 * dvn / 2;
    
    const newBubble1 = {
      ...bubble1,
      vx: bubble1.vx - impulse * nx * 0.7,
      vy: bubble1.vy - impulse * ny * 0.7,
    };
    
    const newBubble2 = {
      ...bubble2,
      vx: bubble2.vx + impulse * nx * 0.7,
      vy: bubble2.vy + impulse * ny * 0.7,
    };
    
    return { bubble1: newBubble1, bubble2: newBubble2 };
  };

  // GSAP Animation loop
  useEffect(() => {
    if (!isVisible || bubbles.length === 0) return;

    const animate = () => {
      setBubbles(prevBubbles => {
        let updatedBubbles = prevBubbles.map((bubble, index) => {
          // Mouse interaction
          const mouseDistance = Math.sqrt(
            Math.pow(bubble.x + bubble.size/2 - mousePosition.x, 2) +
            Math.pow(bubble.y + bubble.size/2 - mousePosition.y, 2)
          );
          
          const disturbanceRadius = 120;
          let mouseForceX = 0;
          let mouseForceY = 0;
          
          if (mouseDistance < disturbanceRadius) {
            const forceStrength = (disturbanceRadius - mouseDistance) / disturbanceRadius * 0.3;
            const angle = Math.atan2(
              bubble.y + bubble.size/2 - mousePosition.y,
              bubble.x + bubble.size/2 - mousePosition.x
            );
            mouseForceX = Math.cos(angle) * forceStrength;
            mouseForceY = Math.sin(angle) * forceStrength;
            
            // Scale up bubble near mouse - with null check
            if (bubblesRef.current[index]) {
              const targetScale = 1 + (disturbanceRadius - mouseDistance) / disturbanceRadius * 0.3;
              gsap.to(bubblesRef.current[index], {
                scale: targetScale,
                duration: 0.2,
                ease: "power2.out"
              });
            }
          } else {
            // Scale back to normal - with null check
            if (bubblesRef.current[index]) {
              gsap.to(bubblesRef.current[index], {
                scale: 1,
                duration: 0.3,
                ease: "power2.out"
              });
            }
          }

          let newBubble = {
            ...bubble,
            x: bubble.x + bubble.vx + mouseForceX,
            y: bubble.y + bubble.vy + mouseForceY,
            vx: (bubble.vx + mouseForceX) * 0.99 + (Math.random() - 0.5) * 0.02,
            vy: (bubble.vy + mouseForceY) * 0.99 + (Math.random() - 0.5) * 0.02,
            rotation: bubble.rotation + bubble.rotationSpeed,
          };

          // Boundary collision with GSAP bounce effect
          const containerWidth = skillsRef.current ? skillsRef.current.clientWidth : window.innerWidth;
          const containerHeight = skillsRef.current ? skillsRef.current.clientHeight : window.innerHeight;

          if (newBubble.x <= 0 || newBubble.x + newBubble.size >= containerWidth) {
            newBubble.vx = -newBubble.vx * 0.8;
            newBubble.x = newBubble.x <= 0 ? 0 : containerWidth - newBubble.size;
            
            // Add bounce effect - with null check
            if (bubblesRef.current[index]) {
              gsap.to(bubblesRef.current[index], {
                scale: 1.1,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
              });
            }
          }
          
          if (newBubble.y <= 0 || newBubble.y + newBubble.size >= containerHeight) {
            newBubble.vy = -newBubble.vy * 0.8;
            newBubble.y = newBubble.y <= 0 ? 0 : containerHeight - newBubble.size;
            
            // Add bounce effect - with null check
            if (bubblesRef.current[index]) {
              gsap.to(bubblesRef.current[index], {
                scale: 1.1,
                duration: 0.1,
                yoyo: true,
                repeat: 1,
                ease: "power2.out"
              });
            }
          }

          // Velocity limits
          const maxVelocity = 2;
          newBubble.vx = Math.max(-maxVelocity, Math.min(maxVelocity, newBubble.vx));
          newBubble.vy = Math.max(-maxVelocity, Math.min(maxVelocity, newBubble.vy));

          return newBubble;
        });

        // Handle collisions
        for (let i = 0; i < updatedBubbles.length; i++) {
          for (let j = i + 1; j < updatedBubbles.length; j++) {
            if (checkCollision(updatedBubbles[i], updatedBubbles[j])) {
              const collision = handleBubbleCollision(updatedBubbles[i], updatedBubbles[j]);
              updatedBubbles[i] = collision.bubble1;
              updatedBubbles[j] = collision.bubble2;
              
              // Add collision effect - with null checks
              if (bubblesRef.current[i] && bubblesRef.current[j]) {
                gsap.to([bubblesRef.current[i], bubblesRef.current[j]], {
                  scale: 1.15,
                  duration: 0.1,
                  yoyo: true,
                  repeat: 1,
                  ease: "power2.out"
                });
              }
            }
          }
        }

        return updatedBubbles;
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isVisible, mousePosition, bubbles.length]);

  // Update bubble positions with GSAP
  useEffect(() => {
    bubbles.forEach((bubble, index) => {
      if (bubblesRef.current[index]) {
        gsap.set(bubblesRef.current[index], {
          x: bubble.x,
          y: bubble.y,
          rotation: bubble.rotation,
        });
      }
    });
  }, [bubbles]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
     
      {/* Skills Section */}
      <div 
        ref={skillsRef}
        className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 to-gray-900"
      >
        {/* Skills List in Center */}
        <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
          <div className="bg-black/20 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              My Technical Skills
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-white">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 bg-white/10 rounded-lg p-3 backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <img 
                    src={skill.image} 
                    alt={skill.title}
                    className="w-8 h-8 object-contain"
                  />
                  <span className="text-sm font-medium">{skill.title}</span>
                </div>
              ))}
            </div>
            <p className="text-center text-white/70 mt-6 text-sm">
              Move your mouse to interact with the floating bubbles!
            </p>
          </div>
        </div>

        {/* Floating Bubbles */}
        {bubbles.map((bubble, index) => (
          <div
            key={bubble.id}
            ref={el => bubblesRef.current[index] = el}
            className="absolute pointer-events-none z-200 will-change-transform"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-to-br from-purple-400/30 to-cyan-400/30 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center shadow-xl hover:shadow-2xl transition-shadow duration-300">
              <div className="w-3/4 h-3/4 bg-white/90 rounded-full flex items-center justify-center shadow-inner">
                <img 
                  src={bubble.skill.image} 
                  alt={bubble.skill.title}
                  className="w-2/3 h-2/3 object-contain"
                />
              </div>
            </div>
          </div>
        ))}

        {/* Enhanced Background Animation */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-white/10 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      </div>

     
    </div>
  );
};

export default SkillBubbles;