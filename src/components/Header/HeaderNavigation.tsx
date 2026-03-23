'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { headerNavigation } from './constants'

export function HeaderNavigation() {
  const pathname = usePathname()

  return (
    <>
      {headerNavigation.map((navItem) => (
        <Link
          key={navItem.href}
          href={navItem.href}
          className={`mx-10
            ${pathname === navItem.href ? 'text-text-accent' : ''}`
          }
        >
          {navItem.label}
        </Link>
      ))}
    </>
  )
}
