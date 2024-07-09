type Weight = {
  cuantity: number
  unit: 'kg' | 'lb'
}

type CaloryForm = {
  weight: Weight
  height: number
  age: number
  sex: 'Hombre' | 'Mujer'
}

type Context = {
  form: CaloryForm
  setForm: React.Dispatch<React.SetStateAction<CaloryForm>>
}
