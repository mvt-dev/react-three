import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';
import Shoe from './Shoe';
import Text from './Text';
import SkyBox from './SkyBox';

function Shoes() {
  const { color } = useSelector((state: any) => state.shoe);

  return (
    <Canvas shadows camera={{ fov: 35 }}>
      <SkyBox />
      <Suspense fallback={null}>
        <Stage intensity={0.5} contactShadow={{ opacity: 0.7, blur: 2 }}>
          <Shoe color={color} position={[0, 0, 0]} rotation={[0, -2, 0]} />
          <Shoe color={color} position={[1, 0, 0]} rotation={[0, -2, Math.PI]} scale={-1} />
          <Text text="Raptor" color="white" size={0.15} position={[0.1, -0.5, 1.1]} rotation={[-1.6, 0, -0.4]} />
          <Text text="v1" color="#9d0e0e" size={0.05} position={[0.7, -0.5, 1.35]} rotation={[-1.6, 0, -0.4]} />
        </Stage>
      </Suspense>
      <BakeShadows />
      <OrbitControls autoRotate />
    </Canvas>
  )
}

export default Shoes;
