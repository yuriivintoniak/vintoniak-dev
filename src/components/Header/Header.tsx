'use client'
import Link from 'next/link'
import { MenuIcon } from './MenuIcon'
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
        <button className='hover:cursor-pointer'>
          <MenuIcon className='lg:hidden' />
        </button>
      </div>
    </header>
  )
}
