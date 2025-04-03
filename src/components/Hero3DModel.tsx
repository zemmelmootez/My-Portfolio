import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Environment,
  ContactShadows,
  Html,
  Float,
  PresentationControls,
  Sparkles,
} from "@react-three/drei";
import * as THREE from "three";

// Computer model component
function Computer() {
  const computerRef = useRef<THREE.Group>(null);
  const screenRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (computerRef.current) {
      computerRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.2) * 0.15;
      computerRef.current.position.y =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.05;
    }
  });

  return (
    <group ref={computerRef} scale={0.6}>
      {/* Laptop base */}
      <group position={[0, -0.15, 0]}>
        {/* Bottom case */}
        <mesh castShadow>
          <boxGeometry args={[1.6, 0.1, 1.0]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.9}
            roughness={0.1}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Keyboard area */}
        <mesh position={[0, 0.05, 0.4]} castShadow>
          <boxGeometry args={[1.4, 0.05, 0.7]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.7}
            roughness={0.2}
            clearcoat={0.5}
            clearcoatRoughness={0.2}
          />
        </mesh>

        {/* Keyboard keys */}
        <mesh position={[0, 0.08, 0.4]}>
          <boxGeometry args={[1.3, 0.01, 0.6]} />
          <meshStandardMaterial color="#333333" roughness={0.5} />
        </mesh>

        {/* Trackpad */}
        <mesh position={[0, 0.08, 0.1]}>
          <boxGeometry args={[0.4, 0.01, 0.3]} />
          <meshStandardMaterial color="#222222" roughness={0.3} />
        </mesh>

        {/* Palm rest */}
        <mesh position={[0, 0.05, -0.2]}>
          <boxGeometry args={[1.4, 0.05, 0.2]} />
          <meshPhysicalMaterial
            color="#1a1a1a"
            metalness={0.7}
            roughness={0.2}
            clearcoat={0.5}
          />
        </mesh>
      </group>

      {/* Screen */}
      <group position={[0, 0.2, -0.1]} rotation={[0.2, 0, 0]}>
        {/* Screen back */}
        <mesh ref={screenRef} castShadow>
          <boxGeometry args={[1.4, 0.8, 0.05]} />
          <meshPhysicalMaterial
            color="#111111"
            metalness={0.7}
            roughness={0.2}
            clearcoat={1}
            clearcoatRoughness={0.1}
          />
        </mesh>

        {/* Screen border */}
        <mesh position={[0, 0, 0.01]}>
          <boxGeometry args={[1.45, 0.85, 0.02]} />
          <meshStandardMaterial
            color="#00aaff"
            emissive="#00aaff"
            emissiveIntensity={0.5}
          />
        </mesh>

        {/* Screen content */}
        <group position={[0, 0, 0.02]}>
          <Html
            transform
            occlude={false}
            prepend
            center
            scale={1}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: "#111111",
              borderRadius: "4px",
              padding: "20px",
              boxSizing: "border-box",
              zIndex: 10,
            }}
          >
            <div className="w-full h-full flex flex-col items-center justify-center">
              <h1 className="text-2xl font-bold text-white mb-3">Mootez</h1>
              <p className="text-base text-gray-300 mb-3">
                Full Stack Developer
              </p>
              <div className="flex gap-1.5">
                {["React", "Node.js", "TypeScript", "Next.js"].map(
                  (tech, index) => (
                    <span
                      key={index}
                      className="px-1.5 py-0.5 bg-blue-500/20 text-blue-400 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  )
                )}
              </div>
            </div>
          </Html>
        </group>
      </group>

      {/* Hinge */}
      <group position={[0, 0.05, 0.1]}>
        <mesh>
          <cylinderGeometry args={[0.08, 0.08, 1.5, 32]} />
          <meshStandardMaterial
            color="#333333"
            metalness={0.8}
            roughness={0.2}
          />
        </mesh>
        {/* Hinge details */}
        <mesh position={[0, 0, 0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
          <meshStandardMaterial
            color="#222222"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
        <mesh position={[0, 0, -0.5]}>
          <cylinderGeometry args={[0.1, 0.1, 0.1, 32]} />
          <meshStandardMaterial
            color="#222222"
            metalness={0.9}
            roughness={0.1}
          />
        </mesh>
      </group>

      {/* Logo */}
      <mesh position={[0, -0.1, -0.4]} rotation={[Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.2, 0.2]} />
        <meshStandardMaterial
          color="#00aaff"
          emissive="#00aaff"
          emissiveIntensity={0.5}
        />
      </mesh>
    </group>
  );
}

// Floating tech elements
function TechElement({
  position,
  size = 0.3,
  color = "#00aaff",
}: {
  position: [number, number, number];
  size?: number;
  color?: string;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x =
        Math.sin(state.clock.elapsedTime * 0.3) * 0.3;
      meshRef.current.rotation.y =
        Math.cos(state.clock.elapsedTime * 0.2) * 0.3;
      meshRef.current.position.y +=
        Math.sin(state.clock.elapsedTime * 0.5) * 0.005;
    }
  });

  return (
    <mesh ref={meshRef} position={position} castShadow>
      <torusGeometry args={[size, size * 0.2, 20, 36]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={1.5}
        roughness={0.2}
        metalness={0.8}
      />
    </mesh>
  );
}

