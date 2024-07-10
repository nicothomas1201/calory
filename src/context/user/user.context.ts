import { createContext } from 'react'
import { EnumHeight, EnumSex, EnumWeight, UserData } from '@/models'

type Context = {
  form: UserData
  setForm: React.Dispatch<React.SetStateAction<UserData>>
}

export const defaultUser: UserData = {
  weight: {
    cuantity: 0,
    unit: EnumWeight.kg,
  },
  height: {
    cuantity: 0,
    unit: EnumHeight.cm,
  },
  age: 0,
  sex: EnumSex.Man,
}

export const UserContext = createContext<Context>({
  form: defaultUser,
  setForm: () => {},
})
