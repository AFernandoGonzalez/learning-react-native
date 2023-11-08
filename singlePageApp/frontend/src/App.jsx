
import './App.css'
import { List } from './components/List'

const App = () => {


  return (
    <main>
      <nav className='navbar sticky-top navbar-light
 bg-dark'>
         <h1 className='navbar-brand text-light'>
          Rick and Morty</h1>
        </nav>
      <List />
    </main>
  )
}

export default App
