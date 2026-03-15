import { createServerFn } from '@tanstack/react-start'
import { contactSchema, type ContactFormData } from '../schemas/contact.schema'

export const sendEmailAction = createServerFn({ method: 'POST' })
  .validator((data: ContactFormData) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    // data is already validated by the validator
    const serviceId = process.env.EMAILJS_SERVICE_ID
    const templateId = process.env.EMAILJS_TEMPLATE_ID
    const publicKey = process.env.EMAILJS_PUBLIC_KEY
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
          from_name: data.name,
          from_email: data.email,
          message: data.message,
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
