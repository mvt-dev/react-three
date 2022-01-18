import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';

const BoxMesh = ({ ...props }) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  const [clicked, click] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x += 0.01;
      ref.current.rotation.y += 0.01;
    }
  });
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[4, 4, 4]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

const Box = () => {
  return (
    <Canvas className="canvas">
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <BoxMesh />
      {/* <BoxMesh position={[1.2, 0, 0]} /> */}
      {/* <BoxMesh position={[-1.2, 0, 0]} /> */}
    </Canvas>
  )
}

export default Box;
