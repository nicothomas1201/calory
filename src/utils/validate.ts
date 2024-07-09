export function validateInputNumber(value: unknown): boolean {
  if (typeof value !== 'number') return false
  if (!value) return false

  return true
}
