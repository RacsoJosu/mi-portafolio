import { Mail, MapPin, Phone } from 'lucide-react'

export function ContactInfo() {
  return (
    <div>
      <p className="text-gray-400 mb-8">
        ¿Tienes un proyecto en mente? ¿Buscas un desarrollador full stack?
        Estoy disponible para nuevos proyectos y colaboraciones.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Mail className="text-[#4D49FC]" size={20} aria-hidden="true" />
          <span className="text-gray-400">contact@example.com</span>
        </div>
        <div className="flex items-center gap-4">
          <Phone className="text-[#4D49FC]" size={20} aria-hidden="true" />
          <span className="text-gray-400">+1 234 567 890</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="text-[#4D49FC]" size={20} aria-hidden="true" />
          <span className="text-gray-400">Ciudad, País</span>
        </div>
      </div>
    </div>
  )
}
