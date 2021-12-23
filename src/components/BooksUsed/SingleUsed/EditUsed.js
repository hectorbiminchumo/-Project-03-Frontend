//./src/components/Guitars/Single/Edit.js

import React, { useState, useContext, useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import BookUsedContext from "../../../context/Book-used/BookUsedContext";


export default function EditUsed() {
  // 1. ESTADO GLOBAL
  const params = useParams();
  const idBookUsed = params.id;

  const ctx = useContext(BookUsedContext);
console.log(ctx);

  const { singleBookUsed, getBookUsed, updateBookUsed } = ctx;

  // 2. ESTADO LOCAL

  const [bookUsedData, setBookUsedData] = useState({
    title: "",
    author: "",
    description: "",
    image: "",
    price: "",
    condition: "",
    pages: "",
  });

  // 3. FUNCIONES

  // USEEFFECT PARA ACTUALIZAR DATOS EN EL ESTADO GLOBAL
  useEffect(() => {
    getBookUsed(idBookUsed);
  }, []);

  // USEEFFECT PARA ACTUALIZAR LOS DATOS DEL ESTADO GLOBAL AL ESTADO LOCAL
  useEffect(() => {
    const { title, author, description, image, price, condition, pages } = ctx.singleBookUsed;

    setBookUsedData({
      title: title,
      author: author,
      description: description,
      image: image,
      price: price,
      condition: condition,
      pages:pages
    });
  }, [singleBookUsed]);

  const handleChange = (e) => {
    e.preventDefault();

    setBookUsedData({
      ...bookUsedData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    updateBookUsed(bookUsedData, idBookUsed)
  };

  return (
    <>
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <div class="shadow mt-20 sm:rounded-md sm:overflow-hidden">
          <div class="bg-white py-6 px-4 space-y-6 sm:p-6">
            <div>
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Edit Book
              </h3>
              
            </div>

            <div class="grid grid-cols-6 gap-6">
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Title
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="title"
                  value={bookUsedData.title}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="first-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Author
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  name="author"
                  value={bookUsedData.author}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-6 sm:col-span-6 lg:col-span-4">
                <label
                  for="city"
                  class="block text-sm font-medium text-gray-700"
                >
                  Description
                </label>
                <textarea
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="text"
                  value={bookUsedData.description}
                  name="description"
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-6 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Precio (USD)
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                  name="price"
                  value={bookUsedData.price}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="country"
                  class="block text-sm font-medium text-gray-700"
                >
                  Condition
                </label>
                <select
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  name="condition"
                  class="mt-1 block w-full bg-white border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option value={"Used"}>Used</option>
                  
                </select>
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label
                  for="email-address"
                  class="block text-sm font-medium text-gray-700"
                >
                  Image
                </label>
                <input
                  type="text"
                  name="image"
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  value={bookUsedData.image}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div class="col-span-6 sm:col-span-3">
                <label
                  for="last-name"
                  class="block text-sm font-medium text-gray-700"
                >
                  Pages
                </label>
                <input
                  onChange={(event) => {
                    handleChange(event);
                  }}
                  type="number"
                  name="pages"
                  value={bookUsedData.pages}
                  class="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

            
            </div>
          </div>
          
          <div class="flex justify-end pr-4 border mb-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div>
            <button
              type="submit"
              class="w-full bg-gray-500 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Save Book
              
            </button>
            </div>
            <div>
            <Link to="/booksUsed">
            <button
              type="button"
              class="w-full  bg-gray-300 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-black hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500"
            >
              Cancel
              
            </button>
            </Link>
            </div>
            
          </div>
          
        </div>
      </form>
    </>
  );
}
