// ./client/src/Auth/Register.js
import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from './../../context/User/UserContext'

export default function Register() {

	const ctx = useContext(UserContext)

	const {
		registerUser
	} = ctx


	const [newUser, setNewUser] = useState({
		
		email: "",
		firstName: "",
		lastName: "",
        phone: "",
		password: "",
		confirmarpassword: "",
	})

	const handleChange = (e) => {
		e.preventDefault()

		setNewUser({
			...newUser,
			[e.target.name]: e.target.value
		})

	}

	const handleSubmit = (e) => {
		
		e.preventDefault()

		registerUser(newUser)

	}


	return (
		<div className="mt-1 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
			<div className="sm:mx-auto sm:w-full sm:max-w-md">
				<img className="mx-auto h-24 w-auto" src="https://i.ibb.co/swtjXQW/Screen-Shot-2021-12-23-at-01-02-16-removebg-preview.png" />
				<h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
					Sign up
				</h2>
				<p className="mt-2 text-center text-sm text-gray-600">
					Have an account? &nbsp;
					<Link to="/login">
						<a className="font-medium text-yellow-500 hover:text-yellow-300">
							Log in
						</a>
					</Link>
				</p>
			</div>

			<div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
				<div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
					<form 
					onSubmit={(event) => { handleSubmit(event) }}
					className="space-y-6">
						<div>
							<label for="email" className="block text-sm font-medium text-gray-700">
								Email
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="email"
									type="email"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
                        
                        <div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								First Name
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="firstName"
									type="text"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
                        <div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Last Name
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="lastName"
									type="text"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						

						<div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Password
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="password"
									type="password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

						<div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Confirm your password
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="confirmarpassword"
									type="password"
									required
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>

                        <div>
							<label for="password" className="block text-sm font-medium text-gray-700">
								Phone Number
							</label>
							<div className="mt-1">
								<input
									onChange={(event) => { handleChange(event)}}
									name="phone"
									type="number"
									className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" />
							</div>
						</div>
						<div>
							<button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#557C55] hover:bg-[#A6CF98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								Sign up
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}