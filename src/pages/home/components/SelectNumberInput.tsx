import { InputNumber, Select, Space } from 'antd'
import type { InputNumberProps, SelectProps } from 'antd'

type Props = {
  id: string
  min: number
  max: number
  onChangeNumber: InputNumberProps['onChange']
  onChangeSelect: SelectProps['onChange']
  options: SelectProps['options']
}

export function SelectNumberInput({
  id,
  min,
  max,
  onChangeNumber,
  onChangeSelect,
  options,
}: Props) {
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
