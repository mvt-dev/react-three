import { useThree } from '@react-three/fiber';
import { useCubeTexture } from '@react-three/drei';

useCubeTexture.preload([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
], { path: '/skybox/' });

function SkyBox() {
  const { scene } = useThree();
  const texture = useCubeTexture([
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
  ], { path: '/skybox/' });
  scene.background = texture;

  return null;
}

export default SkyBox;
