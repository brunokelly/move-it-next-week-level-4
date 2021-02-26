import { useContext } from 'react';
import { challangesContext } from '../contexts/ChallangeContext';
import styles from '../styles/components/Profile.module.css'

export function Profile(){
    const { level } = useContext(challangesContext)
    
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/brunokelly.png" alt="Bruno Vieria"/>
            <div>
                <strong>Bruno Vieira</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    );
}