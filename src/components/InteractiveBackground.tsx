import { useRef, useEffect, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Torus, Tetrahedron } from "@react-three/drei";
import * as THREE from "three";
import { useTheme } from "../context/ThemeContext";

interface GeometricShapeProps {
  position: [number, number, number];
  color: string;
  mouseRef: React.MutableRefObject<{ x: number; y: number }>;
  speed?: number;
  size?: number;
  interactDistance?: number;
  rotationFactor?: [number, number, number];
  shape: "box" | "tetrahedron" | "torus";
}

const GeometricShape = ({
  position,
  color,
  mouseRef,
  speed = 0.01,
  size = 0.8,
  interactDistance = 0.5,
  rotationFactor = [0.2, 0.3, 0.1],
  shape,
}: GeometricShapeProps) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const time = useRef(Math.random() * 100);
  const initialPosition = useMemo(() => [...position], [position]);

  useFrame(() => {
    if (!meshRef.current) return;

    time.current += speed;

    // Base floating animation
    const posY = initialPosition[1] + Math.sin(time.current) * 0.3;
    const posX = initialPosition[0] + Math.cos(time.current) * 0.2;

    // Mouse interaction effect
    const mouseInfluenceX = mouseRef.current.x * interactDistance;
    const mouseInfluenceY = mouseRef.current.y * interactDistance;

    // Apply combined motion
    meshRef.current.position.x = posX + mouseInfluenceX;
    meshRef.current.position.y = posY + mouseInfluenceY;

    // Unique rotation pattern for each shape
    meshRef.current.rotation.x += speed * rotationFactor[0];
    meshRef.current.rotation.y += speed * rotationFactor[1];
    meshRef.current.rotation.z += speed * rotationFactor[2];
  });

  const renderShape = () => {
    switch (shape) {
      case "box":
        return (
          <Box ref={meshRef} position={position} args={[size, size, size]}>
            <meshStandardMaterial
              color={color}
              metalness={0.4}
              roughness={0.3}
              transparent
              opacity={0.7}
            />
          </Box>
        );
      case "tetrahedron":
        return (
          <Tetrahedron ref={meshRef} position={position} args={[size, 0]}>
            <meshStandardMaterial
              color={color}
              metalness={0.3}
              roughness={0.4}
              transparent
              opacity={0.7}
            />
          </Tetrahedron>
        );
      case "torus":
        return (
          <Torus
            ref={meshRef}
            position={position}
            args={[size, size / 3, 16, 32]}
          >
            <meshStandardMaterial
              color={color}
              metalness={0.5}
              roughness={0.2}
              transparent
              opacity={0.7}
            />
          </Torus>
        );
      default:
        return null;
    }
  };

  return renderShape();
};

const InteractiveBackground = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();
  const isDark = theme === "dark";

  // Generate theme-aware colors
  const primaryColor = isDark ? "#22D3F7" : "#0891b2";
  const secondaryColor = isDark ? "#764ABC" : "#9662D9";
  const accentColor = isDark ? "#6DB33F" : "#84cc16";
  const tertiaryColor = isDark ? "#F59E0B" : "#FBBF24";

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      mouseRef.current = {
        x: ((e.clientX - rect.left) / rect.width - 0.5) * 2,
        y: -((e.clientY - rect.top) / rect.height - 0.5) * 2,
      };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }} dpr={[1, 2]}>
        <ambientLight intensity={isDark ? 0.3 : 0.5} />
        <pointLight position={[10, 10, 10]} intensity={isDark ? 0.8 : 0.6} />
        <pointLight position={[-10, -10, -5]} intensity={isDark ? 0.4 : 0.2} />

        {/* Main geometric shapes */}
        <GeometricShape
          position={[-3, -1, -2]}
          color={primaryColor}
          mouseRef={mouseRef}
          size={1.0}
          shape="box"
          rotationFactor={[0.01, 0.02, 0.005]}
        />
        <GeometricShape
          position={[3, 2, -1]}
          color={secondaryColor}
          mouseRef={mouseRef}
          size={0.8}
          shape="tetrahedron"
          rotationFactor={[0.02, 0.01, 0.03]}
        />
        <GeometricShape
          position={[0, -2, -3]}
          color={accentColor}
          mouseRef={mouseRef}
          size={0.9}
          shape="torus"
          speed={0.015}
          rotationFactor={[0.015, 0.01, 0.02]}
        />

        {/* Background smaller shapes */}
        <GeometricShape
          position={[2, -2, -5]}
          color={primaryColor}
          mouseRef={mouseRef}
          size={0.5}
          speed={0.008}
          shape="tetrahedron"
          rotationFactor={[0.01, 0.03, 0.02]}
        />
        <GeometricShape
          position={[-2, 3, -4]}
          color={secondaryColor}
          mouseRef={mouseRef}
          size={0.6}
          speed={0.012}
          shape="box"
          rotationFactor={[0.02, 0.01, 0.03]}
        />
        <GeometricShape
          position={[-4, 0, -6]}
          color={tertiaryColor}
          mouseRef={mouseRef}
          size={0.4}
          speed={0.01}
          shape="torus"
          rotationFactor={[0.03, 0.02, 0.01]}
        />
        <GeometricShape
          position={[4, 1, -3]}
          color={accentColor}
          mouseRef={mouseRef}
          size={0.6}
          speed={0.009}
          shape="box"
          rotationFactor={[0.01, 0.02, 0.03]}
        />
        <GeometricShape
          position={[1, 3, -4]}
          color={tertiaryColor}
          mouseRef={mouseRef}
          size={0.5}
          speed={0.011}
          shape="tetrahedron"
          rotationFactor={[0.02, 0.03, 0.01]}
        />
      </Canvas>
      <div
        className={`absolute inset-0 ${
          isDark
            ? "bg-gradient-to-b from-dark/30 to-dark/70"
            : "bg-gradient-to-b from-white/30 to-white/70"
        }`}
      />
    </div>
  );
};

export default InteractiveBackground;
