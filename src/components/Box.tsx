import * as THREE from 'three';
import React, { useRef, useState } from 'react';
// import { useFrame } from '@react-three/fiber';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../store/actions/shoeActions';

interface Props {
  color: string;
  [x: string]: any;
};

const Box = ({ color, ...props }: Props) => {
  // This reference gives us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>();
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false);
  // Subscribe this component to the render-loop, rotate the mesh every frame
  // useFrame((state, delta) => {
  //   if (ref.current) {
  //     ref.current.rotation.x += 0.01;
  //     ref.current.rotation.y += 0.01;
  //   }
  // });
  // Return the view, these are regular Threejs elements expressed in JSX

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
      <boxGeometry args={[1.5, 1.5, 0.5]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : color} />
    </mesh>
  )
};

export default Box;
