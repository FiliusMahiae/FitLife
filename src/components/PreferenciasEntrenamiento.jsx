import { useForm } from "react-hook-form";

export default function PreferenciasEntrenamiento({ sendData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        sendData(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Tipo de Entrenamiento</label>
                    <select {...register('tipoEntrenamiento', { required: true })}>
                        <option value="">Selecciona una opción</option>
                        <option value="fuerza">Fuerza</option>
                        <option value="cardio">Cardio</option>
                        <option value="hiit">HIIT</option>
                        <option value="yoga">Yoga</option>
                        <option value="pilates">Pilates</option>
                    </select>
                    {errors.tipoEntrenamiento && <p>El tipo de entrenamiento es obligatorio</p>}
                </div>

                <div>
                    <label>Objetivos</label>
                    <select {...register('objetivos', { required: true })}>
                        <option value="">Selecciona una opción</option>
                        <option value="perderPeso">Perder Peso</option>
                        <option value="ganarMasaMuscular">Ganar Masa Muscular</option>
                        <option value="mejorarResistencia">Mejorar Resistencia</option>
                        <option value="flexibilidad">Flexibilidad</option>
                        <option value="bienestar">Bienestar General</option>
                    </select>
                    {errors.objetivos && <p>El objetivo es obligatorio</p>}
                </div>

                <div>
                    <label>Disponibilidad (días por semana)</label>
                    <input 
                        type="number" 
                        {...register('disponibilidad', { 
                            required: true, 
                            min: 1, 
                            max: 7 
                        })} 
                    />
                    {errors.disponibilidad?.type === 'required' && <p>La disponibilidad es obligatoria</p>}
                    {errors.disponibilidad?.type === 'min' && <p>Debe ser al menos 1 día por semana</p>}
                    {errors.disponibilidad?.type === 'max' && <p>No puede ser más de 7 días por semana</p>}
                </div>

                <input type="submit" value="Siguiente" />
            </form>
        </div>
    );
}
