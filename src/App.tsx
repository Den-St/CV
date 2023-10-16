import { Normalize } from 'styled-normalize'
import { LandingPage } from './components/LandingPage'

function App() {
  document.title = 'Denis Stuenko CV';

  return <>
    <Normalize/>
    <LandingPage/>
  </>
}

export default App
