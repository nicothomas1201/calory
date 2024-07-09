import { Flex, InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import type { OptionProps } from './props'
import { validateInputNumber } from '@/utils'
import { useFormContext } from '../context/form'

// HeightOption
export function AgeOption({
  label = 'Edad',
  id,
  min,
  max,
}: OptionProps & InputNumberProps) {
  const { setForm } = useFormContext()

  const handleChange: InputNumberProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    setForm((prev) => ({
      ...prev,
      age: value as number,
    }))
  }

  return (
    <Flex vertical gap="small">
      <label htmlFor={id}>{label}</label>
      <InputNumber
        onChange={handleChange}
        id={id}
        min={min}
        max={max}
        style={{ width: '100%' }}
      />
    </Flex>
  )
}
