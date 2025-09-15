// src/Components/Laptop.jsx
import React, { useEffect, useRef, Suspense, use } from 'react';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

import { useThree } from '@react-three/fiber';
import { useControls } from 'leva';
import { useFrame } from '@react-three/fiber';
import { useLayoutEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { OrbitControls } from '@react-three/drei';
import { CustomEase } from 'gsap/CustomEase';







const BaseModel = () => {
  const { scene } = useGLTF('/models/Base2.glb');

  return <primitive object={scene}   />;

};

const TopModel = React.forwardRef((props, ref) => {
  const { scene } = useGLTF('/models/Top3-3.glb');


  useEffect(() => {

    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.side = THREE.DoubleSide;

      }
    });

    
  }, [scene]);
  
  
 
  
  
  return <primitive ref={ref} object={scene}   />;
});






const Laptop2 = () => {
  const lidGroupRef = useRef();
  useEffect(() => {
    //   gsap.fromTo(
    //         lidGroupRef.current.rotation,
    //         { x: Math.PI / 2 }, // closed (flat)
    //         {
    //           x: 1.39,              // open (upright)
    //         //   x: 0,              // open (upright)
    //           duration: 2,
    //           ease: 'power2.out',
    //           delay: 0,
    //         }
    //       );
      // Animate the lid opening on load
     scene.visible = false; // Hide model initially
        
    }, []);





useLayoutEffect(() => {
  gsap.registerPlugin(ScrollTrigger);

//   // 1️ First scroll range — Move camera to intermediate position
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".Second-Section",
//       start: "top bottom",
//       end: "top 50%",
//       scrub: true,
//       markers: 0,
//     }
//   }).to(camera.position, {
//     x: -0.01075920188513981,
//     y: 0.46548335919423955,
//     z: 2.1870546423985617,
//     ease: "none"
//   });

//   // 2️ Second scroll range — Move camera to final position
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".Second-Section",
//       start: "top 50%",
//       end: "top 10%",
//       scrub: true,
//       markers: 0,
//     }
//   }).to(camera.position, {
//     x: -4.05,
//     y: 0.65,
//     z: 1.7,
//     ease: "none"
//   });

//   // 3️ Scene position
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".Second-Section",
//       start: "top 50%",
//       end: "top 10%",
//       scrub: true,
//       markers: 0,
//     }
//   }).to(scene.position, {
//     x: -2.3,
//     y: 0,
//     z: -0.2,
//     ease: "none"
//   });

//   // 4️ Scene rotation
//   gsap.timeline({
//     scrollTrigger: {
//       trigger: ".Second-Section",
//       start: "top 50%",
//       end: "top 1%",
//       scrub: true,
//       markers: 0,
//     }
//   }).to(scene.rotation, {
//     x: 0.1,
//     y: -0.23,
//     z: 0,
//     ease: "none"
//   }).fromTo(
//       lidGroupRef.current.rotation,
//       { x: Math.PI / 2 }, // closed (flat)
//       {
//         // x: 1.39,              // open (upright)
//         x: 0,              // open (upright)
//         duration: 4,
//         ease: 'sine.in',
//       }
//     )

// // NOW I AM GOING TO ADD ANIMATION FOR THIRD SECTION , LAPTOP CLOSing 

  gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
        start: "top 99%",
        end: "top 60%",
        scrub: true,
        markers: true,
      }
    }).to(lidGroupRef.current.rotation, {
          x:Math.PI / 2, // open the lid
          duration: 3,
          ease: 'power2.out',
        });

// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//         start: "top 99%",
//         end: "top 60%",
//         scrub: true,
//         markers: true,
//       }
//     }).to(camera.position, {
//        x: -0.14999999999999758,
//        y: 0.5999999999999996,
//        z: 2.1,
//         ease: 'none',
//         });


// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//         start: "top 99%",
//         end: "top 60%",
//         scrub: true,
//         markers: true,
//       }
//     }).to(scene.position, {
//       x: -1.3877787807814457e-17,
//       y: 0.05,
//       z: 0.15000000000000002,
//       ease: 'none',
//     });
// gsap.timeline({
//       scrollTrigger: {
//         trigger: ".Third-Section",
//         start: "top 99%",
//         end: "top 60%",
//         scrub: true,
//         markers: true,
//       }
//     }).to(scene.rotation, {
//       x: -0.060000000000000005,
//       y: -0.060000000000000005,
//       z: 3.469446951953614e-18,
//       ease: 'none',
//     });



// NOW I AM MAKING LAPTOP  LID OPEN AND COVER THE ENTIRE SCREEN  


// Toggle model visibility before and at the start of your .Third-Section animation
ScrollTrigger.create({
  trigger: ".Third-Section",
  start: "top 61%",
  end: "top 1%",
  onEnter: () => {
    scene.visible = true; // Show model when entering this range
  },
  onLeaveBack: () => {
    scene.visible = false; // Hide model when scrolling back before this
  },
});


  gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
        start: "top 58%",
        end: "top 20%",
        scrub: true,
        markers: true,
      }
    }).to(lidGroupRef.current.rotation, {
          x: 0, // open the lid
          duration: 2,
          ease: 'power2.out',
        });

gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
      start: "top 45%",
        end: "top 1%",
        scrub: true,
        markers: true,
      }
    }).to(camera.position, {
      x: 0,
      y: 0,
      z: 3.5999999999999948,
      ease: 'none',
    });

gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
      start: "top 45%",
        end: "top 1%",
        scrub: true,
        markers: true,
      }
    }).to(scene.position, {
      x: 0,
      y: -0.5999999999999999,
      z: 2.299999999999999,
      ease: 'none',
    });
gsap.timeline({
      scrollTrigger: {
        trigger: ".Third-Section",
      start: "top 45%",
        end: "top 1%",
        scrub: true,
        markers: true,
      }
    }).to(scene.rotation, {
      x: 0.04,
      y: 0,
      z: 3.469446951953614e-18,
      ease: 'none',
    });
        

}, []);






  const { camera } = useThree();
  const { scene } = useThree();
  // console.log(camera.position, scene.position, scene.rotation);
  console.log(camera, camera.position, scene.position, scene.rotation);


  //  to get the values of camera position and the scene  position we use debug ui from leva 


  //     const { cameraPosition, scenePosition, sceneRotation } = useControls({
  //         cameraPosition: {
  //             value: { x: 0, y: 0, z: 0 },
  //             step: 0.05,
  //         },

  //         scenePosition: {
  //             value: { x: 0, y: 0, z: 0 },
  //             step: 0.05,
  //         },

  //         sceneRotation: {
  //             value: { x: 0, y: 0, z: 0 },
  //             step: 0.01,
  //         },

  //     })

  //  useFrame(() => {
  //         camera.position.x = cameraPosition.x;
  //         camera.position.y = cameraPosition.y;
  //         camera.position.z = cameraPosition.z;

  //         scene.position.x = scenePosition.x;
  //         scene.position.y = scenePosition.y;
  //         scene.position.z = scenePosition.z;

  //         scene.rotation.x = sceneRotation.x;
  //         scene.rotation.y = sceneRotation.y;
  //         scene.rotation.z = sceneRotation.z;

  //     })

  return (
    <Suspense fallback={null}>
      <group scale={6}>
        <BaseModel />
        <group ref={lidGroupRef} position={[0, 0.00359, -0.00259]}> {/* adjust pivot if needed */}
          <TopModel />
        </group>
      </group>
    </Suspense>
  );
};

export default Laptop2;
