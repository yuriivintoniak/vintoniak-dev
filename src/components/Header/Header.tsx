import Link from 'next/link'
import { Contacts } from './icons/Contacts'
import { MenuIcon } from './icons/MenuIcon'
import { HeaderNavigation } from './HeaderNavigation'

export function Header() {
  return (
    <header className='py-2 text-xl'>
      <div className='mx-auto p-4 flex items-center justify-between'>
        <div className='font-bold'>
          <Link href='/'>LucaDCZ</Link>
          <span className='text-text-accent text-2xl'>.</span>
        </div>
        <nav className='hidden lg:flex text-text-primary font-semibold'>
          <HeaderNavigation />
        </nav>
        <div>
          <Link href="/contacts" className='hidden lg:flex'>
            <Contacts />
          </Link>
          <button className='lg:hidden flex'>
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  )
}
