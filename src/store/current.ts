import create from 'zustand'
import { persist } from 'zustand/middleware'

type User = {
  email: string
}

type CurrentState = {
  user: User
  login: (email: string) => void
}

export const currentStore = create<CurrentState>(
  persist(
    (set, get) => ({
      user: null,
      login: email => !get().user && set({ user: { email } }),
    }),
    { name: 'current' }
  )
)
