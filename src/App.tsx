import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/themes/default"
import { HashRouter } from "react-router-dom"
import { Router } from "./Router"
import { CoffeesContextsProvider } from "./contexts/CoffeesContexts"
import { ButtonsActivesContextsProvider } from "./contexts/ButtonsActivesContexts"
import { InformationsPeopleContextProvider } from "./contexts/InformationsPeopleContexsts"

function App() {
  
  return (
    <ThemeProvider theme={defaultTheme}>
      < HashRouter>
        <CoffeesContextsProvider>
          <ButtonsActivesContextsProvider>
            <InformationsPeopleContextProvider>
              <Router />
            </InformationsPeopleContextProvider>
           
          </ButtonsActivesContextsProvider>
        </CoffeesContextsProvider>
      </ HashRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

export default App
