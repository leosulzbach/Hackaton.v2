import { useState } from 'react'

import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '../src/styles/themes/default';
import { darkTheme } from '../src/styles/themes/dark';
import { GlobalStyle } from '../src/styles/global';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router/Router';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  
  // <button onClick={() => setIsDarkTheme(!isDarkTheme)}>Alterar tema</button>
  return (
    <div>
      <ThemeProvider theme={isDarkTheme ? darkTheme : defaultTheme} >
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
      <ToastContainer />
    </div>
  )
}

export default App
