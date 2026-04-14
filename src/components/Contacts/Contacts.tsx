import { ContactLinks } from './ContactsLinks'

export function Contacts() {
  return (
    <>
      <div className='flex items-center gap-8 mb-5'>
        <h2 className='text-3xl 2xs:text-[44px] sm:text-[56px] font-bold'>
          Contacts
        </h2>
        <span className='sm:text-[56px] text-text-accent'>
          {'{'}
        </span>
      </div>
      <ContactLinks />
      <div className='mt-5'>
        <span className='sm:text-[56px] text-text-accent'>
          {'}'}
        </span>
      </div>
    </>
  )
}
