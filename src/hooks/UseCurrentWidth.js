import { useState, useEffect } from 'react'

const getWidth = () => window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth

export const useCurrentWitdh = () => {
  let [width, setWidth] = useState(0)

  useEffect(() => {
    let timeoutId = null

    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }

    window.addEventListener('resize', resizeListener)
    setWidth(getWidth())

    return () => {
      window.removeEventListener('resize', resizeListener)
    }
  }, [])

  return width
}
