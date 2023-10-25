import Home from './components/Home';
import Catalog from './components/Catalog';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';


export default function Dashboard() {
  return (
    <>
      <div>
        <Home></Home>
        <Catalog></Catalog>
        <Services></Services>
        <About></About>
        <Contact></Contact>
        
      </div>
    </>
  );
}