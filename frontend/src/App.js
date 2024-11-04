
/* import logo from './logo.svg';
import './App.css';
import FestBookingForm from './FestBookingForm';

function App() {
  return (
    <div className="App">
    <FestBookingForm></FestBookingForm>
    </div>
  );
}

export default App;
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FestBookingForm from './FestBookingForm';
import Home from './Introduction';
import Payment from './Payment';
import Confirmation from './confirmation';
import Footer from './Footer';


function App() {
  return (
    <div>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<FestBookingForm />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/confirmation" element={<Confirmation />} />
        
      </Routes>
    </Router>
    <Footer></Footer>
    </div>

  );
}

export default App;