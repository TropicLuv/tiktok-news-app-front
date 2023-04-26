import { useNavPopoverCtx } from "../../../Contexts/NavPopoverContext";
import { observer } from 'mobx-react-lite'
import styles from './popover.module.scss'
import { useEffect, useState } from "react";
import { useScrollChangeContext } from "../../../Contexts/ScrollChangeContext";
import { Tilt } from "react-tilt";


export const Popover = observer(() => {



    const windowWidth = window.innerWidth
    const { state, data, parentId, left, right } = useNavPopoverCtx();
    const { scrollState } = useScrollChangeContext();



    let leftVal = 0;
    if (((left + right) / 2 - 100) <= 10) {
        leftVal = 10
    }
    else if (((left + right) / 2 - 100) > windowWidth - 210) {
        leftVal = windowWidth - 210;
    }
    else {
        leftVal = ((left + right) / 2 - 100)
    }



    return (

        <div
            className={styles.popover}
            style={{
                top: `${(scrollState ? 35 : 0) + 65}px`,
                left: `${leftVal}px`,
                transform: state ? "scale(1)" : "scale(0) translateY(-170px)" + (parentId === "history" ? "" : (windowWidth / 2 > leftVal ? "rotateY(-120deg)" : "rotateY(120deg)")),
                transformOrigin: "center",
                opacity: state ? "1" : "0"
            }}
        >
            <Tilt
                options={{
                    reverse: true,
                    // perspective: 1000,
                    max: 10,
                    scale: 1,
                    speed: 1,
                    transition: true,
                    axis: "x",
                    tiltX: 100,
                    // axis: "x:100,y:20",
                    // easing: "cubic-bezier(0.215, 0.61, 0.355, 1)"
                }}
                className={styles.popover__tilt}
            >

                {state && (data?.elements.map((element, index) => {
                    return (
                        <div
                            key={element.name}
                            id={index.toString()}
                            className={styles.popover__tilt__element}
                        >
                            <p className={styles.popover__tilt__element__text}
                                style={{
                                    animationDelay: `${30 * index} ms`
                                }}
                            >{element.name}</p>

                        </div>
                    )
                }))}
            </Tilt>
        </div >
    );
});