import ReactDOM from 'react-dom';
import React from 'react';
import { Canvas } from '@react-three/fiber';
import './styles.css';
import { Stats , OrbitControls, Stars, Text} from '@react-three/drei';
import Box from './components/Box';
import Floor from "./components/Floor"

ReactDOM.render(
    <Canvas colorManagement>
        <Stars/>
        {/* <Stats /> */}
        <OrbitControls/>
        <pointLight position={[10, 10, 10]} />
        <Box position={[0, 1.5, -0.2]} />
        <Text
            onClick={() => window.open("https://sanjul.net")}
            font='https://fonts.gstatic.com/s/hennypenny/v5/wXKvE3UZookzsxz_kjGSfPQtvXQ.woff'
            scale={[20, 20, 20]}
            color="red" // default
            anchorX="center" // default
            anchorY="middle" // default
        >
        sanjul.net
      </Text>
        <ambientLight />
    </Canvas>,
    document.getElementById('root')
);
