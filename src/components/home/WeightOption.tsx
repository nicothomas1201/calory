import { Flex } from 'antd'
import type { OptionProps } from './props'
import { WeightInput } from './WeightInput'

export function WeightOption({ label = 'Peso' }: OptionProps) {
  return (
    <Flex vertical gap="small">
      <label htmlFor="weight">{label}</label>
      <WeightInput id="weight" min={0} max={999} />
    </Flex>
  )
}
