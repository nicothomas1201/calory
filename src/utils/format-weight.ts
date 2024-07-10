import { EnumWeight } from '@/models'

// unit es la unidad al que queremos convertir el peso
export function formatWeight(weight: number, unit: EnumWeight): number {
  // lo pasamos a kilogramos
  if (unit === EnumWeight.kg) {
    return weight * 2.20462
  }

  // lo pasamos a libras
  if (unit === EnumWeight.lb) {
    return weight / 2.20462
  }

  return 0
}
