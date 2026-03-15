import { useContactForm } from '../../hooks/useContactForm'

export function ContactForm() {
  const { form, isSending, isSuccess, isError } = useContactForm()

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        e.stopPropagation()
        form.handleSubmit()
      }}
      className="space-y-6"
    >
      <form.Field
        name="name"
        children={(field) => (
          <div className="space-y-1">
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="text"
              placeholder="Nombre"
              className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs px-1">
                {field.state.meta.errors.map((err: any) =>
                  typeof err === 'object' ? err.message : String(err)
                ).join(', ')}
              </p>
            )}
          </div>
        )}
      />

      <form.Field
        name="email"
        children={(field) => (
          <div className="space-y-1">
            <input
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              type="email"
              placeholder="Email"
              className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs px-1">
                {field.state.meta.errors.map((err: any) =>
                  typeof err === 'object' ? err.message : String(err)
                ).join(', ')}
              </p>
            )}
          </div>
        )}
      />

      <form.Field
        name="message"
        children={(field) => (
          <div className="space-y-1">
            <textarea
              name={field.name}
              value={field.state.value}
              onBlur={field.handleBlur}
              onChange={(e) => field.handleChange(e.target.value)}
              placeholder="Mensaje"
              rows={5}
              className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
            />
            {field.state.meta.errors.length > 0 && (
              <p className="text-red-500 text-xs px-1">
                {field.state.meta.errors.map((err: any) =>
                  typeof err === 'object' ? err.message : String(err)
                ).join(', ')}
              </p>
            )}
          </div>
        )}
      />

      <form.Subscribe
        selector={(state) => [state.canSubmit]}
        children={([canSubmit]) => (
          <button
            type="submit"
            disabled={!canSubmit || isSending}
            className="w-full bg-primary/70 text-white px-8 py-4 hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 font-semibold rounded-lg shadow-lg"
          >
            {isSending ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Enviando...
              </>
            ) : (
              'Enviar mensaje'
            )}
          </button>
        )}
      />

      {isSuccess && (
        <div className="bg-green-500/10 border border-green-500/20 p-4 rounded-lg">
          <p className="text-green-500 text-sm text-center font-medium">
            ¡Mensaje enviado con éxito! Me pondré en contacto pronto.
          </p>
        </div>
      )}
      {isError && (
        <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-lg">
          <p className="text-red-500 text-sm text-center font-medium">
            Hubo un error al enviar el mensaje. Intenta de nuevo.
          </p>
        </div>
      )}
    </form>
  )
}
