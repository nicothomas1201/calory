import styles from '@/styles/titles.module.css'

import { Flex } from 'antd'

export function Home() {
  return (
    <Flex vertical align="center" gap="large">
      <div style={{ textAlign: 'center' }}>
        <h1 className={`${styles.title} ${styles.black}`}>Calory</h1>
        <h2 className={`${styles.subtitle} ${styles.gray}`}>
          Descubre las calorías que necesitas
        </h2>
      </div>
    </Flex>
  )
}
