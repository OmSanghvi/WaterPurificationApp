'use client';

import { useEffect, useState } from 'react';
import { Canvas, useLoader, useThree } from '@react-three/fiber';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import * as THREE from 'three';
import { OrbitControls } from '@react-three/drei';
const FBXModel = ({ visible }) => {
    const fbx = useLoader(FBXLoader, '/WaterPurifier.fbx'); // Path to your FBX file

    useEffect(() => {
        if (fbx) {
            fbx.traverse((child) => {
                if (child instanceof THREE.Mesh) {
                    child.castShadow = true;
                    child.receiveShadow = true;
                }
            });
        }
    }, [fbx]);

    return visible ? <primitive object={fbx} scale={0.5} /> : null;
};

export default function Page() {
    const [status, setStatus] = useState('System Initialized');
    const [showModel, setShowModel] = useState(false);

    const startPurification = () => {
        setStatus('Purification in Progress...');
        setShowModel(true); // Show the model
        setTimeout(() => {
            setStatus('Purification Complete. Water is Clean!');
        }, 3000);
    };
    const Camera = () => {
        const { camera } = useThree();
        useEffect(() => {
            camera.position.set(0, 2, 5);
            camera.lookAt(0, 1, 0);
        }, [camera]);

        return null;
    };

    return (
        <div>
            <h2>Simulation Controls</h2>
            <button onClick={startPurification}>Start Purification</button>
            <p>Status: {status}</p>

            {showModel && (
                <div style={{ height: '500px', marginTop: '20px' }}>
                    <Canvas shadows>
                        <ambientLight intensity={0.5} />
                        <spotLight
                            position={[10, 10, 10]}
                            angle={0.15}
                            penumbra={1}
                            castShadow={true}
                        />
                        <FBXModel visible={showModel} />
                        <Camera />
                        <OrbitControls enableZoom={true} enablePan={true} enableRotate={true} />
                    </Canvas>
                </div>
            )}
        </div>
    );
}
