
import Footer from './components/Footer';
import Navbar from './components/Navbar';

// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import Offerte from './pages/Offerte'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar className="sticky"/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default App
