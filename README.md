instalar npm install react-router-dom

//RUTEO
HOME
REGISTRO
LOGIN


1. Crear archivo Router.js //gestion de URL client

ROUTER.JS
importar React

import {Routes, Route, BrowserRouter} from 'react-router-dom'

rutas individuales
Home
Registro
Login

2. Crear carpeta de componentes
Auth
    Register.js
    Login.js
Layout
    Header.js
    Footer.js
Books
    index.js
Home.js

3. En el index.js de Layout
importar outlet from react-router-dom
colocar entre el header y footer


En archivo index.js
 //1. Importar Route from './Router'


LISTADO DE LIBROS
a. Crear ruta en Router.js 
    1. importar Books
    2. Crear ruta

GESTION DE ESTADO GLOBAL
GENERAR CARPETA CONTEXT Y CONFIG EN SRC
EN CONTEXT
    1. Crear carpeta Book
        1.1 BookContext.js
        1.2 BookReducer.js
        1.3 BookState.js

1. GENERAMOS EL CONTEXTO BOOKCONTEXT.JS
2. EN BOOKSTATE.JS
    ESTADO GLOBAL // TODOS LOS COMPONENTES VAN A TENER ACCESO A TODA LA INFORMACION QUE INGRESEMOS AHI.
    ARQUITECTURA FLUX (ESTADOS ACCIONES, DISPATCHERS, REDUCERS Y STORES)

    a. Importar useReducer, BookContext
    b. Funcion de estado global
        b.1 Initial State
        b.2 Configuracion de reducer y creacion de estado global
        b.3 Funciones de cambio de estado global
        Se genera las funciones que modificaran el estado global ejemplo Change Text
        changeText = ()=>{
            dispatch({
                type:"CHANGE_TEXT" //BUENA PRACTICA EN MAYUSC.
                payload: "Estoy aprendiendo"
            })
        }
        b.4 Retorno
            Ejecutamos el contexto como si fuera un componente BookContext.provider (proceso para entregar datos a todos los componentes)
            
            El provider le da acceso a todos los componentes para que puedan entrar al estado global.
            
            PROPIEDAD VALUE va a bajar todo el estado global a esta propiedad, dentro de este se pasa un objeto, se usa {} para indicar que se va a usar JS y dentro se pasa un objeto

            props.children es como el outlet, todos los componentes tienen acceso al estado global

        b.5 Importar estado a Router.js, antes del browserRouter englobar con <BookState>, esta pasando todos los datos a los componentes.

REPETIMOS EL MISMO PROCESO PARA BOOKUSED


3. BOOKREDUCER
   Reducer son funciones que alteran el estado global

    a. En BookState se usa useReducer y dispatch es una accion que le manda los datos reales a la funcion del reducer, este hace el cambio, altera el estado global y hace un rerender a todos los componentes

    b. BookReducer
    Establecemos las funciones que van a modificar el estado global
    const reducer=(globalState, action) => { 
        SWITCH(action.type)
            case "CHANGE_TEXT:
            return{
                ...globalState,
                hola: action.payload
            }        }

    c. importar BookReducer al BookState

4. Componente Books/ index.js
    a. importar de react useEffect y useContext, contexto
        Estado Global
        Se genera una variable ctx que es igual al BookContext
        Se hace una desestructuracion de datos de la variable

        Estado Local



        payload: son los datos reales que voy a utilizar para cambiar el valor del estado global

5. Crear archivo Axios.js
    Axios = libreria para hacer llamadas API hacia servidores
    instalar npm install axios
    a. Configurar axios
        importacion de axios
        axios.create
        export axiosClient

    PARA QUE OBTENGA LOS DATOS EN EL NAVEGADOR, EN EL BACKEND (SERVER) Instalar esta libreria npm install cors

    EN EL SERVER, INDEX.JS MIDDLEWARE
    // HABILITAR CORS (ACCESOS DE AMBIENTES DE DESARROLLO DE TERCEROS)
   app.use(cors())
   
   Permite flexibilizar el servidor

   el onclick de books/index.js sirve solo para ver en la consola lo que devuelve getbooks(res)

   CREAR COMPONENTE PARA LA VISTA DE UN LIBRO
   CREAR COMPONENTE PARA LA VISTA DE UN LIBRO USADO

   6. Se crea funcion para obtener libro individual en BookState.js

   7. En Books/single/index.js
    Se importa useParams
    Se hace una prueba con onClick
    Se da diseno
    Se usa useEffect

    8. DESPLEGAR EN NETLIFY
    
        a. Se crea en public un archivo _redirects con esta informacion:
    
        /*  /index.html  200

        Este archivo es para ejecutar correctamente el create-react-app en Netlify

        b. Proceso de despliegue:
            - Add new site / important an existing project
            - Provider Github
            - Select a project
            - Build command: CI= npm run build
            - Show advance/ new variable
                key: REACT_APP_BACKEND_URL
                value: https://only-books-project.herokuapp.com/
            - Deploy site

   

        