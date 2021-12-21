
// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import Profile from './components/User/profile'
import Cart from './components/Cart'

import Books from './components/Books'
import BooksUsed from './components/BooksUsed'
import Single from './components/Books/Single'
import SingleUsed from './components/BooksUsed/SingleUsed'
import Create from './components/Books/Create'
import CreateUsed from './components/BooksUsed/CreateUsed'
import EditBook from './components/Books/Single/Edit'
import Auth from './routes/Auth'
import Private from './routes/Private'
	


import BookState from './context/Book/BookState'
import BookUsedState from './context/Book-used/BookUsedState'
import UserState from './context/User/UserState'




// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		
				<UserState>
				<BookUsedState>
				<BookState>
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="signup" element={<Auth component={Register}/>}/>
							{/* localhost:3000/iniciar-sesion */}
							<Route path="login" element={<Auth component={Login}/>}/>
							{/* localhost:3000/books */}
							<Route path="books" element={<Books/>}/>
							{/* localhost:3000/books/:id */}
							<Route path="books/:id" element={<Single/>}/>
							{/* localhost:3000/books/crear */}
							<Route path="books/crear" element={<Create/>}/>
							{/* localhost:3000/books/edit */}
							<Route path="books/:id/editar" element={<EditBook/>}/>
							{/* localhost:3000/cart */}
							<Route path="cart" element={<Cart/>}/>
						
							{/* localhost:3000/booksUsed */}
							<Route path="booksUsed" element={<BooksUsed/>}/>
							{/* localhost:3000/booksUsed/:id */}
							<Route path="booksUsed/:id" element={<SingleUsed/>}/>
							{/* localhost:3000/booksUsed/crear */}
							<Route path="booksUsed/crear" element={<CreateUsed/>}/>
						
						{/* localhost:3000/profile */}
						<Route path="profile" element={<Private component={Profile} />} />

						</Route>
					</Routes>
				</BrowserRouter>
				</BookState>
				</BookUsedState>
				</UserState>
		
		</>
	)
}


// 3. EXPORTACIÓN
export default Router