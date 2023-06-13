import React from 'react'

const Hero = ({hero}) => {
  return (
    <section className='hero'>
        <div className="hero-inner">
            <h1>{hero.title}</h1>
            <p>{hero.text}</p>
        </div>
    </section>
  )
}

export default Hero