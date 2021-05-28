import React, {useEffect, useState} from 'react';

import s from './style.module.scss';

import SmallPokeBallPng from './assets/PokeBall1.png';
import CloudPng from './assets/Cloud1.png';
import PokeBallPng from './assets/Pokeball2.png';
import CloudBigPng from './assets/Cloud2.png';
import PikachuPng from './assets/Pikachu.png';

const Parallax = () => {

    const [screenX, setScreenX] = useState(0)
    const [screenY, setScreenY] = useState(0)

    const handleMouseMove = (event: MouseEvent) => {
        setScreenX(event.screenX)
        setScreenY(event.screenY)
    }

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove)
    }, [])

    return (
        <div className={s.root}>
            <div
                className={s.smallPokeBall}
                style={{
                    transform: `translate(${screenY * -.008}px, ${screenX * .02}px)`
                }}
            >
                <img src={SmallPokeBallPng} alt="Small PokeBall" />
            </div>
            <div
                className={s.cloud}
                style={{
                    transform: `translate(${screenX * .02}px, ${screenY * .03}px)`
                }}
            >
                <img src={CloudPng} alt="Cloud PokeBall" />
            </div>
            <div
                className={s.cloudBig}
                style={{
                    transform: `translate(${screenY * .04}px, ${screenX * -.008}px)`
                }}
            >
                <img src={CloudBigPng} alt="Cloud Big PokeBall" />
            </div>
            <div
                className={s.pokeBall}
                style={{
                    transform: `translate(${screenX * .008}px, ${screenY * -.008}px)`
                }}
            >
                <img src={PokeBallPng} alt="Big PokeBall" />
            </div>
            <div
                className={s.pikachu}
                style={{
                    transform: `translate(${screenX * .03}px, ${screenY * .01}px)`
                }}
            >
                <img src={PikachuPng} alt="Cloud PokeBall" />
            </div>
        </div>
    );
};

export default Parallax;