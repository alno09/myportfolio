import React from 'react'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const words = [
    { text: 'Software' },
    { text: 'Hardware' },
    { text: 'AI System' },
]

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0,
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut',
            }
        )
    })

  return (
    <section id='hero' className='relative overflow-hidden'>
        <div className='absolute top-0 left-0 z-10'>
            <img src="/images/bg.png" alt="background" />
        </div>

        <div className='hero-layout'>
            <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                <div className='flex flex-col gap-7'>
                    <div className='hero-text'>
                        <h1>Building
                            <span className='slide'>
                                <span className='wrapper'>
                                    {words.map((word) => (
                                        <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                            <span>{word.text}</span>
                                        </span>
                                    ))}
                                </span>
                            </span>
                        </h1>
                        <h1>into Ecosystem</h1>
                        <h1>that Help People</h1>
                    </div>
                    <p className='text-white-50 md:text-xl realtive z-10 pointer-events-none'>Hi, I’m Alno, an engineer living in Indonesia,<br></br>building systems that connect code to reality.</p>
                    <Button className='md:w-80 md:h-16 w-60 h-12' id='button' text='Download CV' />
                </div>
            </header>
            <figure>
                <div className="hero-3d-layout">
                    <HeroExperience />
                </div>
            </figure>
        </div>
    </section>
  )
}

export default Hero