import React, { useEffect, useRef } from 'react';
import { Application } from '@splinetool/runtime';

const SplineViewer: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        if (canvasRef.current) {
            const app = new Application(canvasRef.current);
            app.load('https://prod.spline.design/xsZZejO4VrhhcbZL/scene.splinecode');
        }
    }, []);

    return (
        <div style={{ flex: 2, padding: '20px', position: 'relative', margin: '0 100px' }}>
            <canvas
                ref={canvasRef}
                style={{
                    position: 'relative',
                    alignContent: 'left',
                    width: '100%',
                    height: '100%',
                }}
            />
        </div>
    );
};

export default SplineViewer;
