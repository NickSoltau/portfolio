import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { techGroups, contactLinks } from '@/assets/tech'
import { motion } from 'motion/react'

// One square tile: logo on top, name underneath. Turns into a link when `url` is set.
const Tile = ({ tool, isDarkMode }) => {
  const src = isDarkMode && tool.iconDark ? tool.iconDark : tool.icon
  const isWebLink = tool.url?.startsWith('http')
  const tileClass = `flex flex-col items-center justify-center gap-2 w-20 sm:w-24 py-3 border border-gray-400 rounded-lg hover:-translate-y-1 duration-500 dark:border-white/50 ${tool.url ? 'cursor-pointer' : ''}`
  const content = (
    <>
      <Image src={src} alt='' width={28} height={28} className={`w-6 h-6 sm:w-7 sm:h-7 ${tool.invert ? 'dark:invert' : ''}`} />
      <span className='text-xs text-gray-600 dark:text-white/80'>{tool.name}</span>
    </>
  )

  return (
    <motion.li whileHover={{scale: 1.1}}>
      {tool.url ? (
        <a
          href={tool.url}
          {...(isWebLink && { target: '_blank', rel: 'noopener noreferrer' })}
          aria-label={tool.name}
          className={tileClass}>
          {content}
        </a>
      ) : (
        <div className={tileClass}>{content}</div>
      )}
    </motion.li>
  )
}

const about = ({isDarkMode}) => {
  return (
    <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
    initial={{opacity: 0}}
    whileInView= {{opacity: 1}}
    transition= {{duration: 1}}
    >
        <motion.h4 
        initial={{opacity: 0, y: -20}}
        whileInView= {{opacity: 1, y: 0}}
        transition= {{duration: 0.5, delay: 0.3}}  
        className='text-center mb-2 text-lg font-Ovo'>Introduction
        </motion.h4>

        <motion.h2 
        initial={{opacity: 0, y: -20}}
        whileInView= {{opacity: 1, y: 0}}
        transition= {{duration: 0.8}}
        className='text-center text-5xl font-Ovo'>About me</motion.h2>

        <motion.div 
        initial={{opacity: 0}}
        whileInView= {{opacity: 1}}
        transition= {{duration: 0.5, delay: 0.3}}
        className='flex flex-col w-full lg:flex-row items-center gap-20 my-20'>
           
            <motion.div 
            initial={{opacity: 0, scale: 0.9}}
            whileInView= {{opacity: 1, scale: 1}}
            transition= {{duration: 0.6}}
            className='w-64 sm:w-80 rounded-3xl max-w-none'>
                <Image src={assets.camping} alt='' className='w-full rounded-3xl' />
            </motion.div>

            <motion.div 
            initial={{opacity: 0}}
            whileInView= {{opacity: 1}}
            transition= {{duration: 0.6, delay: 0.8}}
            className='flex-1'>
                {/* DRAFT paragraph: edit freely */}
                <p className='mb-10 max-w-2xl font-Ovo'>
                    I&apos;m a frontend developer who came to code after years in healthcare and
                    mechanical contracting, so I&apos;m used to getting the details right
                    and working with people who depend on the result. I hold a BA in Philosophy and
                    an associate degree in Respiratory Therapy, and I&apos;ve added the AWS Certified
                    Cloud Practitioner credential plus Anthropic&apos;s Claude 101 and Claude Code 101
                    courses to my frontend training. I build with React and Next.js, most recently
                    craftDesk, a booking and payments app for small service shops, and I&apos;m looking
                    for a junior role where I can keep learning from a team.
                </p>

                <motion.ul 
                initial={{opacity: 0}}
                whileInView= {{opacity: 1}}
                transition= {{duration: 0.8, delay: 1}}
                className='flex flex-wrap gap-3 sm:gap-4'>
                    {contactLinks.map((link) => (
                        <Tile key={link.name} tool={link} isDarkMode={isDarkMode} />
                    ))}
                </motion.ul>
            </motion.div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
            {techGroups.map((group) => (
                <div key={group.label}>
                    <motion.h3 
                    initial={{y: 20, opacity: 0}}
                    whileInView= {{y: 0, opacity: 1}}
                    transition= {{duration: 0.5, delay: 0.3}}
                    className='mb-6 text-xl text-gray-700 font-Ovo dark:text-white/80'>{group.label}</motion.h3>

                    <motion.ul 
                    initial={{opacity: 0}}
                    whileInView= {{opacity: 1}}
                    transition= {{duration: 0.6, delay: 0.5}} 
                    className='flex flex-wrap items-center gap-3 sm:gap-4'>
                        {group.items.map((tool) => (
                            <Tile key={tool.name} tool={tool} isDarkMode={isDarkMode} />
                        ))}
                    </motion.ul>
                </div>
            ))}
        </div>
    </motion.div>
  )
}

export default about
