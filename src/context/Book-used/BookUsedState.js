// LA ARQUITECTURA QUE SE UTILIZA PARA GENERAR EL ESTADO GLOBAL SE LE CONOCE COMO FLUX.

import { useReducer } from 'react'
import BookUsedContext from './BookUsedContext'

import BookUsedReducer from './BookUsedReducer'

import axiosClient from "./../../config/axios"

const BookUsedState = (props) => {

	// 1. INITIAL STATE (ESTADO INICIAL)
	const initialState = {
		booksUsed: [],
		singleBookUsed: {
			_id: "",
			title: "",
			author: "",
			description: "",
			price: "",
			condition: "",
            image: "",
            pages: "" 
		},
		hola: "Hector"
	}

	// 2. CONFIGURACIÓN DE REDUCER Y CREACIÓN DE ESTADO GLOBAL
	// REDUCERS SON FUNCIONES QUE ALTERAN EL ESTADO GLOBAL
	const [globalState, dispatch] = useReducer(BookUsedReducer, initialState)

	// 3. FUNCIONES DE CAMBIO EN ESTADO GLOBAL
	const changeText = () => {

		dispatch({ // ESTE OBJETO SE LE CONOCE COMO ACTION
			type: "CHANGE_TEXT",
			payload: "Estoy repasando." 		
		})

	}

	const getBooksUsed = async () => {

		const res = await axiosClient.get("booksUsed/readall")

		console.log("Getting used books...")
		console.log(res);
		
		const list = res.data.data

		dispatch({
			type: "GET_BOOKSUSED",
			payload: list
		})

	}

	const getBookUsed = async (bookUsedId) => {
		
		console.log(bookUsedId)

		const res = await axiosClient.get(`booksUsed/readone/${bookUsedId}`)

		console.log(res)

		const selectedBookUsed = res.data.data

		dispatch({
			type: "GET_BOOKUSED",
			payload: selectedBookUsed
		})

	}

	const createBookUsed = async (form) => {

		const res = await axiosClient.post("booksUsed/create", form)

		console.log(res)

	}

	const updateBookUsed = async (form, idBookUsed) => {

		const res = await axiosClient.put(`booksUsed/edit/${idBookUsed}`, form)

		const updatedBookUsed = res.data.data

		dispatch({
			type: "UPDATE_BOOKUSED",
			payload: updatedBookUsed
		})


	}

	const deleteBookUsed = async (idBook) => {

		const res = await axiosClient.delete(`booksUsed/delete/${idBook}` )

	}

	// 4. RETORNO
	return (
		<BookUsedContext.Provider
			value={{
				booksUsed: globalState.booksUsed,
				hola: globalState.hola,
				singleBookUsed: globalState.singleBookUsed,
				changeText,
				getBooksUsed,
				getBookUsed,
				createBookUsed,
				updateBookUsed,
				deleteBookUsed
			}}
		>
			{props.children}
		</BookUsedContext.Provider>
	)


}

export default BookUsedState