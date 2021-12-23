

const reducer = (globalState, action) => {

	switch (action.type) {

		case "GET_CARTBOOK":
		case "UPDATE_CARTBOOKS":
			return {
				...globalState,
				singleBook: action.payload
			}

		case "GET_CARTBOOKS":
			return {
				...globalState,
				books: action.payload
			}

		


		default:
			return globalState

	}

}

export default reducer