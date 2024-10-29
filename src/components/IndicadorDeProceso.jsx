import '../styles/IndicadorDeProceso.css';

export default function IndicadorDeProceso({ currentStep }) {
  return (
    <div className="indicador-proceso">
      <div className={`paso ${currentStep >= 1 ? 'activo' : ''}`}>1</div>
      <div className={`paso ${currentStep >= 2 ? 'activo' : ''}`}>2</div>
      <div className={`paso ${currentStep >= 3 ? 'activo' : ''}`}>3</div>
      <div className={`paso ${currentStep >= 4 ? 'activo' : ''}`}>4</div>
    </div>
  );
}

