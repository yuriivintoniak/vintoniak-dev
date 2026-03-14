import Image from 'next/image'

export default function Home() {
  return (
    <section className='w-full flex justify-between items-center'>
      <div className='flex flex-col gap-5'>
        <div>
          <p className='mb-1 text-2xl text-text-primary'>
            Hello, I'm Yurii
            <span className='ml-0.5'>👋🏻</span>
          </p>
          <h1 className='text-[90px] leading-22.5 tracking-[-3.6px] font-bold'>
            <span className='text-text-accent'>Full</span> Stack <br /> Developer
          </h1>
        </div>
        <p className='text-2xl text-text-primary'>
          I'm a full stack developer living in Ukraine, <br />
          I'll help you build amazing websites your users will like.
        </p>
        <div className='flex gap-4 font-semibold'>
          <button className='btn text-background bg-text-accent hover:bg-[#8A37F5]'>
            Contact me
          </button>
          <button className='btn border hover:text-background hover:bg-foreground'>
            View my work
          </button>
        </div>
      </div>
      <div className='inline-block p-10 rounded-full border border-text-accent/40'>
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
