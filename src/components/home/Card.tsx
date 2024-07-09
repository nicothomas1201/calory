import styles from '@/styles/home/card.module.css'

import { Button, Flex } from 'antd'
import { FromInputs } from './FromInputs'

export function Card() {
  return (
    <div className={styles.card}>
      <form>
        <Flex vertical gap="large">
          <FromInputs />
          <Button size="large" style={{ width: '100%' }}>
            Calcular
          </Button>
        </Flex>
      </form>
    </div>
  )
}
