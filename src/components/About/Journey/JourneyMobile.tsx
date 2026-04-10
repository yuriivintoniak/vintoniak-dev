import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion'
import { CheckIcon } from './CheckIcon'
import { journeyData } from './journey.data'

export function JourneyMobile() {
  return (
    <div className='lg:hidden'>
      <Accordion type='single' defaultValue="Team Projects">
        {journeyData.map((item, index) => (
          <AccordionItem
            key={index}
            value={item.title}
            className='px-0 2xs:px-4 py-4 first:pt-0 last:pb-0 text-text-primary'
          >
            <AccordionTrigger className='py-0 text-[22px] 2xs:text-[26px] font-medium'>
              {item.title}
            </AccordionTrigger>
            <AccordionContent className='px-0 sm:p-2.5'>
              <div className='flex flex-col gap-1'>
                <h3 className='text-lg xs:text-[22px] font-medium'>
                  {item.role}
                </h3>
                <p className='text-sm text-text-primary font-medium'>
                  {item.period}
                </p>
              </div>
              <ul className='pt-4 flex flex-col gap-3'>
                {item.details.map((detail, index) => (
                  <li key={index} className='flex flex-col sm:flex-row items-start gap-2'>
                    <CheckIcon />
                    <span className='text-base xs:text-lg text-text-primary tracking-[0.5px] leading-snug'>
                      {detail}
                    </span>
                  </li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}
