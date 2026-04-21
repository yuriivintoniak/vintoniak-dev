import { ContactForm } from './ContactForm'
import { ContactLinks } from './ContactLinks'

export function Contacts() {
  return (
    <>
      <div className='flex items-center gap-4 lg:gap-8 mb-2 lg:mb-5'>
        <h2 className='text-[26px] lg:text-[56px] font-bold'>
          Contacts
        </h2>
        <span className='text-[26px] lg:text-[56px] text-text-accent'>
          {'{'}
        </span>
      </div>
      <div className='flex flex-col gap-6 2xs:pl-4 lg:pl-8'>
        <div className='lg:hidden'>
          <h3 className='text-[21px] lg:text-3xl text-text-accent font-medium leading-normal'>
            Looking for job opportunities.
          </h3>
          <p className='lg:text-xl text-text-primary'>
            My inbox is always open for collaboration or interviews.
          </p>
        </div>
        <div className='flex flex-col-reverse lg:flex-row gap-6 lg:gap-12'>
          <ContactLinks />
          <ContactForm />
        </div>
      </div>
      <div className='mt-2 lg:mt-5'>
        <span className='text-[26px] lg:text-[56px] text-text-accent'>
          {'}'}
        </span>
      </div>
    </>
  )
}
