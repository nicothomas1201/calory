import { Flex, InputNumberProps, SelectProps } from 'antd'
import type { OptionProps } from './props'
import { SelectNumberInput } from './SelectNumberInput'
import { useUserContext } from '@/context'
import { validateInputNumber } from '@/utils'
import { EnumWeight } from '@/models'

export function WeightOption({ label = 'Peso' }: OptionProps) {
  const { setForm } = useUserContext()

  const options = [
    {
      label: 'kg',
      value: EnumWeight.kg,
    },
    {
      label: 'lb',
      value: EnumWeight.lb,
    },
  ]

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

    setForm((prev) => ({
      ...prev,
      weight: {
        cuantity: prev.weight.cuantity,
        unit: value,
      },
    }))
  }

  return (
    <Flex vertical gap="small">
      <label htmlFor="weight">{label}</label>
      <SelectNumberInput
        id="weight"
        options={options}
        min={0}
        max={999}
        onChangeNumber={onChangeWeight}
        onChangeSelect={onChangeSelect}
      />
    </Flex>
  )
}
