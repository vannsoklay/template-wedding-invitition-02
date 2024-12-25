import { Canvas } from '@react-three/fiber';
import { Suspense } from 'react';
import { OrbitControls } from '@react-three/drei';

interface PatternBackgroundProps {
    opacity?: number;
    color?: string;
}

export const THREEDBackground: React.FC<PatternBackgroundProps> = ({
    opacity = 0.7
}) => (
    <div className={`absolute inset-0`} style={{ opacity: opacity }}>
        <div
            className="absolute inset-0"
        //   style={{
        //     backgroundImage: `url(${bghero})`,
        //     backgroundSize: 'cover',
        //     backgroundRepeat: 'no-repeat',
        //     backgroundPosition: 'center',
        //     backgroundColor: color,
        //   }}
        >
            <Canvas className="absolute inset-0">
                <Suspense fallback={null}>
                    <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
                </Suspense>
            </Canvas>
        </div>
    </div>
);