import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Nav } from './components/Nav'
import { Home } from './components/Home';
import { About } from './components/pages/About';
import { Services } from './components/pages/Services';
import { Prices } from './components/pages/Prices';


function App() {

  const [menuMobileActivated, setMenuMobileActivated] = useState(false);

  function menuActivated() {
     setMenuMobileActivated(true);
  }

  function closeMenuMobile() {
    setMenuMobileActivated(false)
  }

  return (
    <div className="App">
          
     <Router>
      <Nav
        active={menuMobileActivated}
        activateMenu={menuActivated}
        closeMenu={closeMenuMobile}
       />
         <Routes>
          <Route path='/' element={<Home />} />
           <Route path='/about' element={<About />}/>
           <Route path='/services' element={<Services />}/>
           <Route path='/price' element={<Prices />}/>
         </Routes>
      </Router>

     
    </div>
  )
}

export default App