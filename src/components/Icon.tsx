import { getCirclesPathAnimationVariants, getTextAnimation } from '~/utils/animations';
import styles from './Icon.module.css'
import { motion } from 'framer-motion';

export const Icon = ({ className }: { className?: string }) => {
    return <motion.svg
        className={className}
        viewBox="0 0 860.12 860.12"
        initial="hidden"
        animate="visible"
    >
        <motion.circle variants={getCirclesPathAnimationVariants()} className={styles.brown} cx="430.06" cy="430.06" r="429.06" />
        <motion.circle style={{strokeDashoffset: -2}} variants={getCirclesPathAnimationVariants()}  className={styles.black} cx="431.38" cy="429.36" r="388.73" />
        <motion.text variants={getTextAnimation('below')} style={{fontSize: '4em'}} x="270" y="380" fontFamily="Garamond" fill="#914b45"> MARASCO </motion.text>
        <motion.line variants={getCirclesPathAnimationVariants({delay: 2})} className={styles.brown} x1="105.19" y1="429.56" x2="430.1" y2="429.56" />
        <motion.line  style={{strokeDashoffset: -2}} variants={getCirclesPathAnimationVariants({delay: 2})} className={styles.brown} x1="430.1" y1="429.56" x2="755.7" y2="429.56" />
        <motion.text variants={getTextAnimation('above')}  style={{fontSize: '4em'}} x="215" y="520" fontFamily="Garamond" fill="#914b45"> SANTANGELO </motion.text>
        <motion.line variants={getCirclesPathAnimationVariants({delay: 2})}  className={styles.brown} x1="430.1" y1="403.93" x2="430.1" y2="453.78" />
    </motion.svg>
}
