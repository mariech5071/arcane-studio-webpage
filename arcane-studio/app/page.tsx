import Home from './Home';
import Catalog from './Catalog';
import Services from './Services';
import About from './About';
import Contact from './Contact';


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