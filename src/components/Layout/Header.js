
import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../../context/User/UserContext";

export default function Header() {
  const ctx = useContext(UserContext);

  const { currentUser, verifyingToken, logoutUser } = ctx;

  useEffect(() => {
    verifyingToken();
  }, []);

  return (
    <>
      <header className="flex flex-wrap fixed top-0 left-0 right-0">
        <nav className="flex w-screen justify-between bg-[#F2FFE9] text-gray-700">
          <div className="w-full xl:px-12 py-6 px-5 flex space-x-12 items-center ">
            <Link className="text-2xl font-bold" to="/">
              <img
                className="h-12 w-auto"
                src="https://i.ibb.co/HHy0wXh/IMG-1807.png" 
                alt="algo"
              />
            </Link>
            <ul className="hidden md:flex mx-auto px-5 font-semibold space-x-12">
              <li>
                <Link className="hover:text-gray-900" to="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/books">
                  Books
                </Link>
              </li>
              <li>
                <Link className="hover:text-gray-900" to="/booksUsed">
                  Used Books
                </Link>
              </li>
            </ul>
            <div className="flex-grow border-0 border-green-0 py-1 px-3 lg:flex justify-between round hidden">
              <input
                className="flex-grow text-gray-600 focus:outline-none"
                type="text"
                placeholder="Search by Title or Author"
              />
              <span>
              {/* LUPA */}
              <Link to="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-5 h-8 w-6 pt-1  text-gray-400 hover:text-gray-600 transition duration-100 cursor-pointer"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                </Link>
              </span>
            </div>

            <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            {currentUser.admin ?
            <>
              Hola admin
            </>
            :
            <>
              
            </>
            
            
            }






						{
							currentUser.firstName ?
              <>
              <div className="hidden xl:flex items-center text-gray-600 space-x-5 items-center">
                {/* persona */}
                <Link className="hover:text-gray-900" to="/profile">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
                <span className="absolute flex ml-5 -mt-5">
                  <span className="h-3 w-3 animate-ping absolute inline-flex rounded-full bg-green-500 opacity-75"></span>
                  <span className="h-3 w-3 relative inline-flex rounded-full bg-green-600"></span>
                </span>
              </Link>

              {/* //carrito */}
              <Link className="flex items-center hover:text-gray-900" to="/cart">  
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                
              </Link>
                </div>

                <a onClick={() => logoutUser()} href="/"  class="ml-8 whitespace-nowrap inline-flex items-center justify-center bg-gradient-to-r from-[#557C55] to-[#A6CF98] bg-origin-border px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white hover:from-gray-700 hover:to-gray-700">
										Logout
									</a>

               </> 
								:
								<>
									
                <div class="hidden md:flex md:items-center md:space-x-6">
            <a href="/login" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-800">
              Log in
            </a>
            <a href="/signup" class="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-gray bg-gray-200 hover:bg-gray-300">
              Sign up
            </a>
          </div>

								</>
						}

					</div>



           
          </div>
          <Link
            className="flex xl:hidden items-center mr-6 hover:text-red-900"
            to="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
           
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
             
            </svg>
            
            <span className="flex absolute -mt-5 ml-4">
              <span className="h-3 w-3 absolute bg-pink-500 opacity-75 inline-flex rounded-full animate-ping"></span>
              <span className="h-3 w-3 relative inline-flex rounded-full bg-pink-600"></span>
            </span>
          </Link>
          <Link
            className="xl:hidden self-center mr-12 hover:text-gray-900"
            to="/"
          >
           
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            
          </Link>
        </nav>
      </header>
    </>
  );

}
