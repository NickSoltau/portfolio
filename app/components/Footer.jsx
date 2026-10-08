import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <a href='#top' aria-label='Back to top' className='block w-36 mx-auto hover:opacity-80 transition-opacity'>
                <Image src={assets.logoNick} alt='Nick Soltau logo' className='w-full'/>
            </a>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
              © 2026 Nicholas Soltau. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href='mailto:Nick.Soltau@gmail.com' className='hover:opacity-80 transition-opacity'>Email</a></li>
                <li><a href='https://www.linkedin.com/in/nicholas-soltau-075798376' target='_blank' rel='noopener noreferrer' className='hover:opacity-80 transition-opacity'>LinkedIn</a></li>
                <li><a href='https://github.com/NickSoltau' target='_blank' rel='noopener noreferrer' className='hover:opacity-80 transition-opacity'>GitHub</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer
