import { useContext } from 'react'
import { challangesContext } from '../contexts/ChallangeContext'
import styles from '../styles/components/CompletedChallanges.module.css'

export function CompletedChallanges() {
const { challangesCompleted } = useContext(challangesContext)

    return (
        <div className={styles.completedChallangesContainer}>
            <span>Desafios completos</span>
            <span>{challangesCompleted}</span>
        </div>
    )
}