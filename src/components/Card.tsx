import React, { useState } from 'react'
import { useSpring, a } from '@react-spring/web'
import styles from './styles.module.css'

const Card = ({ frontStyle, backStyle, containerStyle }) => {
    const [flipped, setFlipped] = useState(false)
    const { transform, opacity } = useSpring({
        opacity: flipped ? 1 : 0,
        transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
        config: { mass: 5, tension: 500, friction: 80 },
    })

    return (
        <div className={styles[containerStyle]} onClick={() => setFlipped(state => !state)}>
            <a.div
                className={`${styles[backStyle]} ${styles.card}`}
                style={{ opacity: opacity.to(o => 1 - o), transform }}
            />
            <a.div
                className={`${styles[frontStyle]} ${styles.card}`}
                style={{
                    opacity,
                    transform,
                    rotateX: '180deg',
                }}
            />
        </div>
    )
}

export default Card
