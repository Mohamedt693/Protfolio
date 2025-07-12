import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

function Footer({isDarkMode}) {
    return (
        <div className='mt-20'>
            <div className='text-center'>
                <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='' className='w-36 mx-auto'/>
                <div className='w-max mx-auto flex items-center gap-2'>
                    <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
                    mthawrat@gmail.com
                </div>
            </div>
            <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
                <p>© 2025 Mohamed Tharwat. All rights reserved.</p>
                <ul className='flex items-center justify-center gap-10 mt-4 sm:mt-0'>
                    <li><a target='_blank' href="https://github.com/Mohamedt693">GitHub</a></li>
                    <li><a target='_blank' href="https://www.linkedin.com/in/mohamed-thawrat-194a42371/">LinkedIn</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
