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
    href: "https://github.com/yuriivintoniak",
    icon: GithubIcon
  },
  {
    href: "https://www.linkedin.com/in/yuriivintoniak/",
    icon: LinkedinIcon
  }
]

export function Footer() {
  return (
    <footer className='hidden lg:block text-xl'>
      <div className='flex flex-col lg:flex-row items-end justify-between py-8'>
        <div className='flex flex-col gap-2'>
          <div className={`text-4xl text-text-accent ${comfortaa.className} font-medium leading-none`}>
            Yura
          </div>
          <div className='text-xl'>
            Built by me
          </div>
        </div>
        <div className='flex lg:flex-col gap-2'>
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Icon className='h-8 w-8' hoverEffect={false} />
            </a>
          ))}
        </div>
        <a
          href='mailto:yurivintonyak@gmail.com'
          className='text-text-accent underline'
        >
          yurivintonyak@gmail.com
        </a>
      </div>
    </footer>
  )
}
