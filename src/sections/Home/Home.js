import React from 'react'
import './HomeStyle.css'

export const Home = () => {
  return (
    <div
      className='row'
    >
      <div
        className='home__box'
      >
        <p className='home__p' >EL <span className='home__span'>ABRAZO</span></p>
        <span className='home__p home__mr'>QUE NOS</span>
        <span className='home__span home__mr'>UNE</span>
      </div>
      <img className='home__img' src='/assets/men-1.png' alt='chico' />
    </div>
  )
}
