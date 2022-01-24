import React from 'react';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import { extend, useLoader } from '@react-three/fiber';

extend({ TextGeometry });

interface Props {
  text: string;
  color: string;
  [x: string]: any;
};

function Text({ text, color, ...props }: Props) {
  const font = useLoader(FontLoader, '/font.json');

  const textOptions = {
    font,
    size: 0.15,
    height: 0.04,
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
