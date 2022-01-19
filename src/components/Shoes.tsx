import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
import Shoe from './Shoe';
import Provider from '../store/Provider';

function Shoes() {
  const { color } = useSelector((state: any) => state.shoe);

  return (
    <Provider>
      <Canvas shadows dpr={[1, 2]} camera={{ position: [0, 0, 150], fov: 35 }}>
        <Suspense fallback={null}>
          <Stage environment="city" intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }}>
            <Shoe color={color} position={[0, 0, 0]} />
            <Shoe color={color} scale={-1} rotation={[0, 0.5, Math.PI]} position={[0, 0, -1.2]} />
          </Stage>
          <BakeShadows />
        </Suspense>
        <OrbitControls autoRotate />
      </Canvas>
    </Provider>
  )
}

export default Shoes;
