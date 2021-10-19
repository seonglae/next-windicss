import React from 'react'

const Middle: React.FC = ({ children }) => {
  return (
    <main className="container flex items-center" p="x-5" justify="center">
      {children}
    </main>
  )
}

export default Middle
