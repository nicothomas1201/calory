import { Flex, InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import type { OptionProps } from './props'

// HeightOption
export function AgeOption({
  label = 'Edad',
  id,
  min,
  max,
}: OptionProps & InputNumberProps) {
  return (
    <Flex vertical gap="small">
      <label htmlFor={id}>{label}</label>
      <InputNumber id={id} min={min} max={max} style={{ width: '100%' }} />
    </Flex>
  )
}
