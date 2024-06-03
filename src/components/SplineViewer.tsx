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
        <canvas
            ref={canvasRef}
            width="10%"
            height="30px"  // Use height attribute to explicitly set the canvas height
            style={{ width: '10%', height: '30px', margin: '20px 0' }} // Ensure the inline styles are also applied
        />
    );
};

export default SplineViewer;
