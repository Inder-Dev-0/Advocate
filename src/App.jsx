import { Outlet } from 'react-router';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar'

function App() {
  return <>
      <Navbar />
      <Outlet />
      <Footer />
  </>
}

export default App;