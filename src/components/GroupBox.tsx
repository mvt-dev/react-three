import React from 'react';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere';
import Provider from '../store/Provider';

function GroupBox() {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 10, 0], fov: 50 }}>
      <Provider>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Sphere position={[-4, 0, 0]} color="blue" />
        <Sphere position={[0, 0, 0]} color="red" />
        <Sphere position={[4, 0, 0]} color="green" />
      </Provider>
    </Canvas>
  )
}

export default GroupBox;
