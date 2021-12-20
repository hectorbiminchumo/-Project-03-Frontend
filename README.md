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

    9. CREAR LIBROS
        a. Crear ruta en Router.js 
            1. Importar Books
            2. Crear ruta /crear
        b. Crear componente Create.js
            rfc
            b.1 Se agrega formulario
            Usaremos el useState y contexto
            
            En la funcion trabajamos con:

            //1. Estado global
            definimos una variable igual al contexto de book, hacemos una desestructuracion

            //2. Estado local 
            Desestructuracion de la informacion de un libro, el valor inicial de useState es un objeto 

            onChange.- evento monitorea el cambio de texto en un campo 

            handleChange.- sirve para capturar por parte del dom los datos del formulario

            En funciones, 
            definir el handleChange, se establece el cambio en el estado local, 
            
            setNewBook
                con spread operator llamar las propiedades de newBook. El target se refiere a los inputs, cambio de propiedades en el objeto dinamico.

            //3. En BookState, se define la funcion createBook


            //4. En el tag form se agrega onSubmit que ejecute un handleSubmit

                Crear handleSubmit
                    Se invoca createBook(NewBook)

    10. En Book/index.js
        useEffect.- hook que permite monitorear cambioas de una variable, todos los eventos que vengan fuera del navegador
        Tiene dos argumentos (funcion,[] Cuando hay un arreglo vacio significa que se ejecuta una vez)
        Luego del return(renderizado) se ejecuta el useEffect, si hay cambios React renderiza nuevamente.
   

   ---------------------------------
   TRABAJO CON RAMAS
   1. CREAR RAMA
        a. git checkout -b "nombre"
            se hacen los cambios
        b. git add -A
        c. git commit -m "comentario"
        d. git push origin "nombre"
    2. SUBIR CAMBIOS
        a. pull request/ new pull request
        b. base: master   compare: "nombre"  create pull request(x2)
        c. inspector deploy log
    3. MERGE
        a. Pull request/ abrir cambio
        b. Merge pull request
        c. Verificar en Netlify lo que se obtiene
        d. Confirmar Merge
    4. FUSION LOCAL
        a. En VSC cambiar a rama de master: git checkout master
        b. git pull origin master (trae los cambios de github y actualiza. Fusion fast forward)
    
    ---------------------------------
EDITAR LIBRO

1. Crear ruta books/:id/editar
2. Crear componente Edit en Single
3. Dividir en:

ESTADO GLOBAL
Utilizo los parametros para obterner el ID de la guitarra, genero un contexto bookcontext
singleBook, getBook(Para hacer una actualizacion del book en el que estamos en la pagina), updateBook (cambiar datos con el put) = ctx

Desestructuracion de objetos para el book individual

ESTADO LOCAL
bookData, setBookData = useState({propiedades})

FUNCIONES
useEffect- primer argumento funcion, segundo un arreglo
    Funcion de actualizacion

RETORNO




3. Capturar datos de ESTADO LOCAL con useState
4. Funciones setBookdata, se llaman los datos con el spread operator y se modifican con target
5. Se verifica en Components si ya cambia el estado cuando se digitan datos
6. Al inicio de funciones, aplicar useEffect
    a. Funcion de actualizacion
    b. 
7. Estado global   




Crear UpdateGuitar en state


       