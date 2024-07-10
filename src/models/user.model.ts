import { EnumHeight, EnumSex, EnumWeight } from '.'
import type { UserData } from './user'

export class User implements UserData {
  weight: UserData['weight'] = {
    cuantity: 0,
    unit: 1,
  }
  height: UserData['height'] = {
    cuantity: 0,
    unit: 1,
  }
  age = 0
  sex: UserData['sex'] = 1

  constructor(form: UserData) {
    this.weight = form.weight
    this.height = form.height
    this.age = form.age
    this.sex = form.sex
  }

  public isWomen(): boolean {
    return this.sex === EnumSex.Women
  }

  public isLb(): boolean {
    return this.weight.unit === EnumWeight.lb
  }

  public isCentimeters(): boolean {
    return this.height.unit === EnumHeight.cm
  }
}
