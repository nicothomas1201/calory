import { ConfigProvider, Flex, theme } from 'antd'
import { WeightOption, SexOption, AgeOption, HeightOption } from '.'

export function FromInputs() {
  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Flex vertical gap="large">
        <WeightOption />
        <HeightOption />
        <AgeOption />
        <SexOption />
      </Flex>
    </ConfigProvider>
  )
}
