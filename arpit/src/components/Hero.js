import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadPolygonPath } from "tsparticles-path-polygon";
import styles from '../css/Hero.module.css';

function Hero() {
  // यह फंक्शन tsparticles इंजन को शुरू करेगा
  const particlesInit = useCallback(async (engine) => {
    // पॉलीगॉन पाथ प्लगइन को रजिस्टर करें
    await loadPolygonPath(engine);
  }, []);

  // पार्टिकल्स के लिए कॉन्फ़िगरेशन ऑब्जेक्ट
 const particlesOptions = {
    // --- बस यह सेक्शन जोड़ें ---
    background: {
      color: {
        value: '#efc52eff', // डार्क बैकग्राउंड कलर
      },
    },
    // --- बाकी सब कुछ वैसा ही रहेगा ---
    fpsLimit: 120,
    particles: {
       color: {
      // ▼▼▼ पार्टिकल्स का रंग बदलने के लिए यहाँ बदलाव करें ▼▼▼
      value: '#0f0e0cff', // <-- यहाँ अपना मनचाहा रंग डालें
    },
    move: {
      enable: true,
      speed: 1,
      // ... बाकी का कोड वैसा ही रहेगा
    },
    number: {
      value: 80,
    },
    },
    detectRetina: true,
  };

  return (
    <div className={styles.container}>
      {/* Particles Component को बैकग्राउंड में जोड़ा गया है */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={particlesOptions}
        className={styles.particles}
      />
      
      {/* आपका मौजूदा कंटेंट */}
      <div className={styles.content}>
        <div className={styles.left}>
          <div className={styles.intro}>Hi, I'm Arpit Pandey</div>
          <p className={styles.intro_para}>
            I'm a passionate web developer dedicated to building dynamic, user-friendly, and responsive websites. With a keen eye for design and a strong foundation in modern web technologies, I create seamless digital experiences that bring ideas to life.
          </p>
        </div>
        <div className={styles.right}>
          <div className={styles.myimg}>
            <img src="arpitimg.png" alt="Arpit Pandey" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;