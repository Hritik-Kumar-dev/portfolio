// // src/Components/Laptop.jsx
// import React, { useEffect, useRef, Suspense,  useLayoutEffect,useContext} from 'react';
// import * as THREE from 'three';
// import { useGLTF,OrbitControls } from '@react-three/drei';
// import { useThree } from '@react-three/fiber';
// import gsap from 'gsap';

// // import { useControls } from 'leva';
// // import { useFrame } from '@react-three/fiber';

// import { ScrollTrigger } from 'gsap/ScrollTrigger';






// // gsap.registerPlugin(ScrollTrigger);



// const BaseModel = () => {
//   const { scene } = useGLTF('/models/Base2.glb');

//   return <primitive object={scene}   />;

// };

// const TopModel = React.forwardRef((props, ref) => {
//   const { scene } = useGLTF('/models/Top3-3.glb');


//   useEffect(() => {

//     scene.traverse((child) => {
//       if (child.isMesh) {
//         child.material.side = THREE.DoubleSide;

//       }
//     });

    
//   }, [scene]);
  
  
 
  
  
//   return <primitive ref={ref} object={scene}   />;
// });






// const Laptop2 = () => {
//   const lidGroupRef2 = useRef();
//   useEffect(() => {
//     //   gsap.fromTo(
//     //         lidGroupRef.current.rotation,
//     //         { x: Math.PI / 2 }, // closed (flat)
//     //         {
//     //           x: 1.39,              // open (upright)
//     //         //   x: 0,              // open (upright)
//     //           duration: 2,
//     //           ease: 'power2.out',
//     //           delay: 0,
//     //         }
//     //       );
//       // Animate the lid opening on load
//      scene.visible = false; // Hide model initially
        
//     }, []);





// useLayoutEffect(() => {
//   gsap.registerPlugin(ScrollTrigger);

// //   // 1️ First scroll range — Move camera to intermediate position
// // 
// // // NOW I AM GOING TO ADD ANIMATION FOR THIRD SECTION , LAPTOP CLOSing 

//   gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//         start: "top 99%",
//         end: "top 60%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(lidGroupRef2.current.rotation, {
//           x:Math.PI / 2, // open the lid
//           duration: 3,
//           ease: 'power2.out',
//         });




// // NOW I AM MAKING LAPTOP  LID OPEN AND COVER THE ENTIRE SCREEN  


// // Toggle model visibility before and at the start of your .Third-Section animation
// ScrollTrigger.create({
//   trigger: ".Third-Section",
//   start: "top 61%",
//   end: "top 1%",
//   onEnter: () => {
//     scene.visible = true; // Show model when entering this range
//   },
//   onLeaveBack: () => {
//     scene.visible = false; // Hide model when scrolling back before this
//   },
// });


//   gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//         start: "top 58%",
//         end: "top 20%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(lidGroupRef2.current.rotation, {
//           x: 0, // open the lid
//           duration: 2,
//           ease: 'power2.out',
//         });

// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//       start: "top 45%",
//         end: "top 1%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(camera.position, {
//       x: 0,
//       y: 0,
//       z: 3.5999999999999948,
//       ease: 'none',
//     });

// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//       start: "top 45%",
//         end: "top 1%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(scene.position, {
//       x: 0,
//       y: -0.5999999999999999,
//       z: 2.299999999999999,
//       ease: 'none',
//     });
// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//       start: "top 45%",
//         end: "top 1%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(scene.rotation, {
//       x: 0.04,
//       y: 0,
//       z: 3.469446951953614e-18,
//       ease: 'none',
//     });
        

    
// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Fourth-Section",
//       start: "top 81%",
//         end: "top 40%",
//         scrub: true,
//         // markers: true,
//       }
//     }).to(scene.position, {

//       x: 0,
//       y: -0.5999999999999999,
//       z: 0.6,
//       ease: 'none',
//     });


// ScrollTrigger.create({
//   trigger: ".Fourth-Section",
//   start: "top 7%",
//   end: "top top",
//   onEnter: () => {
//     scene.visible = false; // Show model when entering this range
//   },
//   onLeaveBack: () => {
//     scene.visible = true; // Hide model when scrolling back before this
//   },
// });



// }, []);






//   const { camera } = useThree();
//   const { scene } = useThree();
//   // console.log(camera.position, scene.position, scene.rotation);
//   // console.log(camera, camera.position, scene.position, scene.rotation);


//   //  to get the values of camera position and the scene  position we use debug ui from leva 


//   //     const { cameraPosition, scenePosition, sceneRotation } = useControls({
//   //         cameraPosition: {
//   //             value: { x: 0, y: 0, z: 0 },
//   //             step: 0.05,
//   //         },

//   //         scenePosition: {
//   //             value: { x: 0, y: 0, z: 0 },
//   //             step: 0.05,
//   //         },

//   //         sceneRotation: {
//   //             value: { x: 0, y: 0, z: 0 },
//   //             step: 0.01,
//   //         },

//   //     })

//   //  useFrame(() => {
//   //         camera.position.x = cameraPosition.x;
//   //         camera.position.y = cameraPosition.y;
//   //         camera.position.z = cameraPosition.z;

//   //         scene.position.x = scenePosition.x;
//   //         scene.position.y = scenePosition.y;
//   //         scene.position.z = scenePosition.z;

//   //         scene.rotation.x = sceneRotation.x;
//   //         scene.rotation.y = sceneRotation.y;
//   //         scene.rotation.z = sceneRotation.z;

