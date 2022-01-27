import React from 'react';
import { Canvas } from '@react-three/fiber';
import Sphere from './Sphere';
import { useSelector, useDispatch } from 'react-redux';
import { changeColor } from '../store/actions/shoeActions';

function GroupBox() {
  const { color: currentColor } = useSelector((state: any) => state.shoe);

  const dispatch = useDispatch();
  const switchColor = (color: string) => dispatch(changeColor(color));

  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 10, 0], fov: 50 }}>
      <ambientLight />
      <pointLight position={[10, 10, 10]} />
      <Sphere position={[-4, 0, 0]} color="blue" currentColor={currentColor} switchColor={switchColor} />
      <Sphere position={[0, 0, 0]} color="red" currentColor={currentColor} switchColor={switchColor} />
      <Sphere position={[4, 0, 0]} color="green" currentColor={currentColor} switchColor={switchColor} />
    </Canvas>
  )
}

export default GroupBox;
