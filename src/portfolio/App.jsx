import React from 'react'
import Navbar from './Components/navbar/Navbar'
import Background from './Components/background/Background'
import HomeRouter from '../router/HomeRouter'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Background
        particleColors={['#ffffff', '#ffffff']}
        Background={['black']}
        particleCount={350}
        particleSpread={10}
        speed={0.5}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        sizeRandomness={10}
      />
      <HomeRouter/>
    </div>
  )
}

export default Home
