import { ConfigProvider } from 'antd'
import { Home } from './pages'
import { Redirect, Route, Switch } from 'wouter'
import { FormProvider } from './pages/home/context/form'

function App() {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            fontWeight: 600,
            fontFamily: 'Poppins',
          },
        },
      }}
    >
      <Switch>
        <Route path="/">
          <Redirect to="/home" />
        </Route>
        <Route path="/home">
          <FormProvider>
            <Home />
          </FormProvider>
        </Route>
      </Switch>
    </ConfigProvider>
  )
}

export default App
