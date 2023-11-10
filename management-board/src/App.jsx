import { Board } from "./components/pages/Board/Board"
import { Header } from './components/Header/Header'
import { Backlog } from "./Backlog/Backlog"

function App() {

  return (
    <main>
      <Header />
      <Board />
      <Backlog/>
    </main>
  )
}

export default App
