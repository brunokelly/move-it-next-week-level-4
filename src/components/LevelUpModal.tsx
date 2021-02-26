import { useContext } from 'react'
import { challangesContext } from '../contexts/ChallangeContext'
import styles from '../styles/components/LevelUpModal.module.css'

export function LevelUpModal() {
    const { level, closeLevelUpModal } = useContext(challangesContext)

    return(
        
        <div className={styles.overlay}>
            <div className={styles.container}>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <button type='button' onClick={closeLevelUpModal}>
                    <img src="/icons/close.svg" alt="" />
                </button>
            </div>
        </div>
    )
}