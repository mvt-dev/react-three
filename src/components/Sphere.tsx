import * as THREE from 'three';
import React, { useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/actions/shoeActions';

interface Props {
  color: string;
  [x: string]: any;
};

function Sphere({ color, ...props }: Props) {
  const [hovered, hover] = useState(false);
  const ref = useRef<THREE.Mesh>();
  
  useFrame(({ clock }) => {
    ref.current!.rotation.y = clock.getElapsedTime();
  });

  const { color: colorState } = useSelector((state: any) => state.shoe);
  const dispatch = useDispatch();

  return (
    <mesh
      {...props}
      ref={ref}
      scale={colorState === color ? 1.5 : 1}
      onClick={(event) => dispatch(changeColor(color))}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <sphereBufferGeometry args={[1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} roughness={0.75} wireframe />
    </mesh>
  )
};

export default Sphere;
