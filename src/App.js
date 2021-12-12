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


function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Homepage />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
