'use client'
import { useState } from 'react'
import { CheckIcon } from './CheckIcon'
import { journeyData } from './journey.data'

export function JourneyDesktop() {
  const [activeIndex, setActiveIndex] = useState(0)

  const activeItem = journeyData[activeIndex]

  return (
    <div className='hidden lg:flex flex-col w-full pt-10 sm:pt-0'>
      <h2 className='text-3xl 2xs:text-[44px] sm:text-[56px] font-bold mb-7'>
        Journey<span className='text-text-accent'>.</span>
      </h2>
      <div className='min-h-80 flex gap-2'>
        <div>
          {journeyData.map((item, index) => (
            <div
              key={index}
              className={`px-6 py-8 border-l-4 ${
                index === activeIndex
                  ? 'border-text-accent text-text-accent'
                  : 'border-text-primary text-text-primary'
              }`}
            >
              <button
                onClick={() => setActiveIndex(index)}
                className='text-2xl font-medium whitespace-nowrap'
              >
                {item.title}
              </button>
            </div>
          ))}
        </div>
        <div className='px-6 py-8'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl font-medium'>
              {activeItem.role}
            </h3>
            <p className='text-sm text-text-primary font-medium'>
              {activeItem.period}
            </p>
          </div>
          <ul className='pt-6 flex flex-col gap-3'>
            {activeItem.details.map((detail, index) => (
              <div key={index} className='flex items-start gap-2'>
                <CheckIcon />
                <li className='text-lg text-text-primary tracking-[0.5px] leading-snug'>
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