//   //     })

  
//   return (
//     <Suspense fallback={null}>
//       <group scale={6}>
//         <BaseModel />
//         <group ref={lidGroupRef2} position={[0, 0.00359, -0.00259]}> {/* adjust pivot if needed */}
//           <TopModel />
//         </group>
//       </group>
//     </Suspense>
//   );
// };

// export default Laptop2;

// src/Components/Laptop2.jsx
import React, { useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import * as THREE from 'three';
import { useGLTF } from '@react-three/drei';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const BaseModel2 = () => {
  const { scene } = useGLTF('/models/Base2.glb');
  return <primitive object={scene} />;
};

const TopModel2 = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/models/Top3-3.glb');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;
      }
    });
  }, [scene]);

  return <primitive ref={ref} object={scene} />;
});

const Laptop2 = ({ isActive = true }) => {
  const lidGroupRef2 = useRef();
  const { camera, scene } = useThree();
  const scrollTriggersRef = useRef([]);

  useEffect(() => {
    if (isActive) {
      // Hide model initially only when this component becomes active
      scene.visible = false;
    }
  }, [scene, isActive]);

  useLayoutEffect(() => {
    // Only run if this component is active
    if (!isActive) return;

    // Early return if ref is not ready
    if (!lidGroupRef2.current) {
      console.warn('lidGroupRef2 is not ready yet');
      return;
    }

    // Clear any existing ScrollTriggers for this component
    scrollTriggersRef.current.forEach(trigger => {
      if (trigger && trigger.kill) {
        trigger.kill();
      }
    });
    scrollTriggersRef.current = [];

    gsap.registerPlugin(ScrollTrigger);

    // 1️⃣ Third Section - Initial laptop closing animation
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
        start: "top 99%",
        end: "top 60%",
        scrub: true,
        id: "laptop2-close1",
      }
    });
    tl1.to(lidGroupRef2.current.rotation, {
      x: Math.PI / 2,
      ease: 'power2.out',
    });
    scrollTriggersRef.current.push(tl1.scrollTrigger);

    // 2️⃣ Model visibility control
    const visibilityTrigger1 = ScrollTrigger.create({
      trigger: ".Third-Section",
      start: "top 61%",
      end: "top 1%",
      id: "laptop2-visibility1",
      onEnter: () => {
        scene.visible = true;
      },
      onLeaveBack: () => {
        scene.visible = false;
      },
    });
    scrollTriggersRef.current.push(visibilityTrigger1);

    // 3️⃣ Laptop opening animation
    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
        start: "top 58%",
        end: "top 20%",
        scrub: true,
        id: "laptop2-open",
      }
    });
    tl2.to(lidGroupRef2.current.rotation, {
      x: 0,
      ease: 'power2.out',
    });
    scrollTriggersRef.current.push(tl2.scrollTrigger);

    // 4️⃣ Camera and scene animations (combined for better performance)
    const mainTl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
        start: "top 45%",
        end: "top 1%",
        scrub: true,
        id: "laptop2-main",
      }
    });
    mainTl.to(camera.position, {
      x: 0,
      y: 0,
      z: 3.5999999999999948,
      ease: 'none',
    }).to(scene.position, {
      x: 0,
      y: -0.5999999999999999,
      z: 2.299999999999999,
      ease: 'none',
    }, 0).to(scene.rotation, {
      x: 0.04,
      y: 0,
      z: 3.469446951953614e-18,
      ease: 'none',
    }, 0);
    scrollTriggersRef.current.push(mainTl.scrollTrigger);

    // 5️⃣ Fourth Section animation
    const tl6 = gsap.timeline({
      scrollTrigger: {
        trigger: ".Fourth-Section",
        start: "top 81%",
        end: "top 40%",
        scrub: true,
        id: "laptop2-fourth",
      }
    });
    tl6.to(scene.position, {
      x: 0,
      y: -0.5999999999999999,
      z: 0.6,
      ease: 'none',
    });
    scrollTriggersRef.current.push(tl6.scrollTrigger);

    // 6️⃣ Final visibility control
    const visibilityTrigger2 = ScrollTrigger.create({
      trigger: ".Fourth-Section",
      start: "top 7%",
      end: "top top",
      id: "laptop2-visibility2",
      onEnter: () => {
        scene.visible = false;
      },
      onLeaveBack: () => {
        scene.visible = true;
      },
    });
    scrollTriggersRef.current.push(visibilityTrigger2);

    // Cleanup function
    return () => {
      scrollTriggersRef.current.forEach(trigger => {
        if (trigger && trigger.kill) {
          trigger.kill();
        }
      });
      scrollTriggersRef.current = [];
    };

  }, [camera, scene, isActive]);

  // Initialize lid position
  useEffect(() => {
    if (lidGroupRef2.current && isActive) {
      lidGroupRef2.current.rotation.x = Math.PI / 2;
    }
  }, [isActive]);

  // Don't render if not active
  if (!isActive) return null;

  return (
    <Suspense fallback={null}>
      <group scale={6}>
        <BaseModel2 />
        <group ref={lidGroupRef2} position={[0, 0.00359, -0.00259]}>
          <TopModel2 />
        </group>
      </group>
    </Suspense>
  );
};

export default Laptop2;

// Usage in your main component:
const App = () => {
  const [activeLaptop, setActiveLaptop] = useState('laptop1'); // or 'laptop2'

  return (
    <Canvas>
      <Laptop isActive={activeLaptop === 'laptop1'} />
      <Laptop2 isActive={activeLaptop === 'laptop2'} />
    </Canvas>
  );
};