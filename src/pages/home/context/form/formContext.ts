import { createContext } from 'react'

export const defaultForm: CaloryForm = {
  weight: {
    cuantity: 0,
    unit: 'kg',
  },
  height: 0,
  age: 0,
  sex: 'Hombre',
}

export const FormContext = createContext<Context>({
  form: defaultForm,
  setForm: () => {},
})
