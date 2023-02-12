import React, { useRef, useEffect } from "react";
import * as THREE from "three";

const Model = ({ url }) => {
  const containerRef = useRef(null);
  let scene, camera, renderer, mesh;

  useEffect(() => {
    const init = async () => {
      scene = new THREE.Scene();
      camera = new THREE.PerspectiveCamera(
        75,
        window.innerWidth / window.innerHeight,
        0.1,
        1000
      );
      renderer = new THREE.WebGLRenderer({ antialias: true });
      renderer.setSize(window.innerWidth, window.innerHeight);
      containerRef.current.appendChild(renderer.domElement);

      const loader = new THREE.GLTFLoader();
      const model = await new Promise((resolve) => loader.load(url, resolve));
      scene.add(model.scene);

      mesh = model.scene.children[0];
      mesh.position.z = -5;
    };

    const animate = () => {
      requestAnimationFrame(animate);
      if (mesh) {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
      }
      renderer.render(scene, camera);
    };

    init();
    animate();

    return () => {
      scene = null;
      camera = null;
      renderer.dispose();
      renderer = null;
      mesh = null;
    };
  }, [url]);

  return <div style={{ width: "100vw", height: "100vh" }} ref={containerRef} />;
};

export default Model;
