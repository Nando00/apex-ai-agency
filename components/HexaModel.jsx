import { useGLTF, useTexture, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Color } from "three";

export default function MyModel() {
  const { scene, animations } = useGLTF("/models/cube_cascade.glb");
  const texture = useTexture("/texture_silk.jpg");
  const modelRef = useRef();
  const { actions } = useAnimations(animations, modelRef);

  useEffect(() => {
    // Play all animations
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }

    // Just enhance the existing materials from Blender
    scene.traverse((child) => {
      if (child.isMesh) {
        // Keep the original material from Blender but enhance it
        if (child.material) {
          child.material.map = texture;
          child.material.color = new Color("white");
          child.material.emissiveMap = texture;
          child.material.emissive = new Color().setHex(0xadb5bd);
          child.material.emissiveIntensity = 1;
          child.material.metalness = 1;
          child.material.roughness = 0.1;
          child.material.envMapIntensity = 0.5; // Slight reflection for depth
          child.material.needsUpdate = true;
        }
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene, texture, actions]);

  // Base rotation to control tilt
  const baseRotationX = -0.9;
  const baseRotationY = 0;
  const baseRotationZ = 0;

  // Floating animation
  useFrame((state) => {
    if (modelRef.current) {
      modelRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      modelRef.current.rotation.y = state.clock.elapsedTime * 0.1 + baseRotationY;
      modelRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.05 + baseRotationX;
      modelRef.current.rotation.z = baseRotationZ;
    }
  });

  return (
    <primitive
      ref={modelRef}
      object={scene}
      scale={0.8}
      position={[1, 0, 0]}
    />
  );
}
