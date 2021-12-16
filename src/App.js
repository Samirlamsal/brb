import Homepage from './pages/homepage'
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';
import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Architecture from './pages/architecture';


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
          <Route exact path='/architecture' element={<Architecture />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
