import { Globe } from './Globe'

export function AboutHero() {
  return (
    <div>
      <div className='flex flex-col gap-5'>
        <h2 className='text-[30px] 2xs:text-[44px] sm:text-[56px] tracking-[-1px] font-bold'>
          About me<span className='text-text-accent'>.</span>
        </h2>
        <p className='2xs:text-xl sm:text-2xl text-text-secondary border-l-8 border-text-accent pl-4'>
          Developing beautiful and functional websites is what I love doing,
          and that's why I give my all in every new challenge.
        </p>
      </div>
      <Globe />
    </div>
  )
}
