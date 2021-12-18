
// 1. IMPORTACIONES
import React from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'

import Home from './components/Home'
import Layout from './components/Layout'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'



// 2. FUNCIÓN
const Router = () => {
	
	return (
		<>
		
				
				<BrowserRouter>
					<Routes>
						<Route path="/" element={<Layout />}>
							{/* localhost:3000/ */}
							<Route index element={<Home />} />
							{/* localhost:3000/registro */}
							<Route path="registro" element={<Register/>}/>
							{/* localhost:3000/iniciar-sesion */}
							<Route path="iniciar-sesion" element={<Login/>}/>
						



						




						</Route>
					</Routes>
				</BrowserRouter>
				
		
		</>
	)
}


// 3. EXPORTACIÓN
export default Router