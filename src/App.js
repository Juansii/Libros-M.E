import './App.css';
import Libros from './componentes/Libros';
import librosData from './librosData';
import biografia from './mocks/biografia.json';
import InfoBiografica from './componentes/InfoBiografica';
import Navbar from './componentes/Navbar';
import Tapas from './componentes/Tapas';


function App() {

  return (
    <div className='contenedor-central'>
      <Navbar /> 
      <Libros libros={librosData} />
      <Tapas />
      <InfoBiografica biografia={ biografia }  /> 

    </div>
  );
}

export default App;
