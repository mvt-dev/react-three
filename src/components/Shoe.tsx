import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

useGLTF.preload('/shoe.gltf');

interface Props {
  color: string;
  [x:string]: any;
}

type GLTFResult = GLTF & {
  nodes: {
    shoe: THREE.Mesh;
    shoe_1: THREE.Mesh;
    shoe_2: THREE.Mesh;
    shoe_3: THREE.Mesh;
    shoe_4: THREE.Mesh;
    shoe_5: THREE.Mesh;
    shoe_6: THREE.Mesh;
    shoe_7: THREE.Mesh;
  };
  materials: {
    mesh: THREE.MeshStandardMaterial;
    laces: THREE.MeshStandardMaterial;
    caps: THREE.MeshStandardMaterial;
    inner: THREE.MeshStandardMaterial;
    sole: THREE.MeshStandardMaterial;
    stripes: THREE.MeshStandardMaterial;
    band: THREE.MeshStandardMaterial;
    patch: THREE.MeshStandardMaterial;
  };
}

function Shoe({ color, ...props }: Props) {
  const { nodes, materials } = useGLTF('/shoe.gltf') as GLTFResult;

  return (
    <group {...props} dispose={null}>
      <mesh castShadow receiveShadow geometry={nodes.shoe.geometry} material={materials.laces} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_1.geometry}>
        <meshStandardMaterial
          color={color}
          aoMap={materials.mesh.aoMap}
          normalMap={materials.mesh.normalMap}
          roughnessMap={materials.mesh.roughnessMap}
          metalnessMap={materials.mesh.metalnessMap}
          envMapIntensity={0.8}
        />
      </mesh>
      <mesh castShadow receiveShadow geometry={nodes.shoe_2.geometry} material={materials.caps} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_3.geometry} material={materials.inner} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_4.geometry} material={materials.sole} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_5.geometry} material={materials.stripes} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_6.geometry} material={materials.band} material-envMapIntensity={0.8} />
      <mesh castShadow receiveShadow geometry={nodes.shoe_7.geometry} material={materials.patch} material-envMapIntensity={0.8} />
    </group>
  )
}

export default Shoe;
