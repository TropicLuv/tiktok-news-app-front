import { SectionWrapper } from '../../hoc'
import { observer } from 'mobx-react-lite'
import { Posts, bodySwipeTsParticles } from '../../ConstData/Body'
import styles from './body.module.scss'
import { useScrollChangeContext } from '../../Contexts/ScrollChangeContext'
import { useNavPopoverCtx } from '../../Contexts/NavPopoverContext'
import { transform } from 'framer-motion'
import { TsParticlesBackground } from '../TsParticles/TsParticlesBackground'
import { headerTsParticles } from '../../ConstData/Header'



const Body = () => {

    useNavPopoverCtx()

    const { scrollValue, scrollState } = useScrollChangeContext()

    // console.log({ scrollValue })

    function takeDataFromBackend() {
        return Posts
    }
    const data = takeDataFromBackend()



    return (
        <section className='scrollTo'
            onClick={scrollValue < 50 ? () => (window.scroll(0, 390)) : () => { }}
            style={scrollValue < 50 ? { cursor: "pointer" } : {}}
        >
            <div className={styles.scrollTo__swipeContainer}>
                <div className={styles.scrollTo__swipeContainer__boundaries}>
                    <TsParticlesBackground options={headerTsParticles} customParticles={true} />
                </div>
            </div>

            <div className={styles.section}

                style={
                    scrollValue < 150 ? {
                        filter: `blur(${0.4}px)`
                    }
                        : {}
                }

            >

                {data.map((post, index) => {
                    return (
                        <div className={styles.section__row}
                            style={
                                {
                                    paddingTop: `${100 - (scrollValue / (3 * post.id + 1))}px`,
                                    opacity: `${(1 - post.id / 5) + scrollValue / 500}`,
                                }
                            }>

                            <ul className={styles.section__row__imageList}
                                style={scrollValue < 100 ? {
                                    filter: `blur(${7 - scrollValue / 10}px)`
                                } : {}}
                            >
                                {post.images.map((image) => {
                                    const url = `https://picsum.photos/id/${post.id * 20}/400/`
                                    return (
                                        <li className={styles.section__row__imageList__li}
                                            style={{

                                            }}
                                        >
                                            <img className={styles.section__row__imageList__li__image} src={url} alt="" />

                                        </li>
                                    )
                                })}

                            </ul>


                            <div className={styles.section__row__card}

                                // onMouseOver={scrollValue == 0 ? () => (window.scroll(0, 390)) : () => { }}

                                style={scrollValue > 100 ? {
                                    boxShadow: `0 ${((35 + 27.8 * index) - scrollValue / 10)}px 25px rgba(0, 0, 0, 0.25)`,


                                    // width: `${600 + (scrollValue * 1.8 / (post.id + 1))}px`,
                                } : {
                                    boxShadow: `0 35px 25px rgba(0, 0, 0, 0.25)`,
                                    // transform: "translateX(-30px)",

                                    // width: "600px"
                                }}
                            >
                                <div className={styles.section__row__card__head}>

                                    <div className={styles.section__row__card__head__title}>
                                        <span className={styles.section__row__card__head__title__text}
                                            style={
                                                (scrollValue < 100) ?
                                                    {
                                                        textShadow: "0 0 10px #e7dfe8"
                                                    }
                                                    : {}

                                            }>{post.title}</span>
                                        <div className={styles.section__row__card__head__title__underscore} />
                                    </div>
                                    <span className={styles.section__row__card__head__date}
                                        style={
                                            (scrollValue < 100) ?
                                                {
                                                    textShadow: "0 0 4px rgb(0, 0, 0)"
                                                }
                                                : {}
                                        }
                                    >{post.date}</span>
                                </div>

                                {true && <p className={styles.section__row__card__shortArticle}
                                    style={
                                        ((scrollValue + 50 - ((post.id) * 40)) < 150) ? {
                                            opacity: `1`,
                                            color: `rgba(255,255,255,${(scrollValue) / 50})`,
                                            textShadow: `0px 0px ${scrollValue / 80}px rgba(255, 255, 255,${scrollValue / 200} )`,

                                        } : {
                                            opacity: "1",
                                        }
                                    }
                                >{post.shortArticle}</p>}

                                <div className={styles.section__row__card__underscore} />

                            </div>

                        </div>
                    )
                })}

            </div>

        </section >



    )
}
export default observer(Body);

// export default SectionWrapper(observer(Body))
