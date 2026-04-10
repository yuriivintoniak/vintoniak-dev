import { JourneyMobile } from './JourneyMobile'
import { JourneyDesktop } from './JourneyDesktop'

export function Journey() {
  return (
    <div className='w-full pt-10 sm:pt-0'>
      <h2 className='text-3xl 2xs:text-[44px] sm:text-[56px] font-bold mb-5'>
        Journey<span className='text-text-accent'>.</span>
      </h2>
      <JourneyMobile />
      <JourneyDesktop />
    </div>
  )
}
