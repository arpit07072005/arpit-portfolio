import React from 'react'
import {Linkedin,GithubIcon, House, CircleUserRound, BookOpen, Laptop, Send} from 'lucide-react'
import { IoTrophyOutline } from "react-icons/io5";
import { TbBrandLeetcode } from "react-icons/tb";

import styles from '../css/Navbar.module.css'
function Navbar( {scrolltoTrigger,scrolltohero,scrolltoskills,scrolltoproject,scrolltoachivement}) {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.logo}>
             <img src="\logo-rm.png" alt="" height="100px" />
        </div>
        <div className={styles.links}>
<House  color='white' size='36px' strokeWidth='1.5px' onClick={scrolltohero}/>
<BookOpen  color='white' size='36px' strokeWidth='1.5px' onClick={scrolltoskills}/>
<Laptop color='white' size='36px' strokeWidth='1.5px' onClick={scrolltoproject}/>
<IoTrophyOutline  color='white' size='36px' strokeWidth='1.5px' onClick={scrolltoachivement}/>
<Send color='white' size='36px' strokeWidth='1.5px' onClick={scrolltoTrigger} />
        </div>
        <div className={styles.media}>
 <div><a href="https://github.com/arpit07072005" target='_blank'><GithubIcon color='white' size='26px' strokeWidth='1.5px'/></a></div>
<div><a href="https://linkedin.com/in/arpit-pandey-979969301" target='_blank'><Linkedin color='white' size='26px' strokeWidth='1.5px'/></a></div>
<div><a href="https://leetcode.com/u/arpitpandey07072005/" target='_blank'><TbBrandLeetcode  color='rgb(255, 161, 22)' size='26px' strokeWidth='2px'/></a></div>



        </div>
      </div>
    </div>
  )
}

export default Navbar
