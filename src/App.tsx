import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Counter from './pages/Counter';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <HomePage /> } />
      <Route path="/counter" element={ <Counter /> } />
    </Routes>
  );
}

export default App;
