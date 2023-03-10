/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.1.4 BLK.glb
*/

import React, { useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export default function Model(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/BLK.glb");
  const { actions } = useAnimations(animations, group);
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    //group.current.rotation.z = - 0.01 - (1 + Math.sin(t / 1.5)) / 10
    // group.current.rotation.x = Math.cos(t / 4) / 5;
    group.current.rotation.y = Math.sin(t / 2) / 1;
    //group.current.position.y = (1 + Math.sin(t / 1.5)) / 20
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Scene">
        <group
          name="d55e0c29-c353-42c2-b525-aa02b4f44b48"
          position={[0, 0.53, 0]} //-0.15, 2.36, 0
          rotation={[Math.PI / 2, 0, 0]}
          scale={20.71}
        >
          <group name="Meshes">
            <group name="Layer_1" />
          </group>
        </group>
        <group name="Armature" rotation={[Math.PI / 2, 0, 3]} scale={0.00235}>
          <primitive object={nodes.mixamorigHips} />
          <skinnedMesh
            name="p0150"
            geometry={nodes.p0150.geometry}
            material={materials.Phong_7FA2A0}
            skeleton={nodes.p0150.skeleton}
          />
          <skinnedMesh
            name="s0141"
            geometry={nodes.s0141.geometry}
            material={materials.Phong_C5C5C5}
            skeleton={nodes.s0141.skeleton}
          />
          <skinnedMesh
            name="s0142"
            geometry={nodes.s0142.geometry}
            material={materials.Phong_0B1017}
            skeleton={nodes.s0142.skeleton}
          />
          <skinnedMesh
            name="s0143"
            geometry={nodes.s0143.geometry}
            material={materials.Phong_C5C5C5}
            skeleton={nodes.s0143.skeleton}
          />
          <skinnedMesh
            name="s0144"
            geometry={nodes.s0144.geometry}
            material={materials.Phong_0B1017}
            skeleton={nodes.s0144.skeleton}
          />
          <skinnedMesh
            name="s0145"
            geometry={nodes.s0145.geometry}
            material={materials.Phong_0B1017}
            skeleton={nodes.s0145.skeleton}
          />
          <skinnedMesh
            name="s0146"
            geometry={nodes.s0146.geometry}
            material={materials.Phong_0B1017}
            skeleton={nodes.s0146.skeleton}
          />
          <skinnedMesh
            name="s0147"
            geometry={nodes.s0147.geometry}
            material={materials.Phong_0B1017}
            skeleton={nodes.s0147.skeleton}
          />
          <skinnedMesh
            name="s0148"
            geometry={nodes.s0148.geometry}
            material={materials.Phong_C5C5C5}
            skeleton={nodes.s0148.skeleton}
          />
          <skinnedMesh
            name="s0149"
            geometry={nodes.s0149.geometry}
            material={materials.Standard_C5C5C5}
            skeleton={nodes.s0149.skeleton}
          />
          <skinnedMesh
            name="s0151"
            geometry={nodes.s0151.geometry}
            material={materials.Phong_C5C5C5}
            skeleton={nodes.s0151.skeleton}
          />
          <skinnedMesh
            name="s0152"
            geometry={nodes.s0152.geometry}
            material={materials.Phong_7FA2A0}
            skeleton={nodes.s0152.skeleton}
          />
          <skinnedMesh
            name="s0153"
            geometry={nodes.s0153.geometry}
            material={materials.Phong_7FA2A0}
            skeleton={nodes.s0153.skeleton}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/BLK.glb");
