import Link from 'next/link'

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className='py-2 text-xl text-text-primary font-semibold'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-5 md:gap-0 p-4'>
        <div className='text-foreground font-bold'>
          <Link href='/'>LucaDCZ</Link>
          <span className='text-text-accent text-2xl'>.</span>
        </div>
        <h6 className='text-center'>
          Copyright {year} {" "}
          <br className='inline 2xs:hidden' />
          © Yurii Vintoniak
        </h6>
        <h6 className='text-center'>
          Designed By {" "}
          <br className='inline 2xs:hidden' />
          <span className='text-text-accent'>Luca Da Corte</span>
        </h6>
      </div>
    </footer>
  )
}
