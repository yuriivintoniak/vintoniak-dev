import { cn } from '@/lib/utils'
import { Comfortaa } from 'next/font/google'
import { GithubIcon } from '@/components/Contacts/icons/GithubIcon'
import { LinkedinIcon } from '@/components/Contacts/icons/LinkedinIcon'

const comfortaa = Comfortaa({
  display: 'swap',
  subsets: ['latin'],
  weight: ['400', '500']
})

const socialLinks = [
  {
    href: 'https://github.com/yuriivintoniak',
    icon: GithubIcon
  },
  {
    href: 'https://www.linkedin.com/in/yuriivintoniak/',
    icon: LinkedinIcon
  }
]

export function Footer({ className }: { className?: string }) {
  return (
    <footer className={cn('lg:px-4 py-8', className)}>
      <div className='flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between'>
        <div className='flex flex-col gap-4 lg:gap-2'>
          <div className={cn(
            'text-[52px] lg:text-4xl text-text-accent font-medium leading-none',
            comfortaa.className
          )}>
            Yura
          </div>
          <div className='text-lg lg:text-xl'>
            Built by me
          </div>
        </div>
        <div className='flex lg:flex-col gap-4 lg:gap-2'>
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target='_blank'
              rel='noopener noreferrer'
            >
              <Icon className='h-8 w-8' hoverEffect={false} />
            </a>
          ))}
        </div>
        <a
          href='mailto:yurivintonyak@gmail.com'
          className='text-text-accent text-lg lg:text-xl underline'
        >
          yurivintonyak@gmail.com
        </a>
      </div>
    </footer>
  )
}
