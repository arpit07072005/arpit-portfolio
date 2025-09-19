import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import styles from '../css/Achivements.module.css'

gsap.registerPlugin(ScrollTrigger)

function Achivements() {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const bluelineref =useRef(null)
  const dotsRef = useRef([])
  const cardsRef = useRef([])

useEffect(() => {
  const annimation = gsap.context(() => {
    
    gsap.from(lineRef.current, {
      scaleY: 0,
      duration: 2,
      ease: "power2.out",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 80%",
      },
    });

   
    let tween = gsap.fromTo(
      bluelineref.current,
      { scaleY: 0, transformOrigin: "top center" },
      {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress; // 0 → 1
            const lineHeight = lineRef.current.offsetHeight;
            const blueHeight = progress * lineHeight;

            dotsRef.current.forEach((dot) => {
              if (dot.offsetTop <= blueHeight) {
                dot.classList.add(styles.active);
              } else {
                dot.classList.remove(styles.active);
              }
            });
          },
        },
      }
    );

    cardsRef.current.forEach((card, i) => {
      gsap.from(card, {
        opacity: 0,
        x: i % 2 === 0 ? -100 : 100,
        duration: 1.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });
  }, containerRef);

  return () => annimation.revert();
}, []);

  return (
    <div className={styles.achivements} ref={containerRef}>
      <div className={styles.achivement}>Achievements</div>
      <div className={styles.container}>
        
        <div className={styles.line} ref={lineRef}>
            <div className={styles.blueline} ref={bluelineref}></div>
          {[1,2,3,4].map((_, i) => (
            <div
              key={i}
              className={styles[`dot${i+1}`]}
              ref={el => dotsRef.current[i] = el}
            />
          ))}
        </div>

        
        <div className={`${styles.cards} ${styles.left}`} ref={el => cardsRef.current[0] = el}>
          <h4 className={styles.cardhead}>Top 5 Finalist – DevGathering Hackathon 2025</h4>
          <div className={styles.org}>Organizer: MLSA (Microsoft Learn Student Ambassador) – MIET</div>
          <div className={styles.carddis}>Built an innovative project within 24 hours during the hackathon organized by MLSA MIET.</div>
        </div>

        <div className={`${styles.cards} ${styles.right}`} ref={el => cardsRef.current[1] = el}>
          <h4 className={styles.cardhead}>Frontend Developer – MLCOE (Machine Learning Center of Excellence)</h4>
          <div className={styles.org}>Duration: Sep 2024 – Present</div>
          <div className={styles.carddis}>Working as a Frontend Developer in MLCOE technical community.</div>
        </div>

        <div className={`${styles.cards} ${styles.left}`} ref={el => cardsRef.current[2] = el}>
          <h4 className={styles.cardhead}>Certificate of Participation – Code of Bharat Hackathon 2025</h4>
          <div className={styles.org}>Organizer: Code of Bharat</div>
          <div className={styles.carddis}>Participated in Code of Bharat Hackathon 2025 and showcased innovative problem-solving abilities.</div>
        </div>

        <div className={`${styles.cards} ${styles.right}`} ref={el => cardsRef.current[3] = el}>
          <h4 className={styles.cardhead}>Coordinator – MLCOE Junior Recruitment Drive</h4>
          <div className={styles.org}>Organizer: MLCOE (Machine Learning Center of Excellence)</div>
          <div className={styles.carddis}>Organized and managed the junior recruitment process for MLCOE community.</div>
        </div>

      </div>
    </div>
  )
}

export default Achivements
