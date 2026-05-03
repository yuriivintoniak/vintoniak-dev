import { ICONS, SOCIALS } from './constants'

export function ContactLinks() {
  return (
    <div className='flex-1 overflow-x-hidden'>
      <div className='hidden lg:flex flex-col'>
        <h3 className='text-3xl text-text-accent leading-normal'>
          Looking for job opportunities.
        </h3>
        <p className='text-xl text-text-primary'>
          My inbox is always open for collaboration or interviews.
        </p>
      </div>
      <div className='flex flex-col gap-2 lg:gap-4 mt-0 lg:mt-16 lg:text-xl text-text-primary'>
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.icon]

          return (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit flex items-center gap-2 lg:gap-3'
            >
              <Icon className='h-8 w-8 lg:h-10 lg:w-10' />
              <span>{social.nickname}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
