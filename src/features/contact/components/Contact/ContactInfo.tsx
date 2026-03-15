import { Mail, MapPin } from 'lucide-react'

export function ContactInfo() {
  return (
    <div>
      <p className="text-gray-400 mb-8">
        ¿Tienes un proyecto en mente? ¿Buscas un desarrollador full stack?
        Estoy disponible para nuevos proyectos y colaboraciones.
      </p>
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <Mail className="text-primary" size={20} aria-hidden="true" />
          <span className="text-gray-400">oscarvallecillo.dev@gmail.com</span>
        </div>
        <div className="flex items-center gap-4">
          <MapPin className="text-primary" size={20} aria-hidden="true" />
          <span className="text-gray-400">Honduras</span>
        </div>
      </div>
    </div>
  )
}
