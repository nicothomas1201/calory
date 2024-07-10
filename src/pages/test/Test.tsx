import styles from '@/styles/titles.module.css'

import { Button, Flex, Input, InputProps } from 'antd'

import { createMistral } from '@ai-sdk/mistral'
import { generateText } from 'ai'
import { MouseEventHandler, useState } from 'react'

export function Test() {
  const [prompt, setPropmt] = useState<string>('')
  const [text, setText] = useState<string>('')

  const mistral = createMistral({
    apiKey: '',
  })

  const handleChange: InputProps['onChange'] = (value) => {
    setPropmt(value.target.value)
  }

  const handleClick: MouseEventHandler = async () => {
    if (prompt === '') return

    const { text } = await generateText({
      model: mistral('mistral-large-latest'),
      prompt,
    })

    setText(text)
  }

  return (
    <Flex
      align="center"
      justify="center"
      style={{ width: '100vw', height: '100vh' }}
    >
      <Flex
        gap="large"
        align="center"
        justify="center"
        style={{ width: '800px' }}
      >
        <Flex vertical align="center" justify="center" gap="small">
          <h1 className={`${styles.title} ${styles.black}`}>Send something</h1>
          <Input
            size="large"
            type="text"
            onChange={handleChange}
            style={{ width: '350px' }}
          />
          <Button onClick={handleClick} size="large" type="primary">
            Send
          </Button>
        </Flex>

        {text !== '' ? (
          <div>
            <p className={styles.body1}>{text}</p>
          </div>
        ) : null}
      </Flex>
    </Flex>
  )
}
