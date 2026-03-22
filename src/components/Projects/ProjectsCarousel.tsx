'use client'
import Marquee from 'react-fast-marquee'
import { projects } from './projects.data'

export function ProjectsCarousel() {
  return (
    <Marquee speed={50} pauseOnHover gradient={true} gradientColor='var(--background)' gradientWidth={100}>
      {projects.map((project) => (
        <div
          key={project.id}
          className='mx-4 w-64 h-40 sm:w-80 sm:h-52 text-text-primary 2xs:text-lg border border-text-accent flex items-center justify-center'
        >
          {project.title}
        </div>
      ))}
    </Marquee>
  )
}
