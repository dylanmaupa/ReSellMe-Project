import React from 'react'
import Hero from '../components/Hero';
import data from '../../database/db';
import LaptopView from '../components/LaptopView';
import About from '../components/About';
import GettingStarted from '../components/GettingStarted';
import Features from '../components/Features';

const Home = () => {
  return (
    <div className='home'>
      {data.Hero && data.Hero.map(hero => {
        return(
          <>
            <Hero hero={hero} /> 
            <LaptopView/>
          </>
        )
      })}
      {data.About && data.About.map(about => {
        return(
          <>
            <About about={about} />
          </>
        )
      })}
      {data.GetStarted && data.GetStarted.map(start => {
        return(
          <>
            <GettingStarted start={start} />
          </>
        )
      })}
      {data.Features && data.Features.map(feature => {
        return(
          <>
            <Features feature={feature} />
          </>
        )
      })}
    </div>
  )
}

export default Home