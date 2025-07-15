"use client"
import { assets, serviceData } from '@/assets/assets'
import React from 'react'
import Image from 'next/image';
import { useState } from 'react';
import { motion } from "motion/react"


function Skills({isDarkMode}) {
    const [showAll, setShowAll] = useState(false);
    const visibleData = showAll ? serviceData : serviceData.slice(0, 5);

    return (
        <motion.div id='skills' className='w-full px-[12%] py-10 scroll-mt-20'
        initial={{opacity: 0}}
        whileInView={{opacity: 1}}
        transition={{duration: 1}}
        > 
            <motion.h4 
            initial={{y: -20 ,opacity: 0}}
            whileInView={{y: 0 ,opacity: 1}}
            transition={{duration: 0.5, delay: 0.3}} 
            className='text-center text-lg mb-2 font-Ovo'>what I offer</motion.h4>
            <motion.h2 
            initial={{y: -20 ,opacity: 0}}
            whileInView={{y: 0 ,opacity: 1}}
            transition={{duration: 0.5, delay: 0.5}} 
            className='text-center text-5xl font-Ovo'>My Skills</motion.h2>
            <motion.p
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 0.7}}  
            className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I craft modern, responsive web interfaces with clean code and elegant animations.
                My skills blend creativity and technology to deliver seamless digital experiences.
            </motion.p>
            <motion.div 
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.6, delay: 0.9}}  
            className='grid grid-cols-auto gap-6 my-10'>
                {visibleData.map(({icon, title, description, link}, index) => {
                    return (
                        <motion.div
                        whileHover={{scale: 1.05}}
                        transition={{duration: 0.3}}
                        key={index} className='border border-gray-400 rounded-lg px-8 py-12 cursor-pointer
                        hover:shadow-black hover:bg-lightHover hover:-translate-y-1 duration-500 dark:hover:bg-darkHover dark:hover:shadow-white'>
                            <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                            <p className='text-sm text-gray-600 leading-5 dark:text-white/80'>{description}</p>
                        </motion.div>
                    )
                })}
            </motion.div>
            {!showAll && (
            <motion.button
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{duration: 0.5, delay: 1.1}} 
            onClick={() => setShowAll(true)}
            className='w-max mx-auto my-20 flex items-center justify-center gap-2
            text-gray-700 border-[0.5px] border-gray-700 rounded-full py-3 px-10 hover:bg-lightHover duration-500 dark:text-white dark:border-white dark:hover:bg-darkHover'>
                show more <Image src={isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold} alt='right arrow' className='w-4'/>
            </motion.button>
            )}
        </motion.div>
    )
}

export default Skills
