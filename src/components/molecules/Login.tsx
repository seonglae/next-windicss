import React, { useRef } from 'react'

import Input from '@/components/atoms/Input'
import Button from '@/components/atoms/Button'

import { currentStore } from '@/store/current'

const Login: React.FC = () => {
  const email = useRef(null)
  const password = useRef(null)
  const login = currentStore(state => state.login)
  return (
    <>
      <form p="8" w="full">
        <Input bind={email} autoFocus m="b-4" w="full" label="Email" id="email" type="email" />
        <Input bind={password} m="b-6" w="full" label="Passwrod" id="password" type="password" />
        <footer className="flex items-center" w="full" justify="between" flex="row">
          <div />
          <Button text="Login" onClick={() => login(email.current)} />
        </footer>
      </form>
    </>
  )
}

export default Login
