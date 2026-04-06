'use client'
import { useState } from 'react'
import { CheckIcon } from './CheckIcon'
import { journeyData } from './journey.data'

export function Journey() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeItem = journeyData[activeIndex]

  return (
    <div className='w-full pt-10 sm:pt-0'>
      <h2 className='text-3xl 2xs:text-[44px] sm:text-[56px] font-bold mb-7'>
        Journey<span className='text-text-accent'>.</span>
      </h2>
      <div className='flex gap-2'>
        <div>
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`border-l-4 p-6 ${index === activeIndex ? 'border-text-accent' : 'border-text-primary'}`}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className={`text-2xl font-medium hover:cursor-pointer ${index === activeIndex ? 'text-text-accent' : 'text-text-primary'}`}
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div className='p-6'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl font-medium'>
              {activeItem.role}
            </h3>
            <p className='text-sm text-text-primary font-medium'>
              {activeItem.period}
            </p>
          </div>
          <ul className='pt-8 flex flex-col gap-3'>
            {activeItem.details.map((detail, index) => (
              <div key={index} className='flex items-start gap-2'>
                <CheckIcon />
                <li className='text-lg text-text-primary tracking-[0.5px]'>
                  {detail}
                </li>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
