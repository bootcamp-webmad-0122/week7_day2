import './App.css';
import MoviesList from './components/MoviesList/MoviesList';
import ProjectsList from './components/ProjectsList/ProjectsList';
import SimpleList from './components/SimpleList/SimpleList';

function App() {
  return (
    <main className="App">
      <MoviesList />
      <ProjectsList />
      <SimpleList />
    </main>
  );
}

export default App;
