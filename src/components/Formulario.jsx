import Button from "react-bootstrap/Button";
import { useState } from "react";
import Alert from "react-bootstrap/Alert";

//Estados que almacenan datos del usuario por medio de inputs
const Formulario = ({ setError, setExito }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password_1, setPasswrod_1] = useState("");
  const [password_2, setPassword_2] = useState("");
  const [errores, setErrores] = useState(false);
  const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
  const validNombre = /^([a-zA-Z]+)(\s[a-zA-Z]+)*$/;

  //Función que valida si las condiciones del formulario se cumplen para enviarlo con éxito
  const validarFormulario = (submit) => {
    //Función que evita que la página se recargue al presionar el botón de registro
    submit.preventDefault();
    //Condicional que evalúa  si el campo no esté vacío
    if (nombre === ""){
      return setErrores("Ingrese su nombre")
      //Condicional que evalúa que el nombre tenga formato válido
    } else if (!validNombre.test(nombre)) {
      return setErrores("Formato de nombre invalido ingrese solo letras");
      //Condicional que evalúa que el mail sea válido y además que el campo no esté vacío
    } else if (!validEmail.test(email) && email.length > 0) {
      return setErrores("Formato de correo no válido");
      //Condicional que evalúa que la contraseña sea mínimo 10 caracteres y además el campo no esté vacío
    } else if (password_1.length > 1 && password_1.length < 10) {
      return setErrores("La contraseña debe tener mínimo 10 caracteres");
      // Condicional que evalua los caracteres del nombre
    } else if (password_1 !== password_2) {
      return setErrores("Las contraseñas no coinciden");
    }
    //Reseteando errores al no cumplirse las condiciones de arriba
    setErrores("");
    //condicional que evalúa que los campos estén ok para enviar el formulario correctamente o mostrar error en caso de que no sea así
    if (
      nombre.length > 0 &&
      email.length > 0 &&
      password_1.length > 0 &&
      password_2.length > 0
    ) {
      setExito("¡Te has registrado con éxito!");
      setError("");
    } else {
      setError("¡Completa todos los campos!");
      setExito("");
    }
  };
  //Apartado que renderiza el formulario exportado 
  return (
    <form className="form__container" onSubmit={(e) => validarFormulario(e)}>
      <div className="form-group">
        <input
          onChange={(element) => setNombre(element.target.value)}
          value={nombre}
          type="text"
          name="nombre"
          className="form-control"
          placeholder="Nombre"
        />
        <input
          onChange={(element) => setEmail(element.target.value)}
          value={email}
          type="text"
          name="email"
          className="form-control"
          placeholder="email@ejemplo.cl"
        />
        <input
          onChange={(element) => setPasswrod_1(element.target.value)}
          value={password_1}
          type="password"
          name="password-1"
          className="form-control"
          placeholder="Contraseña"
        />
        <input
          onChange={(element) => setPassword_2(element.target.value)}
          value={password_2}
          type="password"
          name="password-2"
          className="form-control"
          placeholder="Confirmar contraseña"
        />
      </div>
      <Button type="submit" className="btn-1" variant="success">
        Registrarse
      </Button>
      {errores ? (
        //Alerta que muestra si existe algún error o todo está correcto dentro de los input
        <Alert className="alert alert__contraseña" variant="danger">
          {errores}
        </Alert>
      ) : null}
    </form>
  );
};

export default Formulario;
