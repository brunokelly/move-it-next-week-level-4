import { createContext, useState, ReactNode, useEffect } from 'react'
import challenges from '../../challenges.json'
import Cookies from 'js-cookie'
import { LevelUpModal } from '../components/LevelUpModal';


interface Challange {
    type: 'body' | 'eye'
    description: string
    amount: number
}

interface ChallagesContextData {
    level: number
    currentExpierence: number
    challangesCompleted: number
    experienceToNextLevel: number
    activeChallange: Challange
    levelUp: () => void
    startNewChallenge: () => void
    resetChallenge: () => void
    completeChallenge: () => void
    closeLevelUpModal: () => void
}
 
interface ChallengeProviderProps {
    children: ReactNode
    level: number
    currentExpierence: number
    challangesCompleted: number
}

export const challangesContext = createContext({} as ChallagesContextData)

export function ChallangeProvider({
    children, 
    ...rest
}: ChallengeProviderProps) {
    const [level, setLevel] = useState(rest.level ?? 1);
    const [currentExpierence, setCurrentExpierence] = useState(rest.currentExpierence ?? 0)
    const [challangesCompleted, setChallangeCompleted] = useState(rest.challangesCompleted ?? 0)

    const [activeChallange, setActiveChallange] = useState(null)
    const [isLevelUpModalOpen, setIsLevelUpModalOepn] = useState(false)


    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)
    
    useEffect(() => {
        Notification.requestPermission()
    },  [])

    useEffect(() => {
        Cookies.set('level', String(level))
        Cookies.set('currentExpierence ', String(currentExpierence ))
        Cookies.set('challangesCompleted', String(challangesCompleted))
    }, [level, currentExpierence, challangesCompleted])

    function levelUp() {
        setLevel(level + 1)
        setIsLevelUpModalOepn(true)
    }

    function closeLevelUpModal() {
        setIsLevelUpModalOepn(false)
    }

    function startNewChallenge() {
        const randomChallangeIndex = Math.floor(Math.random() * challenges.length)
        const challenge = challenges[randomChallangeIndex]
        
        setActiveChallange(challenge)
        
        if ( Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount}xp`
            })
        }
    }   

    function resetChallenge(){
        setActiveChallange(null)
    }

    function completeChallenge() {
        if(!activeChallange){
            return;
        }

        const { amount } = activeChallange

        let finalExperience = currentExpierence + amount

        if( finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp()
        }

        setCurrentExpierence(finalExperience)
        setActiveChallange(null)
        setChallangeCompleted(challangesCompleted + 1)
    }

    return (
        <challangesContext.Provider value={{
            level, 
            currentExpierence, 
            challangesCompleted, 
            levelUp,
            startNewChallenge,
            activeChallange,
            resetChallenge,
            experienceToNextLevel,
            completeChallenge, 
            closeLevelUpModal}}>
            {children}

            {isLevelUpModalOpen && < LevelUpModal />}
        </challangesContext.Provider>
    )
}