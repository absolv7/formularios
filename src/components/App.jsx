import React, { useState } from 'react'
import {
    Formulario,
    Label,
    ContendorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError
} from '../elements/Formulario';

import { faExclamationTriangle} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Input from './InputComponent';


const App = () => {

    const [nombre, setNombre] = useState({ campo: '', valido: null });
    const [usuario, setUsuario] = useState({ campo: '', valido: null });
    const [password, setPassword] = useState({ campo: '', valido: null });
    const [password2, setPassword2] = useState({ campo: '', valido: null });
    const [correo, setCorreo] = useState({ campo: '', valido: null });
    const [telefono, setTelefono] = useState({ campo: '', valido: null });
    const [terminos, setTerminos] = useState(false);
    const [formularioValido, setFormularioValido] = useState(null);

    
    const expresionesRegulares = {
        usuario: /^[a-zA-Z0-9_-]{4,16}$/, // letras, numeros, guion y guion_bajo
	    nombre: /^[a-zA-ZÀ-ÿ\s]{3,40}$/, // letras y espacios, pueden llevar acentos.
	    password: /^.{4,16}$/, // 4 a 16 digitos.
	    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
    }

    const validarPassword2 = () => {
        if (password.campo.length > 0) {
            if (password.campo !== password2.campo) {
                setPassword2((prevState) => {
                    return { ...prevState, valido: 'false' }
                });
            } else {
                setPassword2((prevState) => {
                    return { ...prevState, valido: 'true' }
                });
            }
        }
    }


    const onChangeTerminos = (event) => {
        setTerminos(event.target.checked);
    }


    const onSubmit = (event) => {
        event.preventDefault();

        if (
            nombre.valido === 'true' &&
            usuario.valido === 'true' &&
            password.valido === 'true' &&
            password2.valido === 'true' &&
            correo.valido === 'true' &&
            telefono.valido === 'true' &&
            terminos
        ) {
            setFormularioValido(true);
            setUsuario({ campo: '', valido: null });
            setNombre({ campo: '', valido: null });
            setPassword({ campo: '', valido: null });
            setPassword2({ campo: '', valido: null });
            setCorreo({ campo: '', valido: null });
            setTelefono({ campo: '', valido: null });
            setTerminos(false);

        } else {
            setFormularioValido(false);

        }

    }

    return (
        <main>
            <Formulario action="" onSubmit={onSubmit}>

                <Input
                    estado={usuario}
                    setEstado={setUsuario}
                    label="Usuario" placeholder="Usuario"
                    tipo="text" name="Usuario"
                    leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guión bajo."
                    expresionRegular={expresionesRegulares.usuario}
                />
                <Input
                    estado={nombre}
                    setEstado={setNombre}
                    label="Nombre" placeholder="Nombre"
                    tipo="text" name="Nombre"
                    leyendaError="El nombre solo puede contener letras y espacios."
                    expresionRegular={expresionesRegulares.nombre}
                />
                <Input
                    estado={password}
                    setEstado={setPassword}
                    label="Contraseña" placeholder="Digite su contraseña"
                    tipo="password" name="Contraseña"
                    leyendaError="La contraseña debe ser de 4 a 16 dígitos."
                    expresionRegular={expresionesRegulares.password}
                />
                <Input
                    estado={password2}
                    setEstado={setPassword2}
                    label="Repetir Contraseña"
                    placeholder="Repetir Contraseña"
                    tipo="password"
                    name="Repetir Contraseña"
                    leyendaError="Las contraseñas deben coincidir."
                    funcionValidacion={validarPassword2}
                />
                <Input
                    estado={correo}
                    setEstado={setCorreo}
                    label="Correo Electrónico"
                    placeholder="Correo Electrónico"
                    tipo="email"
                    name="Correo Electronico"
                    leyendaError="El correo solo puede contener letras, numeros,  puntos, guiones y guión bajo."
                    expresionRegular={expresionesRegulares.correo}
                />
                <Input
                    estado={telefono}
                    setEstado={setTelefono}
                    label="Teléfono" placeholder="Teléfono"
                    tipo="text" name="Telefono"
                    leyendaError="El teléfono solo puede contener numeros y el máximo son 14 dígitos."
                    expresionRegular={expresionesRegulares.telefono}
                />
                


                {/* contenedor para los terminos */}
                <ContendorTerminos>
                    <Label>
                        <input
                            type="checkbox" name="terminos"
                            id="terminos" checked={terminos}
                            onChange={onChangeTerminos}
                        />
                        Acepto los terminos y condiciones
                    </Label>
                </ContendorTerminos>
                {/* mensaje de error */}
                {formularioValido === false && <MensajeError>
                    <p>
                        <FontAwesomeIcon icon={faExclamationTriangle}/>
                        <b>Error:</b>
                        Por favor rellene el formulario correctamente
                    </p>
                </MensajeError>}
                {/* boton */}
                <ContenedorBotonCentrado>
                    <Boton type="submit">Enviar formulario</Boton>
                    {formularioValido && <MensajeExito>
                        Formulario enviado correctamente
                    </MensajeExito>}
                </ContenedorBotonCentrado>
            </Formulario>
        </main>
    )
}

export default App;