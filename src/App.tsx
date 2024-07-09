import { ConfigProvider } from 'antd'
import { Home } from './pages'

function App() {
  return (
    <ConfigProvider
      theme={{
        // algorithm: theme.darkAlgorithm,
        components: {
          Button: {
            fontWeight: 600,
            fontFamily: 'Poppins',
          },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  )
}

export default App
