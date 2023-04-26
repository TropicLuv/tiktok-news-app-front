import { motion } from 'framer-motion';
import './sectionWrapper.scss'

const SectionWrapper = (Component: any) =>
    function HOC() {
        return (
            <motion.section
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.25 }}
                className="container"
            >
                <Component />
            </motion.section>
        )
    }


export default SectionWrapper