import Homepage from './pages/homepage'
import Calculationpage from './pages/calculationpage'

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
import Construction from './pages/construction';
import ScrollToTop from "./components/scrolltotop";
import Categorydata from "./pages/categorydata";





function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, [])
  return (
    <Router>
      <ScrollToTop>
        <div className="App">
          <Routes>
            <Route exact path='/' element={<Homepage />}></Route>
            <Route exact path='/architecture' element={<Architecture />}></Route>
            <Route exact path='/construction' element={<Construction />}></Route>
            <Route exact path='/calculation' element={<Calculationpage />}></Route>
            <Route exact path='/categ' element={<Categorydata />}></Route>
          </Routes>
        </div>
      </ScrollToTop>
    </Router>
  );
}

export default App;
