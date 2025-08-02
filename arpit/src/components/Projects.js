import React from 'react'
import styles from '../css/Projects.module.css'
function Projects() {
  return (
    <div className={styles.container}>
        <div className={styles.heading}>Featured Projects</div>
        <p className={styles.para}>A collection of my recent work. Hover to explore tech stack, click for details.</p>
        <div className={styles.box_container}>
        <div className={styles.box}>
            <h3 className={styles.box_heading}>CareConnect</h3>
            <p className={styles.box_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, fuga.</p>
        </div>
        <div className={styles.box}>
            <h3 className={styles.box_heading}>E Commerce</h3>
            <p className={styles.box_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam!</p>
        </div>
        <div className={styles.box}>
            <h3 className={styles.box_heading}>AI Interview</h3>
            <p className={styles.box_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam!</p>
        </div>
        <div className={styles.box}>
            <h3 className={styles.box_heading}>Cryptocurrency</h3>
            <p className={styles.box_para}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum, nam!</p>
        </div>
        </div>
    </div>
  )
}

export default Projects
