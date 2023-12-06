import './App.css';
import BarraLateral from './componentes/BarraLateral';
import Libros from './componentes/Libros';
import librosData from './mocks/libros.json';
import biografia from './mocks/bibliografia.json';
import InfoBiografica from './componentes/InfoBiografica';
import Navbar from './componentes/navbar';
import Footer from './componentes/Footer';
function App() {

  return (
    <div className='contenedor-central'>
      <Navbar />
      {/* <BarraLateral 
      /> */}
      <Libros libros={librosData} />
      <Footer />
    </div>
  );
}

export default App;