export default function EnviarFormulario({sendData}) {
  return (
    <div>
      <button type="submit" onClick={sendData}>Enviar Formulario</button>
    </div>
  );
}
