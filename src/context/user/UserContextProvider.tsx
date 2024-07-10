import { useState } from 'react'
import { UserContext, defaultUser } from './user.context'
import type { UserData } from '@/models'

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<UserData>(defaultUser)

  return (
    <UserContext.Provider value={{ form, setForm }}>
      {children}
    </UserContext.Provider>
  )
}
