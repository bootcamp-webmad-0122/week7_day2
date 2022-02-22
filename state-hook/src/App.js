import { useState } from 'react';
import './App.css'
import Counter from './components/Counter/Counter';

function App() {

  const [theme, setTheme] = useState('light')

  const changeTheme = event => setTheme(event.target.value)

  return (

    <main className={`App ${theme}`}>

      <h1>Nuestra primera app de React con State!</h1>

      <Counter />

      <select onChange={changeTheme}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

    </main>
  )
}

export default App