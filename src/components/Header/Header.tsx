'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Contacts } from './icons/Contacts'
import { Hamburger } from '../Hamburger/Hamburger'
import { HeaderNavigation } from './HeaderNavigation'
import { MobileMenu } from '../MobileMenu/MobileMenu'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className='text-xl'>
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
            <Hamburger
              open={open}
              onToggleAction={() => setOpen(!open)}
            />
          </div>
        </div>
      </header>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  )
}
