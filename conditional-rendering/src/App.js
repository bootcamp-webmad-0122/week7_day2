import { useState } from 'react';
import './App.css'
import MoviesList from './components/MoviesList/MoviesList'
import Spinner from './components/Spinner/Spinner';


function App() {

  const [isLoading, setIsLoading] = useState(false)

  if (isLoading) {           // EN CASO DE ESTAR CARGANDO, RENDERIZA EL SPINNER
    return <Spinner />
  } else {
    return (
      <main className='App'>
        <MoviesList />
      </main>
    )
  }
}

export default App;
