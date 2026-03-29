import { Globe } from './Globe'
import { stackData } from './stackData'

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
      <div className='flex justify-between pt-16'>
        <div className='max-w-125'>
          <h2 className='text-[22px] font-bold mb-4'>
            My Stack<span className='text-text-accent'>.</span>
          </h2>
          <div className='h-75 bg-[#B8B8B8] rounded-[20px]'>
            <div className='h-full overflow-hidden flex flex-col justify-center gap-7'>
              {stackData.map((category) => (
                <div key={category.title} className="overflow-hidden flex gap-4">
                  {[1, 2].map((i) => (
                    <div key={i} className="animate-marquee flex gap-4">
                      {category.items.map((item, j) => (
                        <span
                          key={j}
                          className='text-[#e6e6e6] bg-[#1a1a1a] py-3 px-7 rounded-xl whitespace-nowrap'
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
        <Globe />
      </div>
    </div>
  )
}
