import React from 'react'
import styles from '../css/Achivements.module.css'
function Achivements() {
    return (
        <div className={styles.achivements}>
            <div className={styles.achivement}>Achievements</div>
            <div className={styles.container}>
                <div className={styles.line} >
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                    <div className={styles.dot4}></div>
                </div>
                <div className={`${styles.cards} ${styles.left}`}>
                    <h4 className={styles.cardhead}>Top 5 Finalist – DevGathering Hackathon 2025</h4>
                    <div className={styles.org}>Organizer: MLSA (Microsoft Learn Student Ambassador) – MIET</div>
                    <div className={styles.carddis}>Built an innovative project within 24 hours during the hackathon organized by MLSA MIET.</div>

                </div>
                <div className={`${styles.cards} ${styles.right}`}>
                    <h4 className={styles.cardhead}>Frontend Developer – MLCOE (Machine Learning Center of excillence)</h4>
                    <div className={styles.org}>Duration:
                        Sep 2024 – Present</div>
                    <div className={styles.carddis}>Working as a Frontend Developer in MLCOE technical community.</div>
                </div>
                <div className={`${styles.cards} ${styles.left}`}>
                    <h4 className={styles.cardhead}>Certificate of Participation – Code of Bharat Hackathon 2025</h4>
                    <div className={styles.org}>Organizer:
                        Code of Bharat</div>
                    <div className={styles.carddis}>Participated in Code of Bharat Hackathon 2025 and showcased innovative problem-solving abilities.</div>

                </div>
                <div className={`${styles.cards} ${styles.right}`}>
                     <h4 className={styles.cardhead}>Coordinator – MLCOE Junior Recruitment Drive</h4>
                    <div className={styles.org}>Organizer: MLCOE (Machine Learning Center of Excillence)</div>
                    <div className={styles.carddis}>Organized and managed the junior recruitment process for MLCOE community..</div>

                </div>

            </div>

        </div>
    )
}

export default Achivements
