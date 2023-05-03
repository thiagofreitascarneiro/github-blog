import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/defaults'

import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        
    </ThemeProvider>
   
  )
}

export default App
