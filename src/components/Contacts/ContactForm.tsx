'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'

export type ContactFormValues = {
  name: string
  email: string
  message: string
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors: formErrors }
  } = useForm<ContactFormValues>({
    shouldFocusError: false,
  })

  const [isLoading, setIsLoading] = useState(false)

  const sendEmail = async (data: ContactFormValues) => {
    setIsLoading(true)

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: '9745fa71-8031-4a27-9266-8947bb173c20',
          name: data.name,
          email: data.email,
          message: data.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        alert('Message sent successfully!')
        reset()
      } else {
        alert('Something went wrong')
      }
    } catch (error) {
      alert('Request failed')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className='max-w-160 flex-1 flex flex-col gap-2 lg:gap-8'
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
