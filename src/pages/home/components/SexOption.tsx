import { Flex, Select } from 'antd'
import type { SelectProps } from 'antd'
import type { OptionProps } from './props'
import { Sex } from '../models'
import { validateInputNumber } from '@/utils'
import { useFormContext } from '../context/form'

export function SexOption({ label = 'Sexo', id }: OptionProps & SelectProps) {
  const { setForm } = useFormContext()

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

    const sex = value === Sex.Man ? 'Hombre' : 'Mujer'

    setForm((prev) => ({
      ...prev,
      sex,
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
