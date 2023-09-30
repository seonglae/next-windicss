import React from 'react'
import { NextSeo } from 'next-seo'
import useDarkMode from 'use-dark-mode'

import Footer from '@/components/organisms/Footer'
import Middle from '@/components/organisms/Middle'
import Card from '@/components/atoms/Card'
import Login from '@/components/molecules/Login'
import pkg from '~/package.json'

export const LoginPage: React.FC = () => {
  const darkMode = useDarkMode(false, {
    classNameDark: 'dark',
    classNameLight: 'light',
    onChange: isDark => {
      if (isDark) {
        document.documentElement.classList.remove('light')
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        document.documentElement.classList.add('light')
      }
    },
  })

  return (
    <div text="dark:white" bg="white dark:dark-500" w="screen" h="screen" max-w="full" max-h="full" transition="colors">
      <NextSeo title={pkg.displayName} titleTemplate="%s" />
      <div className="flex absolute inset-0" justify="center">
        <Middle>
          <Card w="sm">
            <Login />
          </Card>
        </Middle>
      </div>
      <div className="absolute bottom-0" w="full">
        <Footer isDarkMode={darkMode.value} toggleDarkMode={darkMode.toggle} />
      </div>
    </div>
  )
}

export default LoginPage
