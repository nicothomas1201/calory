import { ConfigProvider, Flex, theme } from 'antd'
import { WeightOption, SexOption, AgeOption, HeightOption } from '.'

export function FromInputs() {
  // cada opcion se encarga de obtener sus datos
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
