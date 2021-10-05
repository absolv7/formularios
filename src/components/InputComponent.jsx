import { faCheckCircle, faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import { Label, GrupoInput, Input, IconoValidacion, LeyendaError }
    from '../elements/Formulario';


const InputComponent =
    ({ estado, setEstado, label, placeholder, tipo, name, leyendaError, expresionRegular, funcionValidacion }) => {

        const onChangeInput = (event) => {
            setEstado({ ...estado, campo: event.target.value });
        }


        const validacion = () => {
            if (expresionRegular) {
                if (expresionRegular.test(estado.campo)) {
                    setEstado({ ...estado, valido: 'true' });
                } else setEstado({ ...estado, valido: 'false' });
            }

            funcionValidacion && funcionValidacion();
            
        }

    return (
        <div>
            <Label htmlFor={name} valido={estado.valido}>{label}</Label>
            {/* agregamos un grupo que contenga el input y el icono que vamos a utilizar de fontawesome */}

            <GrupoInput>
                <Input
                    type={tipo}
                    placeholder={placeholder}
                    id={name}
                    value={estado.campo}
                    onChange={onChangeInput}

                    //cuando presionamos una tecla se ejecuta la funcion
                    onKeyUp={validacion}

                    //cuando damos un click fuera del input se ejecuta la funcion
                    onBlur={validacion}
                    esValido={estado.valido}
                />
                <IconoValidacion
                    icon={estado.valido==='true' ? faCheckCircle : faTimesCircle}
                    valido={estado.valido}
                />
            </GrupoInput>
            <LeyendaError valido={estado.valido}>{leyendaError}</LeyendaError>
        </div>
    )
}


export default InputComponent;