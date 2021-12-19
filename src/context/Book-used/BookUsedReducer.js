

const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_BOOKUSED":
		case "UPDATE_BOOKUSED":
			return {
				...globalState,
				singleBookUsed: action.payload
			}

		case "GET_BOOKSUSED":
			return {
				...globalState,
				booksUsed: action.payload
			}

		case "CHANGE_TEXT":
			return {
				...globalState,
				hola: action.payload
			}


		default:
			return globalState

	}

}

export default reducer