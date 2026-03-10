import * as React from 'react'

const ERROR_IMG_SRC =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgc3Ryb2tlPSIjMDAwIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBvcGFjaXR5PSIuMyIgZmlsbD0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIzLjciPjxyZWN0IHg9IjE2IiB5PSIxNiIgd2lkdGg9IjU2IiBoZWlnaHQ9IjU2IiByeD0iNiIvPjxwYXRoIGQ9Im0xNiA1OCAxNi0xOCAzMiAzMiIvPjxjaXJjbGUgY3g9IjUzIiBjeT0iMzUiIHI9IjciLz48L3N2Zz4KCg=='

type ImageContextType = {
  didError: boolean
  setDidError: React.Dispatch<React.SetStateAction<boolean>>
}

const ImageContext = React.createContext<ImageContextType | undefined>(undefined)

function useImageContext() {
  const context = React.useContext(ImageContext)
  if (!context) {
    throw new Error('Image components must be rendered within Image.Root')
  }
  return context
}

export function ImageRoot({ children }: { children: React.ReactNode }) {
  const [didError, setDidError] = React.useState(false)

  return (
    <ImageContext.Provider value={{ didError, setDidError }}>
      {children}
    </ImageContext.Provider>
  )
}

export const ImageImg = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  ({ onError, ...props }, ref) => {
    const { didError, setDidError } = useImageContext()

    if (didError) return null

    return (
      <img
        ref={ref}
        onError={(e) => {
          setDidError(true)
          if (onError) onError(e)
        }}
        {...props}
      />
    )
  }
)
ImageImg.displayName = 'ImageImg'

export const ImageFallback = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children, className, ...props }, ref) => {
    const { didError } = useImageContext()

    if (!didError) return null

    return (
      <div ref={ref} className={className} {...props}>
        {children}
      </div>
    )
  }
)
ImageFallback.displayName = 'ImageFallback'

export const ImageFallbackIcon = React.forwardRef<HTMLImageElement, React.ImgHTMLAttributes<HTMLImageElement>>(
  (props, ref) => {
    return <img ref={ref} src={ERROR_IMG_SRC} alt="Error loading image" {...props} />
  }
)
ImageFallbackIcon.displayName = 'ImageFallbackIcon'

export const Image = {
  Root: ImageRoot,
  Img: ImageImg,
  Fallback: ImageFallback,
  FallbackIcon: ImageFallbackIcon,
}
