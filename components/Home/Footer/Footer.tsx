import { footerSocialLinks } from '@/data'
import { Heart } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
    <footer className='border-t bg-white dark:bg-gray-900 border-gray-700 py-12'>
        <div className='w-[80%] mx-auto'>
            <div className='flex flex-col md:flex-row items-center justify-between gap-6'>
                <a href='#home' className='text-xl font-bold text-indigo-700'>
                    {"<Dev/>"}
                </a>
                <div className='flex items-center gap-4'>
                    {
                        footerSocialLinks.map((link) => {
                            return <a href={link.href} key={link.label} target='_blank' 
                            rel="noopener noreferrer"
                            className='w-10 h-10 rounded-lg bg-white dark:bg-gray-800 shadow-md flex items-center justify-center text-muted-foreground hover:text-blue-500 transition-colors'>
                                <link.icon className='w-5 h-5' />
                            </a>
                        })
                    }
                </div>
                <p className='text-sm text-muted-foreground'>
                    Made with {''} <Heart className='w-4 h-4 text-destructive fill-destructive' /> by Salahuddin Safi. All rights reserved.
                </p>
            </div>
        </div>
    </footer>
  )
}

export default Footer