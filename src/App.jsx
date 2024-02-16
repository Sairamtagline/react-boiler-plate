import './App.css'

import { ThemeProvider } from '@mui/material'
import { Provider } from 'react-redux'

import store from './store'
import theme from './theme'

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
      </Provider>
    </ThemeProvider>
  )
}

export default App
