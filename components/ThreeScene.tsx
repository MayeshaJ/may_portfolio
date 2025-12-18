'use client'

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Icosahedron, Torus, Octahedron, TorusKnot, Dodecahedron, Sphere, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Neobrutalist color palette
const NEO_COLORS = [
  '#ff90e8', // pink
  '#ffc900', // yellow
  '#23a9d5', // cyan
  '#b28dff', // purple
  '#00d1b2', // green
  '#ff6b6b', // orange
];

const GeometricShape = ({ position, color, type, speed, scale = 1 }: { position: [number, number, number], color: string, type: 'iso' | 'torus' | 'oct' | 'knot' | 'dodec' | 'sphere', speed: number, scale?: number }) => {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.005 * speed;
      meshRef.current.rotation.y += 0.006 * speed;
    }
  });

  return (
    <Float speed={2 * speed} rotationIntensity={1.5} floatIntensity={2}>
      <mesh ref={meshRef} position={position} scale={scale}>
        {type === 'iso' && <Icosahedron args={[1, 0]} />}
        {type === 'torus' && <Torus args={[0.8, 0.3, 16, 32]} />}
        {type === 'oct' && <Octahedron args={[1, 0]} />}
        {type === 'knot' && <TorusKnot args={[0.6, 0.2, 100, 16]} />}
        {type === 'dodec' && <Dodecahedron args={[1, 0]} />}
        {type === 'sphere' && <Sphere args={[0.8, 32, 32]} />}
        
        <MeshDistortMaterial 
            color={color} 
            speed={2} 
            distort={0.4} 
            radius={1} 
            roughness={0.2}
            metalness={0.1}
            wireframe={type === 'sphere'}
        />
      </mesh>
    </Float>
  );
};

const ThreeScene: React.FC = () => {
  // Generate random colors and positions once per session
  const shapeConfigs = useMemo(() => {
    const types: Array<'iso' | 'torus' | 'oct' | 'knot' | 'dodec' | 'sphere'> = [
      'iso', 'torus', 'oct', 'knot', 'dodec', 'sphere', 'iso', 'oct', 'knot'
    ];
    
    // Spread shapes far apart - wider range for positions
    const positions: [number, number, number][] = [
      [-8, 5, -2],      // Far left, top
      [8, -5, -4],       // Far right, bottom
      [-6, -6, 0],       // Left, bottom
      [9, 4, -6],        // Far right, top
      [-9, 0, -5],       // Far left, center
      [0, 7, -8],        // Center, top
      [7, -7, -10],      // Right, bottom, far back
      [-7, 3, -9],       // Left, mid-top, back
      [5, 6, -3],        // Right, top, front
    ];
    
    return types.map((type, index) => ({
      position: positions[index],
      color: NEO_COLORS[Math.floor(Math.random() * NEO_COLORS.length)],
      type,
      speed: 0.4 + Math.random() * 1.1,
      scale: 0.6 + Math.random() * 0.9,
    }));
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-30">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.8} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff90e8" />
        
        {/* Shapes with random colors, spread far apart */}
        {shapeConfigs.map((config, index) => (
          <GeometricShape
            key={`shape-${index}`}
            position={config.position}
            color={config.color}
            type={config.type}
            speed={config.speed}
            scale={config.scale}
          />
        ))}
      </Canvas>
    </div>
  );
};

export default ThreeScene;