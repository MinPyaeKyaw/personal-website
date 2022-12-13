import React, {useState} from 'react'

// Framar motion
import { motion } from "framer-motion";

export default function TransitionAnimator({children} : any) {

  type visValues = 1 | 0;

  const [vis, setVis] = useState<visValues>(1);

  const onStart = ():void => {
    setVis(1);
  }

  const onEnd = ():void => {
    setVis(0);
  }

  return (
    <div className='transitor_container'>
        {vis === 1 && <motion.div 
        transition={{duration: 0}} 
        initial={{ opacity: vis }}
        animate={{ opacity: vis }}  
        exit={{ opacity: 0 }} 
        className='transitor_transitor'>
            <motion.div 
            onAnimationComplete={onEnd}
            onAnimationStart={onStart}
            transition={{duration: 1}} 
            exit={{ x: window.innerWidth, width: 100 }} 
            initial={{ x: -100, width: 100 }}
            animate={{ x: window.innerWidth, width: 800 }} 
            className='transitor_liner'></motion.div>
        </motion.div>}
        {children}
    </div>
  )
}
