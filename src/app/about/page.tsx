import { Skills } from '@/components/About/Skills/Skills'
import { MyStory } from '@/components/About/MyStory/MyStory'
import { AboutHero } from '@/components/About/AboutHero/AboutHero'

export default function About() {
  return (
    <section className='w-full'>
      <div className='pt-20 min-h-[calc(100vh-80px)]'>
        <AboutHero />
      </div>
      <div className='min-h-screen pt-10 lg:pt-0 flex items-center'>
        <MyStory />
      </div>
      <div className='sm:min-h-screen flex items-center'>
        <Skills />
      </div>
    </section>
  )
}
