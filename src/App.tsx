import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { HashRouter } from "react-router-dom"
import { Router } from "./Router"
import { CoffeesContextsProvider } from "./contexts/CoffeesContexts"
import { ButtonsActivesContextsProvider } from "./contexts/ButtonsActivesContexts"

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      < HashRouter>
        <CoffeesContextsProvider>
          L<ButtonsActivesContextsProvider>
            <Router />
          </ButtonsActivesContextsProvider>
        </CoffeesContextsProvider>
      </ HashRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
