
function Contacto() {
  return (
    <section className="seccion">
      <h2>Nuestros contactos</h2>
      <p>Puedes comunicarte con nosotros a través de los siguientes medios:</p>

      <table className="tabla-contacto">
        <thead>
          <tr>
            <th>Área</th>
            <th>Responsable</th>
            <th>Correo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Soporte Tecnico</td>
            <td>Alejandro Alvarez Guzman</td>
            <td>Asop@soporte.com</td>
          </tr>
          <tr>
            <td>Recursos Humanos</td>
            <td>Jacob Hernadez Herrera</td>
            <td>Rjacob@recuh.com</td>
          </tr>
          <tr>
            <td>Administración</td>
            <td>Hector Morales Soto</td>
            <td>Hector@adm.com</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
import Contacto from "./components/Contacto";
