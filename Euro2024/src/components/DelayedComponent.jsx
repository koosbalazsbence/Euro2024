import React, { useState, useEffect } from "react"

const DelayedComponent = ({ children, delay }) => {
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsReady(true)
    }, delay)

    return () => clearTimeout(timer)
  }, [delay])

  return isReady ? children : null
}

export default DelayedComponent
