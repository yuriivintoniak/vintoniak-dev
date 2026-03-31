import { Globe } from './Globe'
import { stackData } from './stackData'
import { StarSeparator } from './StarSeparator'

export function AboutHero() {
  return (
    <div>
      <div className='flex flex-col gap-3 pb-20'>
        <h1 className='text-[48px] 2xs:text-[72px] sm:text-[90px] tracking-[-1px] font-bold'>
          About me<span className='text-text-accent'>.</span>
        </h1>
        <p className='2xs:text-xl sm:text-2xl text-text-secondary border-l-8 border-text-accent pl-4 tracking-[0.5px]'>
          Developing beautiful and functional websites is what I love doing,
          and that's why I give my all in every new challenge.
        </p>
      </div>
      <div className='flex justify-between'>
        <div>
          <h2 className='text-[22px] font-bold mb-4'>
            My Stack<span className='text-text-accent'>.</span>
          </h2>
          <div className='max-w-100 h-70 bg-[#B8B8B8] rounded-[20px] flex flex-col justify-center gap-7'>
            {stackData.map((category) => (
              <div key={category.title} className="overflow-hidden flex">
                {[1, 2].map((i) => (
                  <div
                    key={i}
                    className={`flex ${category.title === 'Backend' ? 'animate-marquee-right' : 'animate-marquee-left'}`}
                  >
                    {category.items.map((item, j) => (
                      <div key={j} className='flex items-center'>
                        <span className='mx-3 py-2 px-6 text-[#e6e6e6] bg-[#1a1a1a] rounded-xl whitespace-nowrap'>
                          {item}
                        </span>
                        <StarSeparator />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
        <Globe />
      </div>
    </div>
  )
}
