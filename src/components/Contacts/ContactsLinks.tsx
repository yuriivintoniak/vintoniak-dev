import { ICONS, SOCIALS } from './constants'

export function ContactLinks() {
  return (
    <div className='pl-8'>
      <h3 className='text-4xl text-text-accent'>
        I am open for job opportunities.
      </h3>
      <p className='text-2xl text-text-primary pt-2'>
        My inbox is always open for collaboration or interviews.
      </p>
      <div className='flex flex-col gap-4 mt-16 text-2xl text-text-primary'>
        {SOCIALS.map((social) => {
          const Icon = ICONS[social.icon]

          return (
            <a
              key={social.name}
              href={social.url}
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center gap-3'
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
