import './Header.css'
import { Link } from './Link.jsx'

export const Header = ({ logo }) => {

    return (
        <header>
            <img src={logo} alt="logo" />
            <p>Edit <code>src/App.js</code> and save to
                reload. </p>
            <a
                className='App-link'
                href='https://reactjs.org'
                target='_blank'
                rel='noopener noreferrer'
            >
                Learn React
            </a>
            <Link
                url='https://reactjs.org'
                title='Lear React'
            />
        </header>
    )
}

