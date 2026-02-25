import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    const size = Math.min(window.innerWidth * 0.4, 500);
    renderer.setSize(size, size);
    containerRef.current.appendChild(renderer.domElement);

    // Create a low-poly polyhedron (Icosahedron)
    const geometry = new THREE.IcosahedronGeometry(2, 0);
    const material = new THREE.MeshPhongMaterial({
      color: 0x7C3AED,
      wireframe: true,
      transparent: true,
      opacity: 0.6,
      emissive: 0x7C3AED,
      emissiveIntensity: 0.2,
    });
    
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Add some inner points for "data" feel
    const pointsGeometry = new THREE.IcosahedronGeometry(1.9, 1);
    const pointsMaterial = new THREE.PointsMaterial({
      color: 0x06B6D4,
      size: 0.05,
      transparent: true,
      opacity: 0.8,
    });
    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(5, 5, 5);
    scene.add(light);
    scene.add(new THREE.AmbientLight(0x404040));

    camera.position.z = 5;

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };

    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      
      mesh.rotation.x += 0.005;
      mesh.rotation.y += 0.005;
      points.rotation.x -= 0.003;
      points.rotation.y -= 0.003;

      // Mouse parallax
      mesh.position.x += (mouseX * 0.5 - mesh.position.x) * 0.05;
      mesh.position.y += (-mouseY * 0.5 - mesh.position.y) * 0.05;
      points.position.x = mesh.position.x;
      points.position.y = mesh.position.y;

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      if (!containerRef.current) return;
      const newSize = Math.min(window.innerWidth * 0.4, 500);
      renderer.setSize(newSize, newSize);
      camera.aspect = 1;
      camera.updateProjectionMatrix();
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      renderer.dispose();
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative flex items-center justify-center w-full h-full"
      style={{ filter: 'drop-shadow(0 0 30px rgba(124, 58, 237, 0.3))' }}
    />
  );
};
