import React from 'react'
import styles from '../css/Contact.module.css'
import { HiOutlineMail } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { FiLinkedin } from "react-icons/fi";
function Contact() {
  return (
    <div className={styles.main_container}>
        <h1 className={styles.heading}>Get in Touch</h1>
        <p className={styles.para}>Have a project in mind? Let's discuss how we can work together.</p>
        <div className={styles.container}>
        <div className={styles.left}>
            <label htmlFor="name">Name</label>
            <input type="text"  className={styles.input} placeholder='Your name'/>
              <label htmlFor="email">Email</label>
            <input type="email" className={styles.input} placeholder='your.email@example.com'/>
              <label htmlFor="email">Message</label>
            <textarea name="message" id="message" rows='10' placeholder='Your message...'></textarea>
            <button className={styles.sendbtn}>Send Message</button>
        </div>
        <div className={styles.right}>
          <h3 className={styles.right_heading}>Let's Connect</h3>
          <p className={styles.right_para}>I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.</p>
          <div className={styles.right_links}><HiOutlineMail  color='blue' size='25px' strokeWidth='1.5px' />arpitpandey07072005@gmail.com</div>
          <div className={styles.right_links}><FaGithub color='blue' size='25px' strokeWidth='1.5px'/>github.com/arpit07072005</div>
          <div className={styles.right_links}><FiLinkedin color='blue' size='25px' strokeWidth='1.5px'/>linkedin.com/in/arpit-pandey-979969301</div>
          <p className={styles.right_parab}>Feel free to reach out through the form or directly via email. I'll get back to you as soon as possible.</p>
        </div>
      </div>
    </div>
  )
}
export default Contact
