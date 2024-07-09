import { Flex, InputNumberProps, SelectProps } from 'antd'
import type { OptionProps } from './props'
import { WeightInput } from './WeightInput'
import { useFormContext } from '@/pages/home/context/form'
import { Weight } from '../models/form'
import { validateInputNumber } from '@/utils'

export function WeightOption({ label = 'Peso' }: OptionProps) {
  const { setForm } = useFormContext()

  const onChangeWeight: InputNumberProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    setForm((prev) => ({
      ...prev,
      weight: {
        cuantity: value as number,
        unit: prev.weight.unit,
      },
    }))
  }

  const onChangeSelect: SelectProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    const unit = value === Weight.kg ? 'kg' : 'lb'

    setForm((prev) => ({
      ...prev,
      weight: {
        cuantity: prev.weight.cuantity,
        unit,
      },
    }))
  }

  return (
    <Flex vertical gap="small">
      <label htmlFor="weight">{label}</label>
      <WeightInput
        id="weight"
        min={0}
        max={999}
        onChangeNumber={onChangeWeight}
        onChangeSelect={onChangeSelect}
      />
    </Flex>
  )
}
