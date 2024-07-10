import { ConfigProvider } from 'antd'
import { Home, Test } from './pages'
import { Redirect, Route, Switch } from 'wouter'
import { UserProvider } from './context'

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
          <UserProvider>
            <Home />
          </UserProvider>
        </Route>
        <Route path="/test" component={Test} />
      </Switch>
    </ConfigProvider>
  )
}

export default App
