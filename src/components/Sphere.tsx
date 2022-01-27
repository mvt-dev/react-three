import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useSpring, animated, config } from '@react-spring/three';

interface Props {
  color: string;
  currentColor: string;
  switchColor: (color: string) => void;
  [x: string]: any;
};

function Sphere({ color, currentColor, switchColor, ...props }: Props) {
  const [hovered, hover] = useState(false);
  const ref = useRef<THREE.Mesh>();

  useFrame(({ clock }) => {
    ref.current!.rotation.y = clock.getElapsedTime();
  });

  const { scale } = useSpring({
    scale: currentColor === color ? 1.5 : hovered ? 1.2 : 1,
    config: config.wobbly,
  });

  return (
    <animated.mesh
      {...props}
      ref={ref}
      scale={scale}
      onClick={(event) => switchColor(color)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}
    >
      <sphereBufferGeometry args={[1]} />
      <meshStandardMaterial color={color} roughness={0.75} wireframe opacity={hovered ? 0.4 : 1} />
    </animated.mesh>
  )
};

export default Sphere;
