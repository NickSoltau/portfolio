import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
        <div className='text-center'>
            <Image src={assets.logoNick} alt='logo'  className='w-36 mx-auto'/>
           
            <div className='flex w-max items-center gap-2 mx-auto'>
             <Image src={isDarkMode? assets.mail_icon_dark : assets.mail_icon} alt='logo'  className='w-6'/>
             Nick.Soltau@gmail.com
            </div>
        </div>

        <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
            <p>
              © 2025 Nicholas Soltau. All rights reserved.
            </p>
            <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
                <li><a href='https://github.com/NickSoltau' >Github</a></li>
                <li><a href='www.linkedin.com/in/nicholas-soltau-075798376' >Linkedin</a></li>
            </ul>
        </div>


    </div>
  )
}

export default Footer