import React from 'react'
import './Hero.css'
import { HiLocationMarker } from 'react-icons/hi'
import CountUp from 'react-countup'
const Hero = () => {
    return (
        <section className='hero-wrapper'>
            <div className='paddings innerWidth flexCenter hero-container '>
                <div className='hero-left'>
                    <div className='orange-circle' />                <div className='hero-title'><h1>Discovering <br />most Valuable<br /> Property</h1>
                    </div>
                    <div className='flexColStart hero-des'>
                        <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>
                        <span className='secondaryText'>Lorem ipsum dolor sit amet, consectetur adipiscing elit dolor sit amet.</span>
                    </div>
                    <div className='flexCenter search-bar'>
                        <HiLocationMarker color='var(--blue)' size={25} />
                        <input type='text' />
                        <button className='button'>Search</button>
                    </div>
                    <div className='flexCenter stats'>
                        <div className='flexColCenter stat'>
                            <span><CountUp start={8850} end={9300} duration={5}/>
                            <span>+</span></span>
                            <span className='secondaryText'>Premium Products</span>
                        </div>

                        <div className='flexColCenter stat'>
                            <span><CountUp start={850} end={1420} duration={5}/>
                            <span>+</span></span>
                            <span className='secondaryText'>Happy Customers</span>
                        </div>

                        <div className='flexColCenter stat'>
                            <span><CountUp end={45}/>
                            <span>+</span></span>
                            <span className='secondaryText'>Award Winnings</span>
                        </div>
                    </div>

                </div>
                <div className='flexCenter hero-right'>
                    <div className='image-container'>
                        <img src='./hero-image.png' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
