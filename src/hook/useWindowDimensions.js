import { useState, useEffect } from 'react'

export default function useWindowDimensions() {
  const hasWindow = typeof window !== 'undefined'

  function getWindowDimensions() {
    const widthS = hasWindow ? window.innerWidth : null
    const height = hasWindow ? window.innerHeight : null
    return {
      widthS,
      height
    }
  }

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  )

  useEffect(() => {
    if (hasWindow) {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }

      window.addEventListener('resize', handleResize)
      return () => window.removeEventListener('resize', handleResize)
    }
  }, [hasWindow])

  return windowDimensions
}
