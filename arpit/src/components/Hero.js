import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles"; 
import { loadPolygonPath, polygonPathName } from "tsparticles-path-polygon";
import styles from '../css/Hero.module.css';

function Hero() {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine); 
    await loadPolygonPath(engine);
  }, []);

 

  return (
    <div className={styles.container}>
       <Particles
      options={{
        fpsLimit: 60,
        particles: {
          color: {
            value: "#FF0000",
            animation: {
              enable: true,
              speed: 1
            }
          },
          move: {
            attract: {
              enable: true,
              rotate: {
                distance: 100,
                x: 2000,
                y: 2000
              }
            },
            direction: "none",
            enable: true,
            outModes: {
              default: "destroy"
            },
            path: {
              clamp: false,
              enable: true,
              delay: {
                value: 0
              },
              generator: polygonPathName,
              options: {
                sides: 6,
                turnSteps: 30,
                angle: 30
              }
            },
            random: false,
            speed: 3,
            straight: false,
            trail: {
              fillColor: "#000",
              length: 20,
              enable: true
            }
          },
          number: {
            density: {
              enable: true,
              area: 800
            },
            value: 0
          },
          opacity: {
            value: 1
          },
          shape: {
            type: "circle"
          },
          size: {
            value: 2
          }
        },
        background: {
          color: "#000"
        },
        fullScreen: {
          zIndex: -1
        },
        detectRetina: true,
        emitters: {
          direction: "none",
          rate: {
            quantity: 1,
            delay: 0.25
          },
          size: {
            width: 0,
            height: 0
          },
          position: {
            x: 50,
            y: 50
          }
        }
      }}
      init={particlesInit}
    />
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.intro}>Hi, I'm <br /><span>Arpit Pandey</span></div>
          <p className={styles.intro_para}>
            I'm a passionate web developer dedicated to building dynamic,
            user-friendly, and responsive websites...
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.myimg}>
            <img src="\app.png" alt="Arpit Pandey" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;