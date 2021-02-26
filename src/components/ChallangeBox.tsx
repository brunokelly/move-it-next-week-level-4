import { useContext } from 'react'
import { challangesContext } from '../contexts/ChallangeContext'
import { CountdownContext } from '../contexts/CountdownContext'
import styles from '../styles/components/ChallangeBox.module.css'
import { CompletedChallanges } from './CompletedChallanges'

export function ChallangeBox() {
    const { activeChallange, resetChallenge, completeChallenge } = useContext(challangesContext)
    const { resetCountdown } = useContext(CountdownContext)


    function handleChallengeSucceeded() {
        completeChallenge()
        resetCountdown()
    }

    function handleChallengeFailed() {
        resetChallenge()
        resetCountdown()
    }

    return(
        <div className={styles.challangeBoxContainer}>
            { activeChallange ? (
                <div className={styles.challangeActive}>
                    <header>Ganhe {activeChallange.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallange.type}.svg`} alt="" />
                        <strong>Novo desafio</strong>
                        <p>{activeChallange.description}</p>
                    </main>

                    <footer>
                        <button 
                            type="button"
                            className={styles.challangeFailedButton}
                            onClick={ handleChallengeFailed }
                        >
                            Falhei
                        </button>
                        <button 
                            type="button"
                            className={styles.challangeSuccesedButton}
                            onClick={  handleChallengeSucceeded }
                        > 
                            Completei
                        </button>
                    </footer>
                </div>
            ) : (
                <div className={styles.challangeNotActive}>
                    <strong>Finalize um ciclo para receber um desafio</strong>
                    <p>
                        <img src="icons/level-up.svg"/>
                    </p>
                </div>
            )}
        </div>
    )
}