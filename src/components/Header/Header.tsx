'use client'
import Link from 'next/link'
import { Contacts } from './icons/Contacts'
import { MenuIcon } from './icons/MenuIcon'
import { usePathname } from 'next/navigation'
import { headerNavigation } from './constants'

export function Header() {
  const pathname = usePathname();

  return (
    <header className='py-2'>
      <div className='mx-auto p-4 flex items-center justify-between'>
        <div className='font-bold'>
          <Link href='/'>LucaDCZ</Link>
          <span className='text-text-accent text-2xl'>.</span>
        </div>
        <nav className='hidden lg:flex text-text-primary text-lg font-semibold'>
          {headerNavigation.map((navItem) => (
            <Link
              key={navItem.href}
              href={navItem.href}
              className={`mx-8
                ${pathname === navItem.href ? 'text-text-accent' : ''}`
              }
            >
              {navItem.label}
            </Link>
          ))}
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
