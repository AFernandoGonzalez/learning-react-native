
import './App.css'
import { Header } from './components/Header.jsx'
import logo from './assets/react.svg'
import { Profile } from './components/Profile.jsx'
import { Routes, Route, } from 'react-router-dom'

// const USERNAME_API_ENDPOINT = 'https://api.github.com/users/AFernandoGonzalez'

function App() {

  return (
    <div className='App'>
      <Header logo={logo} />
      <Routes>
        <Route path='/' element={<Profile username="AFernandoGonzalez" />} />
      </Routes>

    </div>
  )
}

export default App



