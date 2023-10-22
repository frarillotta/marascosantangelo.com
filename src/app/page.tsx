'use client';

import Image from 'next/image'
import styles from './page.module.css'
import { Icon } from '~/components/Icon'
import {motion} from 'framer-motion';
import { getTextAnimation } from '~/utils/animations';

export default function Home() {
  return (
    <main className={styles.mainLayout}>
      <motion.p        
        initial="hidden" 
        animate="visible" 
        variants={getTextAnimation('left', 1.5)}  
        className={`${styles.text} ${styles.architectureText}`}
      >architecture</motion.p>
      <div />
      <Icon className={styles.logo} />
      <div />
      <motion.p        
        initial="hidden" 
        animate="visible" 
        variants={getTextAnimation('right', 1.5)}  
        className={`${styles.text} ${styles.interiorsText}`}
      >interiors</motion.p>
    </main>
  )
}
