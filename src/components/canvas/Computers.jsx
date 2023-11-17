import  { Suspense,  } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";




const ComputersCanvas = () => {
  
  return (
    
<Canvas className=" hidden sm:flex flex-row">
    <Suspense fallback={null}>
    <hemisphereLight intensity={0.15} groundColor='black' />
    <pointLight intensity={1} />
      <OrbitControls enableZoom={false} 
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
        />
  
      <ambientLight intensity={1} />
     
      <directionalLight position={[0, 2, 1.5]} />
      <Sphere args={[1, 150, 200]} scale={1} position={[4.7, -0.5, 0.7]} >
        <MeshDistortMaterial
          color="#915EFF" opacity={0.75} transparent
          attach="material"
          distort={1.75}
        
        />
      </Sphere>
    </Suspense>
    
  </Canvas>

    )}


export default ComputersCanvas;