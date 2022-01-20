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
      <Canvas shadows camera={{ fov: 35 }}>
        <Suspense fallback={null}>
          <Stage intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }}>
            <Shoe color={color} position={[0, 0, 0]} rotation={[0, -2, 0]} />
            <Shoe color={color} position={[1, 0, 0]} rotation={[0, -2, Math.PI]} scale={-1} />
          </Stage>
          <BakeShadows />
          <OrbitControls autoRotate />
        </Suspense>
      </Canvas>
    </Provider>
  )
}

export default Shoes;
