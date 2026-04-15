import { ICONS, SOCIALS } from './constants'

export function ContactsLinks() {
  return (
    <div className='flex-1'>
      <h3 className='text-3xl text-text-accent leading-normal'>
        Looking for job opportunities.
      </h3>
      <p className='text-xl text-text-primary'>
        My inbox is always open for collaboration or interviews.
      </p>
      <div className='flex flex-col gap-4 mt-16 text-xl text-text-primary'>
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.icon]

          return (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='w-fit flex items-center gap-3'
            >
              <Icon />
              <span>{social.nickname}</span>
            </a>
          )
        })}
      </div>
    </div>
  )
}
