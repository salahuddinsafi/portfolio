import SectionHeading from '@/components/Helper/SectionHeading';
import React from 'react';
import { contactInfo } from '@/data';

const Contact = () => {
  return (
    <div className='py-6 bg-gray-100 dark:bg-gray-950'>
        <SectionHeading title_1='Get in' title_2='Touch' description="Have a project in mind or just want to say hi? I'd love to hear from you." />
        <div className='w-[80%] mx-auto'>
            <div className='grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto'>
                {/* Contact info */}
                <div>
                    <div className='space-y-8'>
                        <h3 className='text-2xl font-semibold mb-4'>Let&apos;s talk</h3>
                        <p className='text-muted-foreground'>
                            I&apos;m always to discussing new project, creative ideas, or opportunities to be part of your vision.
                        </p>
                    </div>
                    <div className='space-y-4 '>
                        {
                            contactInfo.map((item) => {
                                return (
                                    <a href={item.href} key={item.label} target='_blank' className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 shadow-md rounded-xl hover:scale-105 transition-all duration-300 group"></a>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact