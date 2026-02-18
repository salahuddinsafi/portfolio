import React from 'react';
import SectionHeading from '@/components/Helper/SectionHeading';
import {experiences} from '@/data';
import { Briefcase, GraduationCap } from 'lucide-react';

const Experience = () => {
  return (
    <div className='py-6 bg-gray-100 dark:bg-gray-950'>
        <SectionHeading 
            title_1='Experience & '
            title_2='Education'
            description='My professional journey and academic background' />
        <div className="relative px-6 max-w-4xl mx-auto">
            {/* timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-blue-400 to-blue-900 md:-translate-x-px">
                {
                    experiences.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`relative flex flex-col md:flex-row gap-8 mb-12 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                    {/* timeline node */}
                                    <div className="absolute left-4 md:left-1/2 w-8 h-8 -translate-x-1/2 rounded-full bg-white border-2 border-blue-500 flex items-center justify-center z-10">
                                        {item.type === "work" ? (
                                            <Briefcase className='w-4 h-4 text-blue-500' />
                                        ) : (
                                            <GraduationCap className='w-4 h-4 text-blue-500' />
                                        )
                                    
                                        }
                                    </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Experience