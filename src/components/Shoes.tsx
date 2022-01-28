import React, { Suspense, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import Shoe from './Shoe';
import Text from './Text';
import SkyBox from './SkyBox';

function Loading() {
  const ref = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    ref.current!.rotation.y = clock.getElapsedTime();
  });

  return (
    <mesh ref={ref} scale={0.5}>
      <sphereBufferGeometry args={[1]} />
      <meshStandardMaterial color="blue" roughness={0.75} wireframe />
    </mesh>
  );
}

function Scene({ color }: { color: string }) {
  const lightRef = useRef<THREE.DirectionalLight>();
  // useHelper(lightRef, THREE.DirectionalLightHelper);

  return (
    <>
      <SkyBox />
      <ambientLight intensity={0.2} />
      <directionalLight position={[-2, 4, 5]} ref={lightRef} />
      <Suspense fallback={<Loading />}>
        <group position={[0, 0.5, 0]}>
          <Shoe color={color} position={[-0.5, 0, 0]} rotation={[0, -2, 0]} />
          <Shoe color={color} position={[0.5, 0, 0]} rotation={[0, -2, Math.PI]} scale={-1} />
          <Text text="Space" color="white" size={0.15} position={[-0.5, -0.5, 1.1]} rotation={[-1.6, 0, -0.4]} />
          <Text text="v1" color="#9d0e0e" size={0.05} position={[0.1, -0.5, 1.35]} rotation={[-1.6, 0, -0.4]} />
        </group>
      </Suspense>
      <OrbitControls autoRotate />
      {/* <gridHelper /> */}
    </>
  );
}

function Shoes() {
  const { color } = useSelector((state: any) => state.shoe);

  return (
    <Canvas camera={{ fov: 40, position: [0, 3, 5] }}>
      <Scene color={color} />
    </Canvas>
  )
}

export default Shoes;
