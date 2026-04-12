import { GithubIcon } from './icons/GithubIcon'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { MailIcon } from './icons/MailIcon'

export const ICONS = {
  github: GithubIcon,
  linkedin: LinkedinIcon,
  mail: MailIcon
} as const

type SVGIcon = keyof typeof ICONS

interface Social {
  name: string
  url: string
  nickname: string
  icon: SVGIcon
}

export const SOCIALS: Social[] = [
  {
    name: 'GitHub',
    url: '',
    nickname: 'yuriivintoniak',
    icon: 'github'
  },
  {
    name: 'LinkedIn',
    url: '',
    nickname: 'Yurii Vintoniak',
    icon: 'linkedin'
  },
  {
    name: 'Email',
    url: '',
    nickname: 'yurivintonyak@gmail.com',
    icon: 'mail'
  }
]
