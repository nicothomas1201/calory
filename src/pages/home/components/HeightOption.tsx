import { Flex } from 'antd'
import type { InputNumberProps, SelectProps } from 'antd'
import type { OptionProps } from './props'
import { useUserContext } from '@/context'
import { SelectNumberInput } from './SelectNumberInput'
import { validateInputNumber } from '@/utils'
import { EnumHeight } from '@/models'

export function HeightOption({
  label = 'Altura',
  id,
}: OptionProps & InputNumberProps) {
  const options = [
    {
      label: 'cm',
      value: EnumHeight.cm,
    },
    {
      label: 'm',
      value: EnumHeight.m,
    },
  ]

  const { setForm } = useUserContext()

  const onChangeHeight: InputNumberProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    setForm((prev) => ({
      ...prev,
      height: {
        cuantity: value as number,
        unit: prev.height.unit,
      },
    }))
  }

  const onChangeSelect: SelectProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    console.log(value)

    setForm((prev) => ({
      ...prev,
      height: {
        cuantity: prev.height.cuantity,
        unit: value,
      },
    }))
  }

  return (
    <Flex vertical gap="small">
      <label htmlFor={id}>{label}</label>
      <SelectNumberInput
        id="weight"
        options={options}
        min={0}
        max={999}
        onChangeNumber={onChangeHeight}
        onChangeSelect={onChangeSelect}
      />
    </Flex>
  )
}
