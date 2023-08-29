import { Canvas } from '@react-three/fiber'


export default function myCanvas() {
    return (
        <Canvas>
            <mesh>
                <boxGeometry />
                <meshStandardMaterial />
            </mesh>
        </Canvas>
    )
}