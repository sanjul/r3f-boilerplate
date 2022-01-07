import React, { useRef } from 'react';

export default function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef();

    return (
        <mesh
            {...props}
            ref={mesh}
            rotateZ={Math.PI /2}
            >
            <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
            <meshStandardMaterial
                attach="material"
                color="darkgrey"
            />
        </mesh>
    );
}
