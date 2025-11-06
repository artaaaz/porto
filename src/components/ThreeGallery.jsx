import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ThreeGallery = () => {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;

    // === SCENE SETUP ===
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      mount.clientWidth / mount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(2, 2, 5);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setClearColor(0xffffff, 0);
    mount.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false;
    controls.minPolarAngle = Math.PI / 2 - 0.3;
    controls.maxPolarAngle = Math.PI / 2 + 0.3;

    const years = [2025, 2024, 2023, 2022];
    const yearImages = {
      2025: [
        "https://images.pexels.com/photos/34299175/pexels-photo-34299175.jpeg",
        "https://images.pexels.com/photos/34106777/pexels-photo-34106777.jpeg",
        "https://images.pexels.com/photos/8107817/pexels-photo-8107817.jpeg",
      ],
      2024: [
        "https://images.pexels.com/photos/7689132/pexels-photo-7689132.jpeg",
        "https://images.pexels.com/photos/14633022/pexels-photo-14633022.jpeg",
      ],
      2023: [
        "https://images.pexels.com/photos/15349102/pexels-photo-15349102.jpeg",
        "https://images.pexels.com/photos/11608627/pexels-photo-11608627.jpeg",
      ],
      2022: [
        "https://images.pexels.com/photos/10628262/pexels-photo-10628262.jpeg",
        "https://images.pexels.com/photos/20782039/pexels-photo-20782039.jpeg",
        "https://images.pexels.com/photos/6872593/pexels-photo-6872593.jpeg",
      ],
    };

    // === CANVAS YEAR TEXT ===
    function createYearCanvas(years) {
      const canvas = document.createElement("canvas");
      const size = 2048;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      ctx.fillStyle = "#fff";
      ctx.strokeStyle = "#000";
      ctx.lineWidth = 8;
      ctx.font = "bold 180px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      years.forEach((year, index) => {
        const x = (index + 0.5) * (size / years.length);
        const y = size / 2;
        ctx.strokeText(year.toString(), x, y);
        ctx.fillText(year.toString(), x, y);
      });
      return canvas;
    }

    const cylinder = new THREE.CylinderGeometry(2.8, 2.8, 9, 60, 1, true);
    const yearTexture = new THREE.CanvasTexture(createYearCanvas(years));
    const yearMaterial = new THREE.MeshBasicMaterial({
      map: yearTexture,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const mesh = new THREE.Mesh(cylinder, yearMaterial);
    scene.add(mesh);

    // === GALLERY CYLINDER ===
    const galleryTexture = new THREE.TextureLoader();
    const galleryGeo = new THREE.CylinderGeometry(7, 7, 30, 38, 1, true);
    const galleryMat = new THREE.MeshBasicMaterial({
      color: 0xffffff,
      side: THREE.DoubleSide,
      transparent: true,
    });
    const galleryMesh = new THREE.Mesh(galleryGeo, galleryMat);
    galleryMesh.position.y = -2;
    scene.add(galleryMesh);

    // === ANIMATION LOOP ===
    const animate = () => {
      requestAnimationFrame(animate);
      mesh.rotation.y -= 0.001;
      galleryMesh.rotation.y -= 0.001;
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    // === RESPONSIVE ===
    const handleResize = () => {
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    // === CLEANUP ===
    return () => {
      window.removeEventListener("resize", handleResize);
      mount.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-screen overflow-hidden bg-black"
    />
  );
};

export default ThreeGallery;
