
// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'

import Books from './components/Books'
import BooksUsed from './components/BooksUsed'
import Single from './components/Books/Single'
import SingleUsed from './components/BooksUsed/SingleUsed'



import BookState from './context/Book/BookState'
import BookUsedState from './context/Book-used/BookUsedState'


// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		
				<BookUsedState>
				<BookState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="registro" element={<Register/>}/>
							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Login/>}/>
							{/* localhost:3000/books */}
							<Route path="books" element={<Books/>}/>
							{/* localhost:3000/books/:id */}
							<Route path="books/:id" element={<Single/>}/>
							{/* localhost:3000/booksUsed */}
							<Route path="booksUsed" element={<BooksUsed/>}/>
							{/* localhost:3000/booksUsed/:id */}
							<Route path="booksUsed/:id" element={<SingleUsed/>}/>
							
						

						</Route>
					</Routes>
				</BrowserRouter>
				</BookState>
				</BookUsedState>
		
		</>
	)
}


// 3. EXPORTACIÓN
export default Router