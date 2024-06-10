'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

import { useRouter } from 'next/navigation';

import { useGLTF } from '@react-three/drei';
import { Line, MeshDistortMaterial, useCursor } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';
import { FBXLoader, TGALoader } from 'three-stdlib';

export const Blob = ({ route = '/', ...props }) => {
  const router = useRouter();
  const [hovered, hover] = useState(false);
  useCursor(hovered);
  return (
    <mesh
      onClick={() => router.push(route)}
      onPointerOver={() => hover(true)}
      onPointerOut={() => hover(false)}
      {...props}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <MeshDistortMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
    </mesh>
  );
};

export const Logo = ({ route = '/blob', ...props }) => {
  const mesh = useRef<THREE.Mesh>(null);

  const router = useRouter();

  const [hovered, hover] = useState(false);
  const points = useMemo(
    () => new THREE.EllipseCurve(0, 0, 3, 1.15, 0, 2 * Math.PI, false, 0).getPoints(100),
    [],
  );

  useCursor(hovered);

  useFrame((state, delta) => {
    if (mesh.current) {
      const t = state.clock.getElapsedTime();
      mesh.current.rotation.y = Math.sin(t) * (Math.PI / 8);
      mesh.current.rotation.x = Math.cos(t) * (Math.PI / 8);
      mesh.current.rotation.z -= delta / 4;
    }
  });

  return (
    <group ref={mesh} {...props}>
      {/* @ts-expect-error error*/}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} />
      {/* @ts-expect-error error */}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, 1]} />
      {/* @ts-expect-error error*/}
      <Line worldUnits points={points} color="#1fb2f5" lineWidth={0.15} rotation={[0, 0, -1]} />
      <mesh
        onClick={() => router.push(route)}
        onPointerOver={() => hover(true)}
        onPointerOut={() => hover(false)}
      >
        <sphereGeometry args={[0.55, 64, 64]} />
        <meshPhysicalMaterial roughness={0.5} color={hovered ? 'hotpink' : '#1fb2f5'} />
      </mesh>
    </group>
  );
};

export function Duck(props) {
  const { scene } = useGLTF('/duck.glb');

  useFrame((state, delta) => (scene.rotation.y += delta));

  return <primitive object={scene} {...props} />;
}
export function Dog(props) {
  const { scene } = useGLTF('/dog.glb');

  return <primitive object={scene} {...props} />;
}

export function Desktop(props) {
  const scene = useLoader(FBXLoader, '/Desktop.fbx');
  // Load the first set of textures

  // Debugging: Log the scene to check the materials and textures
  useEffect(() => {
    console.log(scene);
    scene.traverse((child) => {
      if (child.isMesh) {
        console.log(`Mesh: ${child.name}`);
        if (Array.isArray(child.material)) {
          child.material.forEach((material, index) => {
            console.log(`Material ${index}:`, material);
            if (material.map) {
              console.log(`Texture ${index} path:`, material.map.image.src);
            } else {
              console.log(`Texture ${index} not loaded`);
            }
          });
        } else {
          console.log('Material:', child.material);
          if (child.material.map) {
            console.log('Texture path:', child.material.map.image.src);
          } else {
            console.log('Texture not loaded');
          }
        }
      }
    });
  }, [scene]);

  return <primitive object={scene} {...props} />;
}
