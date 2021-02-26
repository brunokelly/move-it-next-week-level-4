import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { ChallangeBox } from '../components/ChallangeBox';
import { CompletedChallanges } from '../components/CompletedChallanges';
import { Countdown } from '../components/Countdown';
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from '../components/Profile';
import { CountdownProvider } from '../contexts/CountdownContext';

import styles from '../styles/pages/Home.module.css'
import { ChallangeProvider } from '../contexts/ChallangeContext';


export default function Home(props) {
  return (
    <ChallangeProvider 
    level={props.level}
    currentExpierence={props.currentExpierence}
    challangesCompleted={props.challengesCompleted}
    >

    <div className={styles.container}>
      <Head>
        <title>Inicio | Move it</title>
      </Head>
      <ExperienceBar/>

      <CountdownProvider>
        <section>
          <div >
            <Profile />
            <CompletedChallanges />
            <Countdown />
            
          </div>
          <div>
          <ChallangeBox /> 
          </div>
        </section>
      </CountdownProvider>
    </div>
    </ChallangeProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {
  
  const {level, currentExpierence, challangesCompleted} = ctx.req.cookies;

  return {
   props: { 
    level: Number(level),
    currentExpierence: Number(currentExpierence),
    challangesCompleted: Number(challangesCompleted)
  }
  }
}