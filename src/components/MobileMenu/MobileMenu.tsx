import Link from 'next/link'
import { cn } from '@/lib/utils'
import { useEffect } from 'react'
import { MENU_LINKS } from './menuLinks'
import { Footer } from '../Footer/Footer'
import { usePathname } from 'next/navigation'

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const pathname = usePathname()

  useEffect(() => {
    document.body.classList.toggle('menu-open', open)

    return () => {
      document.body.classList.remove('menu-open')
    }
  }, [open])

  return (
    <aside className={`aside ${open ? 'h-full' : 'h-0 overflow-hidden'}`}>
      <div className={`menu-content ${open ? 'opacity-100' : 'opacity-0'}`}>
        <div className='relative w-fit'>
          <ul className='flex flex-col gap-4 text-[26px] text-text-primary uppercase'>
            {MENU_LINKS.map((link, index) => (
              <li
                key={link.id}
                className={`from-above ${open ? '' : 'opacity-0'}`}
                style={{ '--order': index } as React.CSSProperties}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  className={cn(
                    'flex gap-2',
                    pathname === link.href && 'text-text-accent'
                  )}
                >
                  <span className='text-text-accent'>
                    {index}.
                  </span>
                  <span>{link.name}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className='menu-edge-glow' />
        </div>
        <Footer className='mt-6 block lg:hidden' />
      </div>
    </aside>
  )
}
