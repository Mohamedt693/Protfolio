import React from 'react'
import Image from 'next/image'
import { assets, infoList, toolsData } from '@/assets/assets'
import { motion } from "motion/react"



function About({isDarkMode}) {
    return (
        <motion.div id='about' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        >
            <motion.h4
            initial={{y: -20 ,opacity: 0}}
            whileInView={{y: 0 ,opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}} 
            className='text-center text-lg mb-2 font-Ovo'
            >
                Introduction
            </motion.h4>
            <motion.h2 
            initial={{y: -20 ,opacity: 0}}
            whileInView={{y: 0 ,opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}} 
            className='text-center text-5xl font-Ovo'
            >
                About me
            </motion.h2>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.8}}
            className='w-full flex flex-col lg:flex-row items-center gap-20 my-20'>
                <motion.div
                initial={{y: -20 ,scale: 0.9}}
                whileInView={{y: 0 ,scale: 1}}
                transition={{duration: 0.5}}  
                className='w-64 sm:w-80 rounded-3xl max-w-none'>
                    <Image src={assets.user_image} alt='user' className='w-full rounded-3xl'/>
                </motion.div>
                <motion.div 
                initial={{opacity: 0}}
                whileInView={{opacity: 1}}
                transition={{duration: 0.6, delay: 0.8}} 
                className="flex-1">
                    <p className='mb-10 max-w-2xl font-Ovo'> 
                        Frontend Developer | Focused on building fast, accessible, and user-friendly web apps using React, Next.js,
                        and modern tools like Tailwind, TypeScript, and Firebase. Passionate about clean UI, UX, and continuous learning. Open to new opportunities.
                    </p>
                    <motion.ul 
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.8, delay: 1}} 
                    className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                        {infoList.map(({icon, iconDark, title, description}, index)=>{
                            return (
                                <motion.li
                                whileHover={{scale: 1.05}}
                                className='border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                                hover:bg-lightHover hover:-translate-y-1 duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50' 
                                key={index}>
                                    <Image src={isDarkMode ? iconDark : icon} alt={title} className='w-7 mt-3'/>
                                    <h3 className='my-4 font-semibold text-gray-700 dark:text-white'>{title}</h3>
                                    <p className='rexr-sm text-gray-600 dark:text-white/80'>{description}</p>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                    <motion.h4 
                    initial={{y: 20 ,opacity: 0}}
                    whileInView={{y: 0 ,opacity: 1}}
                    transition={{duration: 0.5, delay: 1.3}} 
                    className='my-6 text-gray-700 font-Ovo  dark:text-white/80'>Tools I use</motion.h4>
                    <motion.ul
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    transition={{duration: 0.6, delay: 1.5}}  
                    className='grid grid-cols-4 md:grid-cols-9 gap-3'>
                        {toolsData.map((tool, index)=>{
                            return(
                                <motion.li
                                whileHover={{scale: 1.1}}
                                className='w-12 sm:w-14 flex items-center justify-center bg-white
                                aspect-square border border-gray-400 rounded-lg cursor-pointer
                                hover:-translate-y-1 duration-500' 
                                key={index}>
                                    <Image src={tool} alt='Tool' className='w-5 sm:w-7'/>
                                </motion.li>
                            )
                        })}
                    </motion.ul>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}

export default About
