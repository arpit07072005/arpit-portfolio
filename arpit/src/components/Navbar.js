import React from 'react'
import { Instagram,Linkedin,GithubIcon, House, CircleUserRound, BookOpen, Laptop, Send} from 'lucide-react'





import styles from '../css/Navbar.module.css'
function Navbar() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
             <img src="\logo-rm.png" alt="" height="100px" />
        </div>
        <div className={styles.links}>
<House  color='white' size='36px' strokeWidth='1.5px'/>
<CircleUserRound  color='white' size='36px' strokeWidth='1.5px'/>
<BookOpen  color='white' size='36px' strokeWidth='1.5px'/>
<Laptop color='white' size='36px' strokeWidth='1.5px'/>
<Send color='white' size='36px' strokeWidth='1.5px'/>
        </div>
        <div className={styles.media}>
<GithubIcon color='white' size='26px' strokeWidth='1.5px'/>
<Linkedin color='white' size='26px' strokeWidth='1.5px'/>
<Instagram color='white' size='26px' strokeWidth='1.5px'/>



        </div>
      </div>
    </div>
  )
}

export default Navbar
