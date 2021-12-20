// ./client/src/components/Guitars/index.js
import React, { useEffect, useContext } from "react";
import BookContext from "./../../context/Book/BookContext";

import { Link } from "react-router-dom";

export default function Books() {
  // ESTADO GLOBAL
  const ctx = useContext(BookContext);

  const { books, changeText, getBooks } = ctx;

  // ESTADO LOCAL

  // EL MOMENTO EN QUE SE EJECUTA EL USE EFFECT ES DESPUÉS DEL RETURN.
  useEffect(() => {
    getBooks();
  }, []); // CUANDO HAY UN ARREGLO VACÍO, SIGNIFICA QUE VA A EJECUTARSE UNA SOLA VEZ.
  return (
    <>
      <div class="mt-4 flex md:mt-0">
            <Link to="/books/crear">
              <button
                type="button"
                id="button-create"
                class="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
              >
                Create Book
              </button>
            </Link>
          </div>


      <div className="bg-white">
        <div  className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="sr-only">Books</h2>

          <div className="mx-px border-l border-gray-200 grid grid-cols-2 sm:mx-0 md:grid-cols-3 lg:grid-cols-6 gap-x-6">
            {books.map((element) => {
              return (
                <>
                  <div className="group relative bg-white border border-gray-200 rounded-lg flex flex-col overflow-hidden">
                    <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                      <Link to={`/books/${element._id}`}>
                        <img
                          src={element.image}
                          alt="imagen de libro"
                          className="w-full h-full object-center object-cover"
                        />
                      </Link>
                    </div>

                    <div className="flex-1 p-4 space-y-2 flex flex-col">
                      <h3 className="text-sm font-medium text-gray-900">
                        <Link to={`/books/${element._id}`}>
                          <span
                            aria-hidden="true"
                            className="absolute inset-0"
                          ></span>
                          {element.title}
                        </Link>
                      </h3>

                      <div  className="flex-1 flex flex-col justify-end">
                        <p className="text-sm italic text-gray-500">
                          {element.condition}
                        </p>
                        <p className="text-base font-medium text-gray-900">
                          ${element.price} USD
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
