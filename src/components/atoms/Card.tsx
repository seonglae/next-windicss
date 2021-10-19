import React from 'react'

const Card: React.FC<{ w?: string; h?: string; children: JSX.Element }> = ({ children, w, h }) => {
  return (
    <article className="flex items-center border rounded-2xl" border="gray-300 dark:gray-600" flex="col" w={w} h={h}>
      {children}
    </article>
  )
}

export default Card
