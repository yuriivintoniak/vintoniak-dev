'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ContactsForm() {
  const {
    register,
    handleSubmit,
    formState: { errors: formErrors }
  } = useForm<ContactFormValues>({
    shouldFocusError: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = (data: ContactFormValues) => {
    setIsLoading(true)
    console.log(data)
    setTimeout(() => {
      alert('Message sent successfully!')
      setIsLoading(false)
    }, 5000)
  }

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className='max-w-152 flex-1 flex flex-col gap-8'
    >
      <label className='label'>
        Name
        <input
          type='text'
          {...register('name', { required: true })}
          className={`input ${formErrors.name ? 'input-error' : ''}`}
        />
      </label>
      <label className='label'>
        Email
        <input
          type='email'
          {...register('email', { required: true })}
          className={`input ${formErrors.email ? 'input-error' : ''}`}
        />
      </label>
      <label className='label'>
        Message
        <textarea
          {...register('message', { required: true })}
          className={`textarea [scrollbar-width:none] ${
            formErrors.message ? 'textarea-error' : ''
          }`}
        />
      </label>
      <button
        type='submit'
        className='submit-btn'
        disabled={isLoading}
      >
        {isLoading ? (
          <span className='spinner' />
        ) : (
          <span>Submit</span>
        )}
      </button>
    </form>
  )
}
