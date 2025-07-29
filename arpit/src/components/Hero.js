import React from 'react'
import styles from '../css/Hero.module.css'
function Hero() {
  return (
    <div className={styles.container}>
     <div className={styles.left}>
        <div className={styles.intro}>Hi, I'm Arpit Pandey</div>
    <p className={styles.intro_para}> I'm  a passionate web developer dedicated to building dynamic, user-friendly, and responsive websites. With a keen eye for design and a strong foundation in modern web technologies, I create seamless digital experiences that bring ideas to life.</p>

     </div>
     <div className={styles.right}>
         <div className={styles.myimg}>
                        <img src="arpitimg.png" alt="" />
                    </div>
     </div>
    </div>
  )
}

export default Hero
