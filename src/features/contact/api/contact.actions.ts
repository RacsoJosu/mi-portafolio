import { createServerFn } from '@tanstack/react-start'
import type { ContactFormData } from '../schemas/contact.schema'

export const sendEmailAction = createServerFn({ method: 'POST' })
  .inputValidator((data: ContactFormData) => data)
  .handler(async (ctx) => {
    const { name, email, message } = ctx.data

    const serviceId = process.env.VITE_EMAILJS_SERVICE_ID
    const templateId = process.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.VITE_EMAILJS_PUBLIC_KEY
    const privateKey = process.env.EMAILJS_PRIVATE_KEY

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS configuration missing on server')
    }

    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        accessToken: privateKey,
        template_params: {
          name,
          email,
          message,
        },
      }),
    })

    if (!response.ok) {
      const errorText = await response.text()
      console.error('EmailJS Server Error:', errorText)
      throw new Error('Failed to send email via server')
    }

    return { success: true }
  })
