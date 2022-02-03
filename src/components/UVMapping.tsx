import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, useProgress, Html } from '@react-three/drei';
import * as THREE from 'three';

function Cube() {
  const [texture, texture2] = useTexture([
    '/textures/uv-test-bw.png',
    '/textures/uv-test-col.png',
  ]);

  // texture.wrapS = THREE.RepeatWrapping;
  // texture.wrapT = THREE.RepeatWrapping;
  // texture.repeat.set(2, 2);

  texture.center.set(0.5, 0.5);
  texture.rotation = THREE.MathUtils.degToRad(90);


  return (
    <mesh>
      <boxGeometry args={[2, 2, 2]} />
      <meshStandardMaterial
        side={THREE.DoubleSide}
        map={texture}
        alphaMap={texture}
        transparent={true}
        // displacementMap={texture}
        // emissiveMap={texture}
        // normalMap={texture}
        // metalnessMap={texture2}
        // roughnessMap={texture2}
      />
    </mesh>
  );
}

function Loader() {
  const { progress } = useProgress();
  return <Html center>{progress} % loaded</Html>;
}

function UVMapping() {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate />
      <Suspense fallback={<Loader />}>
        <Cube />
      </Suspense>
    </Canvas>
  );
}

export default UVMapping;
