import { EnumWeight, EnumSex, EnumHeight } from '.'

export type WeightData = {
  cuantity: number
  unit: EnumWeight
}

export type HeightData = {
  cuantity: number
  unit: EnumHeight
}

export interface UserData {
  weight: WeightData
  height: HeightData
  age: number
  sex: EnumSex
}
