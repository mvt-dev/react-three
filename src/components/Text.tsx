import React from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend, useLoader } from '@react-three/fiber';

extend({ TextGeometry });

interface Props {
  text: string;
  color: string;
  size: number;
  [x: string]: any;
};

function Text({ text, color, size, ...props }: Props) {
  const font = useLoader(FontLoader, '/font.json');

  const textOptions = {
    font,
    size,
    height: 0.03,
  };

  return (
    <mesh
      {...props}
    >
      <textGeometry args={[text, textOptions]} />
      <meshStandardMaterial color={color} />
    </mesh>
  )
};

export default Text;
