// import React, { useState, useEffect, useRef } from 'react';

// const FloatingSkillBubbles = () => {
//   const [bubbles, setBubbles] = useState([]);
//   const mouseRef = useRef({ x: 0, y: 0 });
//   const animationRef = useRef(null);

//   const skills = [
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original-wordmark.svg", title: "HTML" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original-wordmark.svg", title: "CSS" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg", title: "JavaScript" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original-wordmark.svg", title: "React" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original-wordmark.svg", title: "Bootstrap" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", title: "Tailwind CSS" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain-wordmark.svg", title: "Node.js" },
//     { image: "https://raw.githubusercontent.com/tandpfun/skill-icons/65dea6c4eaca7da319e552c09f4cf5a9a8dab2c8/icons/ExpressJS-Dark.svg", title: "Express.js" },
//     { image: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/gsap.svg", title: "GSAP" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-plain-wordmark.svg", title: "MongoDB" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original-wordmark.svg", title: "PostgreSQL" },
//     { image: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg", title: "Git" },
//   ];

//   useEffect(() => {
//     const w = window.innerWidth;
//     const h = window.innerHeight;
    
//     setBubbles(skills.map((skill, i) => ({
//       id: i,
//       skill,
//       x: Math.random() * (w - 80),
//       y: Math.random() * (h - 80),
//       vx: (Math.random() - 0.5) * 1.5,
//       vy: (Math.random() - 0.5) * 1.5,
//       r: 0,
//       s: 1
//     })));

//     const handleMouse = (e) => {
//       mouseRef.current = { x: e.clientX, y: e.clientY };
//     };

//     window.addEventListener('mousemove', handleMouse, { passive: true });
//     return () => window.removeEventListener('mousemove', handleMouse);
//   }, []);

//   useEffect(() => {
//     if (!bubbles.length) return;

//     const animate = () => {
//       setBubbles(prev => prev.map(b => {
//         const dx = b.x + 40 - mouseRef.current.x;
//         const dy = b.y + 40 - mouseRef.current.y;
//         const dist = Math.sqrt(dx * dx + dy * dy);
        
//         let fx = 0, fy = 0, scale = 1;
        
//         if (dist < 100) {
//           const force = (100 - dist) / 100 * 0.3;
//           fx = (dx / dist) * force;
//           fy = (dy / dist) * force;
//           scale = 1 + force * 0.5;
//         }

//         let nx = b.x + b.vx + fx;
//         let ny = b.y + b.vy + fy;
//         let nvx = (b.vx + fx) * 0.98;
//         let nvy = (b.vy + fy) * 0.98;

//         if (nx < 0 || nx > window.innerWidth - 80) {
//           nvx = -nvx * 0.8;
//           nx = nx < 0 ? 0 : window.innerWidth - 80;
//         }
//         if (ny < 0 || ny > window.innerHeight - 80) {
//           nvy = -nvy * 0.8;
//           ny = ny < 0 ? 0 : window.innerHeight - 80;
//         }

//         return {
//           ...b,
//           x: nx,
//           y: ny,
//           vx: Math.max(-2, Math.min(2, nvx)),
//           vy: Math.max(-2, Math.min(2, nvy)),
//           r: b.r + 1,
//           s: scale
//         };
//       }));

//       animationRef.current = requestAnimationFrame(animate);
//     };

//     animate();
//     return () => cancelAnimationFrame(animationRef.current);
//   }, [bubbles.length]);

//   return (
//     <div className=" Third-Section relative h-[100vh] bg-gradient-to-br from-slate-900 to-purple-900">
//       {bubbles.map(b => (
//         <div
//           key={b.id}
//           className="absolute w-20 h-20 will-change-transform"
//           style={{
//             left: b.x,
//             top: b.y,
//             transform: `rotate(${b.r}deg) scale(${b.s})`,
//           }}
//         >
//           <div className="w-full h-full bg-white/10 backdrop-blur-sm rounded-full border border-white/20 flex items-center justify-center">
//             <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
//               <img src={b.skill.image} alt={b.skill.title} className="w-10 h-10 object-contain" />
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default FloatingSkillBubbles;