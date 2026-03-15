import { useEffect, useRef } from 'react'
import { useRouter } from '@tanstack/react-router'

/**
 * Hook that tracks which section is currently in view and syncs with Router hash.
 * @param sectionIds - list of section IDs to observe (without the #)
 * @param containerId - optional ID of the scroll container
 */
export function useActiveSection(sectionIds: string[], containerId?: string) {
  const router = useRouter()
  const isNavigatingRef = useRef(false)

  useEffect(() => {
    const container = containerId ? document.getElementById(containerId) : window
    if (!container) return

    const handleScroll = () => {
      // If we are currently navigating via a link click, don't sync back to hash
      // to avoid jitter and "fighting" with the router navigation
      if (isNavigatingRef.current) return

      let currentSection = ''
      const containerTop = container instanceof HTMLElement ? container.getBoundingClientRect().top : 0
      const scrollThreshold = 150

      for (const id of sectionIds) {
        const element = document.getElementById(id)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top - containerTop <= scrollThreshold && rect.bottom - containerTop > scrollThreshold) {
            currentSection = id
            break
          }
        }
      }

      if (currentSection) {
        // Sync with router hash without adding to history if possible
        router.navigate({ 
          hash: currentSection, 
          replace: true,
          // Use 'retained' to stay on the same route if needed, 
          // although since we are on the home page '/' it works fine
        })
      }
    }

    container.addEventListener('scroll', handleScroll, { passive: true })
    const timer = setTimeout(handleScroll, 100)

    return () => {
      container.removeEventListener('scroll', handleScroll)
      clearTimeout(timer)
    }
  }, [sectionIds, containerId, router])

  // We return a small helper to temporarily disable syncing during manual navigation
  // but for hash navigation, the router handles it well enough.
}
