import { skillsData } from './skills.data'

export function Skills() {
  return (
    <div className='w-full pt-10 sm:pt-0'>
      <h2 className='text-3xl 2xs:text-[44px] sm:text-[56px] font-bold mb-5'>
        Skills<span className='text-text-accent'>.</span>
      </h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {skillsData.map((category) => (
          <div key={category.title}>
            <h3 className='text-xl 2xs:text-2xl font-bold mb-4'>
              {category.title}
            </h3>
            <ul className='flex flex-col gap-2'>
              {category.items.map((skill) => (
                <li key={skill} className='2xs:text-lg text-text-primary'>
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}
