import styled, { css } from "styled-components";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// se declara un objeto con ciertos colores a utilizar
const colores = {
    borde: '#0075FF',
    error: '#bb2929',
    exito: '#1ed12d'
}

const Formulario = styled.form `
    
    //para trabajar los elementos con una grid 
    display: grid;

    //para indicarle que tenga 2 columnas. 2 columnas y cada una de 1 fraccion
    grid-template-columns: 1fr 1fr;

    //separacion entre columnas y filas
    gap: 20px;

    /*responsive design: tamaño maximo 800px, cuando llegue a este tamaño
    queremos que tenga una sola columna
    */
    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }

`;


const Label = styled.label `

    //para que abarque el 100% del espacio disponible
    display: block;

    font-weight: 700;
    padding: 10px;

    //para que el input quede alineado y no suba en el caso de que el label no tenga texto
    min-height: 40px;
    cursor: pointer;

    ${props => props.valido === 'false' && css `
        color: ${colores.error}
    `}

`;

const GrupoInput = styled.div `

    position: relative;

    //para que el grupo input quede por arriba
    z-index: 90;

`;

const Input = styled.input `

    width: 100%;
    background: #fff;

    //bordes redondeados
    border-radius: 3px;

    //altura basica:
    height: 45px;

    //para que el texto que este dentro del input quede centrado
    line-height: 45px;

    padding: 0 30px 0 10px;
    transition: .10s ease all;
    border: 3px solid transparent;

    //acceder al propio input: &
    &:focus{
        border: 3px solid ${colores.borde};
        outline: none;
        box-shadow: 3px 0px 30px rgba(163, 163, 163, 0.4);
    }

    ${props => props.valido === 'true' && css `
        border: 3px solid transparent;
    `}

    ${props => props.valido === 'false' && css `
        border: 3px solid ${colores.error} !important;
    `}

`;


const LeyendaError = styled.p `

    font-size: 12px;
    margin-bottom: 0;
    color: ${colores.error};
    display: none;

    ${props => props.valido === 'true' && css `

        display: none;

    `}

    ${props => props.valido === 'false' && css `

        display: block;
        color: ${colores.error};

    `}

`;

const IconoValidacion = styled(FontAwesomeIcon)`

    position: absolute;

    //posicionar el icono de derecha a izquierda 10px
    right: 10px;

    //de abajo hacia arriba desplazarlo 14px
    bottom: 14px;

    //para que quede por arriba del input
    z-index: 100;

    //tamaño del icono
    font-size: 16px;

    //opacidad 0 para que el icono no se muestre por defecto
    opacity: 0;


    ${props => props.valido === 'true' && css ` 
        opacity: 1;
        color: ${colores.exito}
    `}


    ${props => props.valido === 'false' && css ` 
        opacity: 1;
        color: ${colores.error}
    `}
    

`;


const ContendorTerminos = styled.div `

    //que se expanda 2 columnas
    grid-column: span 2;

    input{
        //para que haya un espacio entre el marco y el texto
        margin-right: 10px;
    }

`;

const ContenedorBotonCentrado = styled.div `

    //para centrar el boton con flex-box
    display: flex;

    //direccion de los elementos que estan dentor del contenedor
    flex-direction: column;

    //para centrar los elementos
    align-items: center;

    //para que se expanda 2 columnas
    grid-column: span 2;

    @media (max-width: 800px){
        grid-template-columns: 1fr;
    }

`

const Boton = styled.button `

    height: 45px;
    line-height: 45px;

    //ancho del tamaño disponible del 30%
    width: 30%;
    background: #0DC665;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 3px;
    cursor: pointer;
    transition: none.1s ease all;

    &:hover{
        box-shadow: 3px 0px 30px rgba(30,219,120,0.75);
    }

`

const MensajeExito = styled.p`

    font-size: 14px;
    color: ${colores.exito};

    //no queremos que este mensaje se muestre por defecto
    display: none;

`

const MensajeError = styled.div`

    height: 45px;
    line-height: 45px;
    background: #f66060;
    padding: 0px 15px;
    border-radius: 3px;

    //para que se expanda 2 columnas
    grid-column: span 2;

    //todos los parrafos que contenga este div
    p{  
        //para que no se desfaze el elemento
        margin: 0;
    }

    //accedo a las negritas
    b{
        margin-left: 10px;
    }

`

export {
    Formulario,
    Label,
    Input,
    GrupoInput,
    LeyendaError,
    IconoValidacion,
    ContendorTerminos,
    ContenedorBotonCentrado,
    Boton,
    MensajeExito,
    MensajeError
};