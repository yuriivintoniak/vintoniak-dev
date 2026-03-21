import { ProjectsCarousel } from '@/components/Projects/ProjectsCarousel'

export default function Projects() {
  return (
    <section className='w-full py-20'>
      <div className='flex flex-col gap-10 2xs:gap-14'>
        <h2 className='text-[30px] 2xs:text-[44px] sm:text-[56px] tracking-[-1px] font-bold'>
          My <span className='text-text-accent'>Projects.</span>
        </h2>
        <ProjectsCarousel />
      </div>
    </section>
  )
}
