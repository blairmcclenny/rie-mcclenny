import { useState, useEffect } from 'react'

const getWidth = () => {
  if (window !== undefined) {
    return (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth
    )
  } else {
    return null
  }
}

export const useCurrentWitdh = () => {
  let [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeoutId = null

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }

    window.addEventListener('resize', resizeListener)

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}
