import { InputNumber, Select, Space } from 'antd'
// import type { InputProps } from './props'
import type { InputNumberProps } from 'antd'

export function WeightInput({ id, min, max }: InputNumberProps) {
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
      <InputNumber id={id} min={min} max={max} style={{ width: '85%' }} />
      <Select options={options} defaultValue={1} style={{ width: '25%' }} />
    </Space.Compact>
  )
}
