import { workData } from '@/assets/assets'
import React from 'react'
import { motion } from 'motion/react'

const Work = ({isDarkMode}) => {
  return (
    <motion.div
    initial={{ opacity: 0}}
    whileInView={{opacity: 1}}
    transition={{duration: 1}}
    id='work' className='w-full px-[12%] py-10 scroll-mt-20'>

        <motion.h4
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.3, duration: 0.5}}
        className='text-center mb-2 text-lg font-Ovo'>My Portfolio</motion.h4>

        <motion.h2
        initial={{y: -20, opacity: 0}}
        whileInView={{y: 0, opacity: 1}}
        transition={{delay: 0.5, duration: 0.5}}
        className='text-center text-5xl font-Ovo'>My Latest Work</motion.h2>

        <motion.p
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.7, duration: 0.5}}
        className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo '>
            Welcome to my portfolio! Here, you will find some of the projects I have
            worked on recently. I tried to include a variety so it doesn&apos;t show different versions of the same thing.
        </motion.p>

        <motion.div
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{delay: 0.9, duration: 0.6}}
        className='grid grid-cols-1 md:grid-cols-2 gap-8 my-10'>
            {workData.map((project, index)=>(
                <motion.article
                whileHover={{y: -6}}
                transition={{duration: 0.3}}
                key={index}
                className='flex flex-col overflow-hidden rounded-xl border border-gray-400 bg-lightHover text-gray-800 hover:shadow-black hover:-translate-y-1 duration-500 dark:border-white/50 dark:bg-darkHover dark:text-white dark:hover:shadow-white'>

                    {/* Screenshot: its own block, so no text ever sits on top of it */}
                    <div
                    role='img'
                    aria-label={`${project.title} screenshot`}
                    className='aspect-[16/10] w-full bg-no-repeat bg-cover bg-center border-b border-gray-300 dark:border-white/30'
                    style={{backgroundImage: `url(${project.bgImage})`}} />

                    <div className='flex flex-1 flex-col gap-4 p-6'>
                        <h3 className='text-xl font-semibold font-Ovo'>{project.title}</h3>

                        <p className='text-sm leading-6 text-gray-700 dark:text-white/80'>{project.description}</p>

                        {project.tryIt && (
                            <details className='rounded-lg border border-gray-400 p-3 text-sm dark:border-white/50'>
                                <summary className='cursor-pointer font-medium'>How to explore this demo</summary>
                                <ol className='mt-3 flex list-decimal flex-col gap-2 pl-5 text-gray-700 dark:text-white/80'>
                                    {project.tryIt.steps.map((step) => (
                                        <li key={step.title}>
                                            <span className='font-medium text-gray-800 dark:text-white'>{step.title}.</span> {step.detail}
                                            {step.href && (
                                                <> <a href={step.href} target='_blank' rel='noopener noreferrer' className='underline hover:opacity-80'>{step.linkLabel} ↗</a></>
                                            )}
                                        </li>
                                    ))}
                                </ol>
                                {project.tryIt.payment && (
                                    <p className='mt-3 text-gray-700 dark:text-white/80'>{project.tryIt.payment}</p>
                                )}
                            </details>
                        )}

                        <ul className='flex flex-wrap gap-2'>
                            {project.stack?.map((tech) => (
                                <li key={tech} className='rounded-full border border-gray-400 px-3 py-1 text-xs text-gray-700 dark:border-white/50 dark:text-white/80'>
                                    {tech}
                                </li>
                            ))}
                        </ul>

                        <div className='mt-auto flex gap-3 pt-2'>
                            <a href={project.live} target='_blank' rel='noopener noreferrer'
                            className='rounded-full border border-black bg-black px-5 py-2 text-sm text-white hover:bg-gray-700 duration-300 dark:border-white dark:bg-white dark:text-black dark:hover:bg-white/80'>
                                Live demo ↗
                            </a>
                            <a href={project.github} target='_blank' rel='noopener noreferrer'
                            className='rounded-full border border-gray-700 px-5 py-2 text-sm hover:bg-lightHover duration-300 dark:border-white dark:hover:bg-darkHover'>
                                GitHub ↗
                            </a>
                        </div>
                    </div>
                </motion.article>
            ))}
        </motion.div>

    </motion.div>
  )
}

export default Work
