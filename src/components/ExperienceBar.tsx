import { useContext } from 'react';
import { challangesContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/ExperienceBar.module.css'

export function ExperienceBar() {
    const {currentExpierence, experienceToNextLevel}=useContext(challangesContext)

    const percentToNextLevel = Math.round((currentExpierence * 100)) / experienceToNextLevel
    return (
        <header className={styles.experienceBar}>
            <span>8 xp</span>
            <div>
                    <div style={{width: `${percentToNextLevel}%`}} />

                    <span className={styles.currentExperience} style={{left: `${percentToNextLevel}%`}}>
                        {currentExpierence} xp
                    </span>
            </div>
            <span>{experienceToNextLevel} xp</span>
        </header>
    );
}