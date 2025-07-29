import React from 'react'
import styles from '../css/Skills.module.css'
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact, FaNodeJs,FaJava,FaPython ,FaGitAlt,FaGithub,FaFigma,FaBootstrap} from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMui ,SiExpress,SiMongodb,SiTypescript,SiRender,SiPostman} from "react-icons/si";
import { TbApi,TbBrandCpp } from "react-icons/tb";
import { IoLogoFirebase,IoLogoVercel } from "react-icons/io5";
import { FaC } from "react-icons/fa6";
import { VscVscode } from "react-icons/vsc";

function Skills() {
    return (
        <div className={styles.container}>
            <div className={styles.skills}>Skills</div>
            <h2 className={styles.heading}>A collection of my technical skills and expertise honed through various projects and experiences</h2>
            <div className={styles.box_container}>
                <div className={styles.box}>
                    <h2 className={styles.box_heading}>Frontend</h2>
                    <div className={styles.icons}>
                        <div className={styles.icon}><FaHtml5 size='25px' color='rgb(227, 79, 38)' /> HTML</div>
                        <div className={styles.icon}><FaCss3Alt size='25px' color='rgb(21, 114, 182)' /> CSS</div>
                        <div className={styles.icon}><FaJsSquare size='25px' color='rgb(247, 223, 30)' /> JavaScript</div>
                        <div className={styles.icon}><FaReact size='25px' color='rgb(97, 218, 251)' /> React</div>
                        <div className={styles.icon}><RiTailwindCssFill size='25px' color='rgb(56, 189, 248)' /> Talwind CSS</div>
                        <div className={styles.icon}> <SiMui size='25px' color='rgb(56, 189, 248)' /> Material UI</div>
                        <div className={styles.icon}> <FaBootstrap size='25px' color='rgb(56, 189, 248)' /> Bootstrap</div>
                    </div>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.box_heading}>Backend</h2>
                     <div className={styles.icons}>
                        <div className={styles.icon}><FaNodeJs size='25px' color='rgb(51, 153, 51)' /> Node JS</div>
                        <div className={styles.icon}><SiExpress size='25px' color='rgb(0, 0, 0)' /> Express JS</div>
                        <div className={styles.icon}><SiMongodb size='25px' color='rgb(71, 162, 72)' /> Mongodb</div>
                        <div className={styles.icon}><TbApi size='25px' color='rgb(74, 144, 226) ' /> RestAPI</div>
                        <div className={styles.icon}><IoLogoFirebase size='25px' color='rgb(255, 202, 40)' />FireBase</div>
                    </div>
                </div>
            </div>
            <div className={styles.box_container}>
                <div className={styles.box}>
                    <h2 className={styles.box_heading}> Language</h2>
                     <div className={styles.icons}>
                        <div className={styles.icon}><FaC size='25px' color='rgb(168, 185, 204)' /> C</div>
                        <div className={styles.icon}><TbBrandCpp size='25px' color='rgb(0, 89, 156)' /> C++</div>
                        <div className={styles.icon}><FaJsSquare size='25px' color='rgb(247, 223, 30)' /> JavaScript</div>
                        <div className={styles.icon}><FaJava size='25px' color='rgb(0, 115, 150)' /> Java</div>
                        <div className={styles.icon}><FaPython size='25px' color='rgb(55, 118, 171)' /> Python</div>
                        <div className={styles.icon}><SiTypescript size='25px' color='rgb(49, 120, 198)' /> TypeScript</div>

                    </div>
                </div>
                <div className={styles.box}>
                    <h2 className={styles.box_heading}>Tools</h2>
                     <div className={styles.icons}>
                        <div className={styles.icon}><FaGitAlt size='25px' color='rgb(240, 80, 50)' /> Git</div>
                        <div className={styles.icon}><FaGithub size='25px' color='rgb(24, 23, 23)' /> Github</div>
                        <div className={styles.icon}><VscVscode  size='25px' color='rgb(0, 122, 204)' /> VSCode</div>
                        <div className={styles.icon}>< SiRender size='25px' color='	rgb(70, 227, 183)' /> Render</div>
                        <div className={styles.icon}><IoLogoVercel size='25px' color='rgb(0, 0, 0)' /> Vercel</div>
                        <div className={styles.icon}> <SiPostman size='25px' color='rgb(255, 108, 55)' /> Postman</div>
                        <div className={styles.icon}> <FaFigma size='25px' color='rgb(242, 78, 30)' /> Figma</div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Skills
