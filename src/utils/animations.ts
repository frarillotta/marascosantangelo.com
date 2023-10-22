import { Variants } from "framer-motion";


export const getCirclesPathAnimationVariants = ({delay}: {delay?: number} = {delay: 1}): Variants => ({
        hidden: { 
            pathLength: 0, 
            opacity: 0,
        },
        visible:  {
            pathLength: 1,
            opacity: 1,
            transition: {
                pathLength: { delay, type: "spring", duration: 3.5, bounce: 0 },
                opacity: { delay, duration: 0.01 }
            }
        }
})

export const getTextAnimation = (from: 'above' | 'below' | 'left' | 'right', delay = 1): Variants => ({
    hidden: { 
        y: from === 'above' ? -200 : from === 'below' ? 200 : 0, 
        x: from === 'left' ? -200 : from === 'right' ? 200 : 0, 
        opacity: 0,
    },
    visible:  {
        y: 0,
        x: 0,
        opacity: 1,
        transition: {
            y: { delay, duration: 3.5 },
            x: { delay, duration: 3.5 },
            opacity: { delay: delay + 2.5, duration: 2 }
        }
    }
})
