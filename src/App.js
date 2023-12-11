import './App.css';
import BarraLateral from './componentes/BarraLateral';
import Libros from './componentes/Libros';
import librosData from './librosData';
import biografia from './biografia';
import InfoBiografica from './componentes/InfoBiografica';


function App() {

  return (
    <div className='contenedor-central'>
      <InfoBiografica biografia={ biografia }  /> 
      <BarraLateral   />
      <Libros libros={librosData} />
    </div>
  );
}

export default App;
