import { Routes, BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Message from './pages/Message';
import NotFound from './pages/NotFound';
import Success from './pages/Success';
import './styles/index.css';

function App() {
   return (
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/portfolio' element={<Portfolio />} />
            <Route path='/message' element={<Message />} />
            <Route path='/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
