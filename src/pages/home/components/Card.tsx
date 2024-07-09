import styles from '../styles/card.module.css'

import { Button, Flex } from 'antd'
import { FromInputs } from './FromInputs'

import { useFormContext } from '../context/form'

export function Card() {
  // enviar el formulario

  const { form } = useFormContext()

  // TODO: Hacer que se envie cuando se hace enter tambien
  const submit = () => {
    console.log(form)
  }

  return (
    <div className={styles.card}>
      <form>
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
