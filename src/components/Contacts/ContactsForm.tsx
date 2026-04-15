export function ContactsForm() {
  return (
    <form className='max-w-152 flex-1 flex flex-col gap-8'>
      <label className='label'>
        Name
        <input
          type='text'
          className='input'
        />
      </label>
      <label className='label'>
        Email
        <input
          type='email'
          className='input'
        />
      </label>
      <label className='label'>
        Message
        <textarea
          className='textarea [scrollbar-width:none]'
        />
      </label>
      <button className='submit-btn'>
        Submit
      </button>
    </form>
  )
}
