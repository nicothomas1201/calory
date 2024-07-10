// styles
import styles from '../styles/card.module.css'

// libraries
import { KeyboardEvent } from 'react'
import { Button, Flex } from 'antd'

// models
import { EnumHeight, User } from '@/models'
import { EnumWeight } from '@/models'

// context
import { useUserContext } from '@/context'

// components
import { FromInputs } from './FromInputs'
import { formatUnits, formatWeight } from '@/utils'

export function Card() {
  const { form } = useUserContext()

  const user = new User(form)

  const getTmb = () => {
    const weight = user.isLb()
      ? formatWeight(user.weight.cuantity, EnumWeight.kg)
      : user.weight.cuantity

    const height = user.isCentimeters()
      ? user.height.cuantity
      : formatUnits(user.height.cuantity, EnumHeight.cm)

    console.log(height)

    const age = form.age

    // // TMB for women
    if (user.isWomen()) {
      return 447.6 + 9.2 * weight + 3.1 * height - 4.3 * age
    }
    // TMB form men
    return 88.36 + 13.4 * weight + 4.8 * height - 5.7 * age
  }

  const submit = () => {
    const tmb = getTmb()
    console.log(tmb)
  }

  return (
    <div className={styles.card}>
      <form
        onKeyDown={(e: KeyboardEvent) => {
          if (e.key === 'Enter') {
            e.preventDefault()
            submit()
          }
        }}
      >
        <Flex vertical gap="large">
          <FromInputs />
          <Button onClick={submit} size="large" style={{ width: '100%' }}>
            Calcular
          </Button>
        </Flex>
      </form>
    </div>
  )
}
