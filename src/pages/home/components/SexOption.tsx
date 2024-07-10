import { Flex, Select } from 'antd'
import type { SelectProps } from 'antd'
import type { OptionProps } from './props'
import { validateInputNumber } from '@/utils'
import { useUserContext } from '@/context'

export function SexOption({ label = 'Sexo', id }: OptionProps & SelectProps) {
  const { setForm } = useUserContext()

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

  const handleChange: SelectProps['onChange'] = (value) => {
    if (!validateInputNumber(value)) return

    setForm((prev) => ({
      ...prev,
      sex: value,
    }))
  }

  return (
    <Flex vertical gap="small">
      <label htmlFor={id}>{label}</label>
      <Select
        onChange={handleChange}
        defaultValue={1}
        options={options}
        id={id}
        style={{ width: '100%' }}
      />
    </Flex>
  )
}
