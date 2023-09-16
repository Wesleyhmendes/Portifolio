import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import './App.css';
import Contact from './Pages/Contact';
import TrybeTunesPage from './Pages/Projects/TrybeTunes';
import TrybeWallet from './Pages/Projects/TrybeWallet';
import CodeStore from './Pages/Projects/CodeStore';

function App() {
  return (
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/contact" element={ <Contact /> } />
      <Route path="/projects/trybe-tunes" element={ <TrybeTunesPage /> } />
      <Route path="/projects/trybe-wallet" element={ <TrybeWallet /> } />
      <Route path="/projects/code-store" element={ <CodeStore /> } />
    </Routes>
  );
}

export default App;
