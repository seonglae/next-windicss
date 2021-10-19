import React from 'react'
import { IoSunnyOutline, IoMoonSharp } from 'react-icons/io5'

const Footer: React.FC<{
  isDarkMode: boolean
  toggleDarkMode: () => void
}> = ({ isDarkMode, toggleDarkMode }) => {
  const [hasMounted, setHasMounted] = React.useState(false)
  const toggleDarkModeCb = React.useCallback(
    e => {
      e.preventDefault()
      toggleDarkMode()
    },
    [toggleDarkMode]
  )

  React.useEffect(() => setHasMounted(true), [])

  return (
    <footer
      className="flex items-center"
      m="x-auto t-auto b-0"
      p="2"
      w="full max-11/12"
      justify="between"
      flex="row <sm:col">
      <div select="none" p="2" text="xs" order="sm:1 <sm:2">
        Copyright 2021 Seonglae Cho
      </div>
      {hasMounted ? (
        <div select="none" order="sm:2 <sm:1">
          <a
            text="current hover:blue-500 3xl"
            onClick={toggleDarkModeCb}
            title="Tottle dark mode"
            m="last-of-type:r-0"
            cursor="pointer"
            p="1"
            className="inline-flex"
            transition="colors">
            {isDarkMode ? <IoMoonSharp /> : <IoSunnyOutline />}
          </a>
        </div>
      ) : null}
    </footer>
  )
}

export default Footer
