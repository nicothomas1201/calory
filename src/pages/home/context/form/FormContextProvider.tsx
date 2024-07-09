import { useState } from 'react'
import { FormContext } from './formContext'
import { defaultForm } from './formContext'

export function FormProvider({ children }: { children: React.ReactNode }) {
  const [form, setForm] = useState<CaloryForm>(defaultForm)

  return (
    <FormContext.Provider value={{ form, setForm }}>
      {children}
    </FormContext.Provider>
  )
}
