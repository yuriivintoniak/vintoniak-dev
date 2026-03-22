import { projects } from './projects.data'

export function ProjectsCarousel() {
  return (
    <div className='w-auto' style={{
      mask: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent 100%)'
    }}>
      <div className='overflow-hidden flex'>
        {[1, 2].map((index) => (
          <div key={index} className='animate-marquee flex'>
            {projects.map((project) => (
              <div
                key={project.id}
                className='mx-4 w-64 h-40 sm:w-80 sm:h-52 text-text-primary 2xs:text-lg border border-text-accent flex items-center justify-center'
              >
                {project.title}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}
