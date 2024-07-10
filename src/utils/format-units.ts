import { EnumHeight } from '@/models'

export function formatUnits(cuantity: number, unit: EnumHeight): number {
  if (unit === EnumHeight.m) {
    return cuantity * 100
  }

  if (unit === EnumHeight.cm) {
    return cuantity / 100
  }

  return 0
}
