import React from 'react'
import Hero from '../components/Hero';
import data from '../../database/db';

const Home = () => {
  return (
    <div className='hero'>
      {data.Hero && data.Hero.map(hero => {
        return(
          <>
            <Hero hero={hero} /> 
          </>
        )
      })}
    </div>
  )
}

export default Home