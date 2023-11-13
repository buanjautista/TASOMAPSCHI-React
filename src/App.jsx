import { MainFrame } from './components/MainFrame'
import { LampsProvider } from './contexts/LampContext.jsx'
import './App.css'

function App() {
  return (
    <>
      <header>
        <h1>TASOMAPSCHI</h1>
      </header>
      <LampsProvider>
        <MainFrame className="main-frame"/>
      </LampsProvider>
    </>
  );
}

export default App
