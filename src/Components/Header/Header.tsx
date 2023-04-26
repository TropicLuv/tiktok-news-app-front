import { useState, useEffect, useContext } from 'react'
import styles from './header.module.scss'
import { SectionWrapper } from '../../hoc'
import { About, History, Overview, headerTsParticles, } from '../../ConstData/Header'

import { observer } from 'mobx-react-lite'
import { useNavPopoverCtx } from '../../Contexts/NavPopoverContext'
import { Popover } from './Popover/Popover'
import { useScrollChangeContext } from '../../Contexts/ScrollChangeContext'
import { TsParticlesBackground } from '../TsParticles/TsParticlesBackground'




///////////////////////////POPOVER
type popoverElement = {
    name: string,
    isLink: boolean,
    link?: string
}

// const new 

export type PopoverData = {
    elements: popoverElement[]
}






//////////////////////////////////
const Header = () => {


    const { state, parentId, setState, setParentId, setData, setLeft, setRight, navPopoverSetAllProps } = useNavPopoverCtx()

    const { scrollValue, scrollState } = useScrollChangeContext()

    headerTsParticles


    useEffect(() => {

        window.onresize = () => {
            let element = document.querySelector(`#${parentId}`);
            let { left, right } = element?.getBoundingClientRect() ?? { left: 0, right: 0 };
            setLeft(left)
            setRight(right)
        };

    }, [parentId, window.innerWidth]);





    function handlePopoverClick(e: React.MouseEvent<HTMLLIElement, MouseEvent>, newData: PopoverData) {

        const targetElement = e.target as HTMLLIElement;
        const newParentId = targetElement.id
        let element = document.querySelector(`#${newParentId}`);

        if (state && parentId === newParentId) {
            setState(!state);
            return
        }


        let { left, right } = element?.getBoundingClientRect() ?? { left: 0, right: 0 };

        // setParentId(newParentId)
        // setLeft(left)
        // setRight(right)
        // setData(newData);
        // setState(true);
        navPopoverSetAllProps(true, newParentId, newData, left, right)

        // console.log({ left, right, parentId })



    }






    return (
        <section className='header_root'
            style={
                scrollValue < 450 ? {
                    backgroundColor: `rgba(53, 53, 53, ${0 + scrollValue / 200})`,
                    boxShadow: `0 ${20 - scrollValue / 10}px 40px rgba(53, 53, 53, 0.55)`
                } :
                    {}
            }
        >
            <div className={styles.section_header}

            >
                <div className={styles.section_header__header}
                    style={scrollState ? {
                    } : {
                        // backgroundColor: "rgba(53, 53, 53, 0.95)",
                        // backgroundColor: "rgba(53, 53, 53, 0.95)",
                    }}
                >
                    <ul className={styles.section_header__header__dropnav} style={
                        scrollState ? {
                            top: "4vmin",
                            borderTopLeftRadius: "25px",
                            borderTopRightRadius: "25px",
                            boxShadow: "0px 0px 2px rgba(35, 17, 35, 1)",
                            // boxShadow: "0px 0px 10px rgba(1, 1, 1, 1)",

                            // backgroundColor: "rgba(233, 79, 55, 0.8)",
                            // border: "2px solid rgba(233, 79, 55, 0.9)",
                            backgroundColor: "rgba(53, 53, 53, 0.8)",

                            backdropFilter: "blur(15px)",

                        } : {
                            top: `${4}px`,
                            backgroundColor: "rgba(53, 53, 53, 0)",
                        }
                    }>


                        <li
                            id='overview'
                            className={styles.section_header__header__dropnav__navElement}
                            onClick={(e) => handlePopoverClick(e, Overview)}

                        >
                            <span className={styles.section_header__header__dropnav__navElement__text}>
                                Overview
                            </span>
                            <div className={styles.section_header__header__dropnav__navElement__stripe}></div>
                        </li>

                        <li
                            id='history'
                            className={styles.section_header__header__dropnav__navElement}
                            onClick={(e) => handlePopoverClick(e, History)}
                        >
                            <span className={styles.section_header__header__dropnav__navElement__text}>
                                History
                            </span>
                            <div className={styles.section_header__header__dropnav__navElement__stripe}></div>
                        </li>

                        <li
                            id='about'
                            className={styles.section_header__header__dropnav__navElement}
                            onClick={(e) => handlePopoverClick(e, About)}
                        >
                            <span className={styles.section_header__header__dropnav__navElement__text}>
                                About
                            </span>
                        </li>

                    </ul>

                </div>
                <Popover />

            </div>
            {/* <div className={styles.header_root__bottomBar}
                style={scrollState ? {
                    transform: "translateY(-16px)",
                    opacity: "0 !important",
                    backgroundColor: "rgba(53, 53, 53, 1)"

                } : {}}
            ></div> */}
            {/* <TsParticlesBackground options={headerTsParticles} /> */}
        </section >
    )
}

export default observer(Header)

