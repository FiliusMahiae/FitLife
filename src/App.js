import { useState } from 'react';
import './styles/App.css';
import DatosPersonales from './components/DatosPersonales';
import InformacionDeContacto from './components/InformacionDeContacto';
import PreferenciasEntrenamiento from './components/PreferenciasEntrenamiento';
import MetodoDePago from './components/MetodoDePago';
import EnviarFormulario from './components/EnviarFormulario';
import IndicadorDeProceso from './components/IndicadorDeProceso';

function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    datosPersonales: {},
    informacionContacto: {},
    preferenciasEntrenamiento: {},
    metodoPago: {}
  });

  const handleSectionData = (section, data) => {
    setFormData((prevData) => ({
      ...prevData,
      [section]: data
    }));

    if (currentStep < 5) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const enviarDatosAPI = async () => {
    try {
      const respuesta = await fetch('https://api.fitlife.com/registro', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (respuesta.ok) {
        console.log('Usuario registrado correctamente');
      }
    } catch {
      console.log('Error al registrar');
    }
  }

  return (
    <div className="App">
      <h1>Registro en FitLife</h1>
      <IndicadorDeProceso currentStep={currentStep} />

      {currentStep === 1 && <DatosPersonales sendData={(data) => handleSectionData('datosPersonales', data)} />}
      {currentStep === 2 && <InformacionDeContacto sendData={(data) => handleSectionData('informacionContacto', data)} />}
      {currentStep === 3 && <PreferenciasEntrenamiento sendData={(data) => handleSectionData('preferenciasEntrenamiento', data)} />}
      {currentStep === 4 && <MetodoDePago sendData={(data) => handleSectionData('metodoPago', data)} />}
      {currentStep === 5 && <EnviarFormulario sendData={enviarDatosAPI} />}
    </div>
  );
}

export default App;