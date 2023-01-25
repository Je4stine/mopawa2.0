
import './App.css';
import Homepage from './App/Components/Screens/Homepage';

import Product from './App/Components/Screens/Products';

import FAQs from './App/Components/Screens/FAQs';

import About from './App/Components/Screens/About';

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route path='/' element={<Homepage/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/products' element={<Product/>}/>
          <Route path='/faqs' element={<FAQs/>}/>
        </Routes>
      </Router>
    </div>
  
  );
}

export default App;
