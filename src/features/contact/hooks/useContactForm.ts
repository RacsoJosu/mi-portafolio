import { useForm } from '@tanstack/react-form'
import { useMutation } from '@tanstack/react-query'
import { contactSchema, type ContactFormData } from '../schemas/contact.schema'
import { sendEmailAction } from '../api/contact.actions'

export function useContactForm() {
  const mutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      return await sendEmailAction({ data })
    },
  })

  const form = useForm({
    defaultValues: {
      name: '',
      email: '',
      message: '',
    } as ContactFormData,
    validators: {
      onChange: contactSchema,
    },
    onSubmit: async ({ value }) => {
      // The sendEmailAction expects { data: ContactFormData }
      await mutation.mutateAsync(value)
      form.reset()
    },
  })

  return {
    form,
    mutation,
    isSending: mutation.isPending,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  }
}
