import Link from 'next/link'
import { MENU_LINKS } from "./menuLinks"

type MobileMenuProps = {
  open: boolean
  onClose: () => void
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  return (
    <aside className={`aside ${open ? 'h-full' : 'h-0 overflow-hidden'}`}>
      <div className={`menu-content ${open ? 'opacity-100' : 'opacity-0'}`}>
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
                className='flex gap-2'
              >
                <span className='text-text-accent'>
                  {index}.
                </span>
                <span>{link.name}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  )
}
