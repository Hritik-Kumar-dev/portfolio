// src/Components/CanvasContainer.jsx
import React from 'react';
import { Canvas } from '@react-three/fiber';
import { Environment, OrbitControls } from '@react-three/drei';
import Laptop2 from './Laptop2';


const CanvasLaptop2 = () => {
  return (
    <Canvas  
      camera={{ 
        position: [0.00242996000381767, 1.4604649965536762, 1.6932324380119392], 
        rotation: [-0.7117239607847696, 0.001086711364118819, 0.0009373214780493358], 
        fov: 60 }}
      style={{ width: '100vw', height: '100vh' }}
    >
      <ambientLight intensity={4.5} />
      <directionalLight position={[10, 10, 50]} intensity={4} />
      <directionalLight position={[-10, -10, -50]} intensity={4} />


      <Environment preset="sunset"  environmentIntensity={0.9}/>
{/* <OrbitControls /> */}
      <OrbitControls enableZoom={false} enableRotate={false}  enablePan={false}  />
      <Laptop2 />
    </Canvas>
  );
};

export default CanvasLaptop2;
