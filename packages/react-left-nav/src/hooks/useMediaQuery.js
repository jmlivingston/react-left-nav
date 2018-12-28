import { useEffect, useState } from 'react'

function useMediaQuery(breakPoints = []) {
  const isClient = typeof window === 'object'

  breakPoints = breakPoints.sort((a, b) => b.minWidth - a.minWidth)

  function getStyle() {
    if (isClient) {
      let style = {} // breakPoints.length > 0 ? breakPoints[0].style : {}
      for (let i = 0; i < breakPoints.length; i++) {
        if (i === 0 && window.innerWidth >= breakPoints[i].minWidth) {
          style = breakPoints[i].style
          break
        } else if (window.innerWidth >= breakPoints[i].minWidth) {
          style = breakPoints[i].style
          break
        }
      }
      return style
    } else {
      return undefined
    }
  }

  const [windowSize, setWindowSize] = useState(getStyle)

  useEffect(() => {
    if (!isClient) {
      return false
    }

    function handleResize() {
      setWindowSize(getStyle())
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return windowSize
}

export default useMediaQuery
