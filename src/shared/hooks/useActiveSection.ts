import { useEffect, useState } from 'react'

/**
 * Hook that tracks which section is currently in view using IntersectionObserver.
 * @param sectionIds - list of section IDs to observe (without the #)
 */
export function useActiveSection(sectionIds: string[]) {
  const [activeSection, setActiveSection] = useState<string>('')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setActiveSection(id)
          }
        },
        {
          // Trigger when the section covers at least 40% of the viewport
          threshold: 0.4,
          rootMargin: '-10% 0px -10% 0px',
        }
      )

      observer.observe(el)
      observers.push(observer)
    })

    return () => {
      observers.forEach((obs) => obs.disconnect())
    }
  }, [sectionIds])

  return activeSection
}
