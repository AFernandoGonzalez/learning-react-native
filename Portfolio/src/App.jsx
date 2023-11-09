
import './App.css'
import { Header } from './components/Header.jsx'

const logo = 'logo'

function App() {


  return (
   <div className='App'>
      <Header />
      <Header logo={logo} />
   </div>
  )
}

export default App
