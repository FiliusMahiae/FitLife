import { useForm } from "react-hook-form";
import '../styles/FormPart.css';

export default function DatosPersonales({ sendData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        sendData(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Nombre</label>
                    <input 
                        type="text" 
                        {...register('nombre', { required: true, maxLength: 50 })} 
                    />
                    {errors.nombre?.type === 'required' && <p>El nombre es obligatorio</p>}
                    {errors.nombre?.type === 'maxLength' && <p>El nombre debe tener menos de 50 caracteres</p>}
                </div>
                <div>
                    <label>Email</label>
                    <input 
                        type="email" 
                        {...register('email', { required: true, maxLength: 50 })} 
                    />
                    {errors.email?.type === 'required' && <p>El email es obligatorio</p>}
                    {errors.email?.type === 'maxLength' && <p>El email debe tener menos de 50 caracteres</p>}
                </div>
                <div>
                    <label>Teléfono</label>
                    <input 
                        type="tel" 
                        {...register('telefono', { 
                            required: true, 
                            pattern: /^[0-9]{7,15}$/
                        })} 
                    />
                    {errors.telefono?.type === 'required' && <p>El teléfono es obligatorio</p>}
                    {errors.telefono?.type === 'pattern' && <p>El teléfono debe contener entre 7 y 15 dígitos</p>}
                </div>
                <input type="submit" value="Siguiente" />
            </form>
        </div>
    );
}