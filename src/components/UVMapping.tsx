import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useTexture, Html, useGLTF, Float, Backdrop } from '@react-three/drei';
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
    <Float
      speed={10}
      rotationIntensity={1}
      floatIntensity={2}
    >
      <mesh position={[0, 2.5, 0]}>
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
    </Float>
  );
}

function Table() {
  const gltf: any = useGLTF('/models/table.glb');

  const texture = useTexture('/textures/table.png');
  texture.flipY = false;

  return (
    <primitive object={gltf.nodes.Table} position={[-0.6, 0.35, 0]}>
      <meshStandardMaterial map={texture} />
    </primitive>
  );
}

function UVMapping() {
  return (
    <Canvas camera={{ position: [0, 4, 5] }}>
      <ambientLight intensity={1} />
      <OrbitControls autoRotate />
      <gridHelper />
      <Suspense fallback={<Html center>loading...</Html>}>
        <Cube />
        <Table />
      </Suspense>
    </Canvas>
  );
}

export default UVMapping;
