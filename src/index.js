import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './styles.css';
import { Stats , OrbitControls, Stars} from '@react-three/drei';
import Box from './components/Box';
import Floor from "./components/Floor"

ReactDOM.render(
    <Canvas colorManagement>
        <Stars/>
        <Stats />
        <OrbitControls/>
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
        
        <ambientLight />
    </Canvas>,
    document.getElementById('root')
);
