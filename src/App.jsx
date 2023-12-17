import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Registro from "./components/Registro";
import { useState } from "react";

function App() {
  //Estados que almacenan el mensaje de error o éxito según sea el caso
  const [error, setError] = useState("");
  const [exito, setExito] = useState("");
  return (
    //Apartado que renderiza registro importado desde su componente y sus props
    <>
      <Registro
        error={error}
        exito={exito}
        setError={setError}
        setExito={setExito}
      ></Registro>
    </>
  );
}
export default App;
