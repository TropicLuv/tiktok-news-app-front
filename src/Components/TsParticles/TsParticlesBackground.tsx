import styles from './tsParticle.module.scss'

import React, { useState } from 'react'
import { useCallback } from "react";
import type { Container, Engine, ICoordinates } from "tsparticles-engine";
import Particles from "react-particles";
import { loadFull } from "tsparticles";



export const TsParticlesBackground = ({ options, customParticles }: { options: any, customParticles?: boolean }) => {



    const particlesInit = useCallback(async (engine: Engine) => {
        // console.log(engine);

        // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size



        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container: Container | undefined) => {
        if (customParticles) {
            const particleOptions = {
                color: {
                    value: "#ffffff",
                },
                size: {
                    value: 1,
                },
            };
            const position = (i: number): ICoordinates => {
                let finalX = 0;
                let finalY = 0;
                const paddingY = 30
                const paddingX = 25
                const coeffY = 55
                const coeffX = 55


                finalX = coeffX * Math.floor(i / 10) + paddingX
                finalY = (i % 10) * coeffY + paddingY

                return {
                    x: finalX,
                    y: finalY,
                }



            }
            for (let i = 0; i < 10; i++) {

                container!.particles.addParticle(position(i), particleOptions);
            }


        }

        await console.log(container);
    }, []);
    return (

        <Particles
            className="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={options}

        />
    );
};

