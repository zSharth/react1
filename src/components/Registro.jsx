import Formulario from "./Formulario";
import SocialButtons from "./SocialButton";
import FormAlert from "./Alert";

const Registro = ({ error, setExito, setError, exito }) => {
  //Apartado que renderiza los componentes(Formulario, Socialbuttos y Alert) importados desde sus componentes con sus props
  return (
    //Etiquetas que muestran el contenido completo del formulario y sus componentes
    <div className="container">
      <h1 className="form__title">Crea una cuenta</h1>
      <div className="icons__container">
      <SocialButtons 
        icono1={<i className="fa-brands fa-facebook fa-2xl"></i>} 
        icono2={<i className="fa-brands fa-github fa-2xl"></i>} 
        icono3={<i className="fa-brands fa-linkedin-in fa-2xl"></i>}/>
      </div>
      <p className="form__parrafo">O usa tu email para registrarte</p>
      <Formulario
        error={error}
        setExito={setExito}
        setError={setError}
        exito={exito}
      ></Formulario>
      {error ? <FormAlert variant="danger" error={error}></FormAlert> : null} 
      {exito ? <FormAlert variant="success" exito={exito}></FormAlert> : null}
    </div>
  );
};

export default Registro;
