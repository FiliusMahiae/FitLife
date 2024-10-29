import { useForm } from "react-hook-form";

export default function DatosPago({ sendData }) {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        sendData(data);
    };

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <h3>Pago con Tarjeta de Crédito</h3>
                
                <div>
                    <label>Número de Tarjeta</label>
                    <input 
                        type="text"
                        {...register('numeroTarjeta', { 
                            required: true, 
                            pattern: /^[0-9]{16}$/ // 16 dígitos para el número de tarjeta
                        })} 
                    />
                    {errors.numeroTarjeta?.type === 'required' && <p>El número de tarjeta es obligatorio</p>}
                    {errors.numeroTarjeta?.type === 'pattern' && <p>El número de tarjeta debe contener 16 dígitos</p>}
                </div>
                
                <div>
                    <label>Fecha de Vencimiento</label>
                    <input 
                        type="text" 
                        placeholder="MM/AA"
                        {...register('fechaVencimiento', { 
                            required: true, 
                            pattern: /^(0[1-9]|1[0-2])\/\d{2}$/ // Formato MM/AA
                        })} 
                    />
                    {errors.fechaVencimiento?.type === 'required' && <p>La fecha de vencimiento es obligatoria</p>}
                    {errors.fechaVencimiento?.type === 'pattern' && <p>El formato debe ser MM/AA</p>}
                </div>
                
                <div>
                    <label>Código de Seguridad (CVV)</label>
                    <input 
                        type="text"
                        {...register('cvv', { 
                            required: true, 
                            pattern: /^[0-9]{3,4}$/ // CVV de 3 o 4 dígitos
                        })} 
                    />
                    {errors.cvv?.type === 'required' && <p>El código de seguridad es obligatorio</p>}
                    {errors.cvv?.type === 'pattern' && <p>El CVV debe contener 3 o 4 dígitos</p>}
                </div>

                <input type="submit" value="Siguiente" />
            </form>
        </div>
    );
}