import { Flex, InputNumber } from 'antd'
import type { InputNumberProps } from 'antd'
import type { OptionProps } from './props'
import { useFormContext } from '../context/form'
import { validateInputNumber } from '@/utils'

export function HeightOption({
  label = 'Altura',
  id,
  min,
  max,
}: OptionProps & InputNumberProps) {
  const { setForm } = useFormContext()
  const handleChange: InputNumberProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    setForm((prev) => ({
      ...prev,
      height: value as number,
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
