import { InputNumber, Select, Space } from 'antd'
import type { InputNumberProps, SelectProps } from 'antd'

type Props = {
  id: string
  min: number
  max: number
  onChangeNumber: InputNumberProps['onChange']
  onChangeSelect: SelectProps['onChange']
}

export function WeightInput({
  id,
  min,
  max,
  onChangeNumber,
  onChangeSelect,
}: Props) {
  const options = [
    {
      label: 'kg',
      value: 1,
    },
    {
      label: 'lb',
      value: 2,
    },
  ]

  return (
    <Space.Compact>
      <InputNumber
        onChange={onChangeNumber}
        id={id}
        min={min}
        max={max}
        style={{ width: '85%' }}
      />
      <Select
        options={options}
        onChange={onChangeSelect}
        defaultValue={1}
        style={{ width: '25%' }}
      />
    </Space.Compact>
  )
}
