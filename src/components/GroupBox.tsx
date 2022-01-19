import React from 'react';
import { Canvas } from '@react-three/fiber';
import Box from './Box';
import Provider from '../store/Provider';

const GroupBox = () => {
  return (
    <Canvas>
      <Provider>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-4, 0, 0]} rotation={[-0.5, 0, Math.PI]} color="blue" />
        <Box position={[0, 0, 0]} rotation={[-0.5, 0, Math.PI]} color="red" />
        <Box position={[4, 0, 0]} rotation={[-0.5, 0, Math.PI]} color="green" />
      </Provider>
    </Canvas>
  )
}

export default GroupBox;
