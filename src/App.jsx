import { Outlet } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { StarBackground } from './components/StarBackground';
import { ThemeToggle } from './components/ThemeToggle';
import { Footer } from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <Outlet />      
      <StarBackground />
      <ThemeToggle />
      <Footer />
    </>
  );
}

export default App;
