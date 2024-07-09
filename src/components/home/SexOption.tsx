import { Flex, Select } from 'antd'
import type { SelectProps } from 'antd'
import type { OptionProps } from './props'

export function SexOption({ label = 'Edad', id }: OptionProps & SelectProps) {
  const options = [
    {
      label: 'Hombre',
      value: 1,
    },
    {
      label: 'Mujer',
      value: 2,
    },
  ]

  return (
    <Flex vertical gap="small">
      <label htmlFor={id}>{label}</label>
      <Select
        defaultValue={1}
        options={options}
        id={id}
        style={{ width: '100%' }}
      />
    </Flex>
  )
}
