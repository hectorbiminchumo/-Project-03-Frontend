import React, { useEffect, useContext } from "react";
import BookContext from "./../../context/Book/BookContext";

import { Link } from "react-router-dom";

function Cart() {

    const ctx = useContext(BookContext);

    const {books, getBooks } = ctx;

    useEffect(() => {
        getBooks();
      }, []);


    return (
       <>

{/* <!--
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
--> */}
<div class="bg-white">
  <div class="max-w-4xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
    <h1 class="text-3xl font-extrabold tracking-tight text-gray-900">Shopping Cart</h1>

    <form class="mt-12">
      <div>
        <h2 class="sr-only">Items in your shopping cart</h2>

        <ul role="list" class="border-t border-b border-gray-200 divide-y divide-gray-200">
          


          {books.map((element) => {

            return(

                <>

          <li class="flex py-6 sm:py-10">
            <div class="flex-shrink-0">
              <img src={element.image} alt="Front of men&#039;s Basic Tee in sienna." class="w-24 h-24 rounded-lg object-center object-cover sm:w-32 sm:h-32"/>
            </div>

            <div class="relative ml-4 flex-1 flex flex-col justify-between sm:ml-6">
              <div>
                <div class="flex justify-between sm:grid sm:grid-cols-2">
                  <div class="pr-6">
                    <h3 class="text-sm">
                      <a href="#" class="font-medium text-gray-700 hover:text-gray-800">
                      {element.title}
                      </a>
                    </h3>
                    <p class="mt-1 text-sm text-gray-500">
                    {element.author}
                    </p>

                    <p class="mt-1 text-sm text-gray-500">
                      {element.pages} pages
                    </p>
                  </div>

                  <p class="text-sm font-medium text-gray-900 text-right">$32.00</p>
                </div>

                <div class="mt-4 flex items-center sm:block sm:absolute sm:top-0 sm:left-1/2 sm:mt-0">
                  <label for="quantity-1" class="sr-only">Quantity, Basic Tee</label>
                  <select id="quantity-1" name="quantity-1" class="block max-w-full rounded-md border border-gray-300 py-1.5 text-base leading-5 font-medium text-gray-700 text-left shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                  </select>

                  <button type="button" class="ml-4 text-sm font-medium text-[#557C55] hover:text-[#A6CF98] sm:ml-0 sm:mt-3">
                    <span>Remove</span>
                  </button>
                </div>
              </div>

              <p class="mt-4 flex text-sm text-gray-700 space-x-2">
                {/* <!-- Heroicon name: solid/check --> */}
                <svg class="flex-shrink-0 h-5 w-5 text-green-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
                <span>In stock</span>
              </p>
            </div>
          </li>
                
          </>
            );
          })}





          {/* <!-- More products... --> */}
        </ul>
      </div>

      {/* <!-- Order summary --> */}
      <div class="mt-10 sm:ml-32 sm:pl-6">
        <div class="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
          <h2 class="sr-only">Order summary</h2>

          <div class="flow-root">
            <dl class="-my-4 text-sm divide-y divide-gray-200">
              <div class="py-4 flex items-center justify-between">
                <dt class="text-gray-600">
                  Subtotal
                </dt>
                <dd class="font-medium text-gray-900">
                  $115.00
                </dd>
              </div>
              <div class="py-4 flex items-center justify-between">
                <dt class="text-gray-600">
                  Shipping
                </dt>
                <dd class="font-medium text-gray-900">
                  $5.00
                </dd>
              </div>
              <div class="py-4 flex items-center justify-between">
                <dt class="text-gray-600">
                  Tax
                </dt>
                <dd class="font-medium text-gray-900">
                  $8
                </dd>
              </div>
              <div class="py-4 flex items-center justify-between">
                <dt class="text-base font-medium text-gray-900">
                  Order total
                </dt>
                <dd class="text-base font-medium text-gray-900">
                  $128
                </dd>
              </div>
            </dl>
          </div>
        </div>
        <div class="mt-10">
          <button type="submit" class="w-full bg-[#557C55] border border-transparent rounded-md shadow-sm py-3 px-4 text-base font-medium text-white hover:bg-[#A6CF98] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-indigo-500">Checkout</button>
        </div>

        <div class="mt-6 text-sm text-center text-gray-500">
          <p>
            or <a href="#" class="text-[#A6CF98] font-medium hover:text-indigo-500">Continue Shopping<span aria-hidden="true"> &rarr;</span></a>
          </p>
        </div>
      </div>
    </form>
  </div>
</div>



       </>
    )
}

export default Cart
