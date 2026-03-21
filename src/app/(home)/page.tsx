import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full pb-40 lg:pb-0 flex flex-col-reverse lg:flex-row items-center justify-between gap-10 lg:gap-5'>
      <div className='flex flex-col gap-5'>
        <div>
          <p className='mb-1 text-xl xs:text-2xl text-text-primary'>
            Hello, I'm Yurii
            <span className='ml-0.5'>👋🏻</span>
          </p>
          <h1 className='text-5xl 2xs:text-6xl xs:text-7xl sm:text-[90px] sm:leading-22.5 tracking-[-2px] font-bold'>
            <span className='text-text-accent'>Full</span> Stack <br /> Developer
          </h1>
        </div>
        <p className='text-xl xs:text-2xl text-text-primary'>
          I'm a full stack developer living in Ukraine, {" "}
          <br className='hidden xs:inline' />
          I'll help you build websites your users will like.
        </p>
        <div className='flex flex-col xs:flex-row gap-4 font-semibold'>
          <button className='btn text-background bg-text-accent hover:bg-[#8A37F5]'>
            Contact me
          </button>
          <Link href='/projects' className='btn border hover:text-background hover:bg-foreground'>
            View my work
          </Link>
        </div>
      </div>
      <div className='inline-block p-0 sm:p-10 rounded-full border border-text-accent/40'>
        <Image
          src='/avatar.jpg'
          width={380}
          height={380}
          className='avatar'
          alt='Picture of the author'
        />
      </div>
    </section>
  )
}
