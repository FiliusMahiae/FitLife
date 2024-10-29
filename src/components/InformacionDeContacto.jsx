import { useForm } from "react-hook-form";

export default function InformacionDeContacto({ sendData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        sendData(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    <label>Dirección</label>
                    <input
                        type="text" 
                        {...register('direccion', { required: true, maxLength: 50 })}
                    />
                    {errors.direccion?.type === 'required' && <p>La dirección es obligatoria</p>}
                    {errors.direccion?.type === 'maxLength' && <p>La dirección debe tener menos de 50 caracteres</p>}
                </div>
                <div>
                    <label>Ciudad</label>
                    <input
                        type="text" 
                        {...register('ciudad', { required: true, maxLength: 50 })}
                    />
                    {errors.ciudad?.type === 'required' && <p>La ciudad es obligatoria</p>}
                    {errors.ciudad?.type === 'maxLength' && <p>La ciudad debe tener menos de 50 caracteres</p>}
                </div>
                <div>
                    <label>Código Postal</label>
                    <input
                        type="text"
                        {...register('cp', {
                            required: true,
                            maxLength: 10,
                            pattern: /^[0-9]{4,10}$/ 
                        })}
                    />
                    {errors.cp?.type === 'required' && <p>El código postal es obligatorio</p>}
                    {errors.cp?.type === 'maxLength' && <p>El código postal debe tener menos de 10 caracteres</p>}
                    {errors.cp?.type === 'pattern' && <p>El código postal debe contener solo dígitos y tener entre 4 y 10 caracteres</p>}
                </div>
                <input type="submit" value="Siguiente" />
            </form>
        </div>
    );
}