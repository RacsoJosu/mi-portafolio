export function ContactForm() {
  return (
    <form className="space-y-4">
      <input
        type="text"
        placeholder="Nombre"
        name="name"
        className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
      />
      <input
        type="email"
        placeholder="Email"
        name="email"
        className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors"
      />
      <textarea
        placeholder="Mensaje"
        name="message"
        rows={5}
        className="w-full bg-[#1a1a1a] border border-[#1a1a1a] text-white px-4 py-3 focus:border-primary focus:outline-none transition-colors resize-none"
      />
      <button
        type="submit"
        className="w-full bg-primary/70 text-white px-8 py-3 hover:bg-primary/90 transition-colors"
      >
        Enviar mensaje
      </button>
    </form>
  )
}
