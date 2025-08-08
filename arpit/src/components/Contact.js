import React, { useEffect, useRef } from 'react'
import styles from '../css/Contact.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
import { LuSend } from "react-icons/lu";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger);
function Contact() {
   const leftRef = useRef(null);

  useEffect(() => {
  const animation = gsap.from(leftRef.current, {
    scrollTrigger: {
      trigger: leftRef.current,
      start: 'top 80%',
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 100,
    duration: 1,
    ease: 'power3.out',
  });

  return () => {
    animation.scrollTrigger?.kill();
    animation.kill();
  };
}, []);

  return (
    <div className={styles.main_container} id='contact'>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.para}>Have a project in mind? Let's discuss how we can work together.</p>
        <div className={styles.container }ref={leftRef}>
        <div className={styles.left} >
            <label htmlFor="name">Name</label>
            <input type="text"  className={styles.input} placeholder='Your name'/>
              <label htmlFor="email">Email</label>
            <input type="email" className={styles.input} placeholder='your.email@example.com'/>
              <label htmlFor="email">Message</label>
            <textarea name="message" id="message" rows='10' placeholder='Your message...'></textarea>
            <button className={styles.sendbtn}><LuSend  size='25px' strokeWidth='2px' />Send Message</button>
        </div>
        <div className={styles.right}>
          <h3 className={styles.right_heading}>Let's Connect</h3>
          <p className={styles.right_para}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className={styles.right_links}><HiOutlineMail  color='blue' size='25px' strokeWidth='1.5px' /><a href="/">arpitpandey07072005@gmail.com</a></div>
          <div className={styles.right_links}><FaGithub color='blue' size='25px' strokeWidth='1.5px'/><a href="https://github.com/arpit07072005" target='_blank'>github.com/arpit07072005</a></div>
          <div className={styles.right_links}><FiLinkedin color='blue' size='25px' strokeWidth='1.5px'/><a href="https://linkedin.com/in/arpit-pandey-979969301" target='_blank'>linkedin.com/in/arpit-pandey-979969301</a></div>
          <p className={styles.right_parab}>Feel free to reach out through the form or directly via email. I'll get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
