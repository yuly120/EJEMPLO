import miImagen7 from './assets/cardss.png';
import PropTypes from 'prop-types';

function ContenedorCards({ vista }) {
  const vistas = {
    inicio: <Inicio />,
    AcercaDe: <AcercaDe />,
    Productos: <Productos />,
    Galeria: <Galeria />,
    Contacto: <Contacto />
  };

  return (
    <div className="contenedor-principal">
      {vistas[vista] || <Inicio />}
    </div>
  );
}

function Inicio() {
  return (
    <section className="cards-full">
      <Targeta nombre="card 1" descripcion="Holiii esta es la primera card" />
      <Targeta nombre="card 2" descripcion="Holiii esta es la segunda card" />
      <Targeta nombre="card 3" descripcion="Holitii esta es la tercera card" />
      <Targeta nombre="card 4" descripcion="Holiii esta es la cuarta card" />
    </section>
  );
}



function Targeta({ nombre, descripcion }) {
  return (
    <div className="card">
      <img src={miImagen7} alt="card" />
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <a href="#">Leer más</a>
    </div>
  );
}

Targeta.propTypes = {
  nombre: PropTypes.string.isRequired,
  descripcion: PropTypes.string.isRequired
};

ContenedorCards.propTypes = {
  vista: PropTypes.string.isRequired
};

export default ContenedorCards;