// Interactive particles
function InteractiveParticles() {
  const { viewport, mouse } = useThree();
  const particleRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (particleRef.current) {
      particleRef.current.position.x = THREE.MathUtils.lerp(
        particleRef.current.position.x,
        mouse.x * viewport.width * 0.3,
        0.05
      );
      particleRef.current.position.y = THREE.MathUtils.lerp(
        particleRef.current.position.y,
        mouse.y * viewport.height * 0.3,
        0.05
      );
    }
  });

  return (
    <Sparkles
      ref={particleRef}
      count={200}
      scale={10}
      size={2}
      speed={0.3}
      color="#0070f3"
      opacity={0.5}
    />
  );
}

// Main scene component
function Scene() {
  return (
    <>
      <Environment preset="city" background={false} />
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={2} color="#00aaff" />
      <pointLight position={[-10, -10, -10]} intensity={1} color="#ff00aa" />
      <pointLight position={[0, 5, 5]} intensity={1.5} color="#00cc88" />

      <InteractiveParticles />

      <PresentationControls
        global
        rotation={[0.13, 0.1, 0]}
        polar={[-0.4, 0.2]}
        azimuth={[-1, 1]}
        speed={1.5}
        zoom={0.5}
      >
        <Float
          speed={2}
          rotationIntensity={0.5}
          floatIntensity={1}
          floatingRange={[-0.1, 0.1]}
        >
          <Computer />
        </Float>

        <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
          <TechElement position={[2.5, 1.2, -1]} size={0.4} color="#00aaff" />
          <TechElement position={[-2.5, 1.2, -1]} size={0.4} color="#ff00aa" />
          <TechElement position={[0, 2.5, -2]} size={0.5} color="#00cc88" />
          <TechElement position={[2, -1.5, -1]} size={0.3} color="#ff00aa" />
          <TechElement position={[-2, -1.5, -1]} size={0.3} color="#00aaff" />
        </Float>

        <Sparkles
          count={80}
          scale={10}
          size={1.5}
          speed={0.2}
          opacity={0.7}
          color="#00aaff"
        />
      </PresentationControls>

      <ContactShadows
        position={[0, -2.2, 0]}
        opacity={0.5}
        scale={12}
        blur={2.5}
        far={5}
      />
    </>
  );
}

// Main 3D component
const Hero3DModel = () => {
  return (
    <div
      className="w-full h-full relative"
      style={{ background: "transparent" }}
    >
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
          preserveDrawingBuffer: true,
        }}
        style={{
          width: "100%",
          height: "100%",
          position: "absolute",
          top: 0,
          left: 0,
          background: "transparent",
        }}
      >
        <color attach="background" args={["transparent"]} />
        <Scene />
      </Canvas>
    </div>
  );
};

export default Hero3DModel;
