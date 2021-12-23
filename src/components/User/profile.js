

import React from 'react'

export default function Profile() {
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
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
--> */}

<div class="bg-white">
  {/* <!--
    Mobile menu

    Off-canvas menu for mobile, show/hide based on off-canvas menu state.
  --> */}
  <div class="fixed inset-0 flex z-40 lg:hidden" role="dialog" aria-modal="true">
    {/* <!--
      Off-canvas menu overlay, show/hide based on off-canvas menu state.

      Entering: "transition-opacity ease-linear duration-300"
        From: "opacity-0"
        To: "opacity-100"
      Leaving: "transition-opacity ease-linear duration-300"
        From: "opacity-100"
        To: "opacity-0"
    --> */}
    <div class="fixed inset-0 bg-black bg-opacity-25" aria-hidden="true"></div>

    {/* <!--
      Off-canvas menu, show/hide based on off-canvas menu state.

      Entering: "transition ease-in-out duration-300 transform"
        From: "-translate-x-full"
        To: "translate-x-0"
      Leaving: "transition ease-in-out duration-300 transform"
        From: "translate-x-0"
        To: "-translate-x-full"
    --> */}
    <div class="relative max-w-xs w-full bg-white shadow-xl pb-12 flex flex-col overflow-y-auto">
      <div class="px-4 pt-5 pb-2 flex">
        <button type="button" class="-m-2 p-2 rounded-md inline-flex items-center justify-center text-gray-400">
          <span class="sr-only">Close menu</span>
          {/* <!-- Heroicon name: outline/x --> */}
          <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* <!-- Links --> */}
      <div class="mt-2">
        <div class="border-b border-gray-200">
          <div class="-mb-px flex px-4 space-x-8" aria-orientation="horizontal" role="tablist">
            {/* <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> */}
            <button id="tabs-1-tab-1" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-1" role="tab" type="button">
              Women
            </button>

            {/* <!-- Selected: "text-indigo-600 border-indigo-600", Not Selected: "text-gray-900 border-transparent" --> */}
            <button id="tabs-1-tab-2" class="text-gray-900 border-transparent flex-1 whitespace-nowrap py-4 px-1 border-b-2 text-base font-medium" aria-controls="tabs-1-panel-2" role="tab" type="button">
              Men
            </button>
          </div>
        </div>

        {/* <!-- 'Women' tab panel, show/hide based on tab state. --> */}
        <div id="tabs-1-panel-1" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-1" role="tabpanel" tabindex="0">
          <div class="space-y-4">
            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-01.jpg" alt="Models sitting back to back, wearing Basic Tee in black and bone." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-02.jpg" alt="Close up of Basic Tee fall bundle with off-white, ochre, olive, and black tees." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Basic Tees
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/mega-menu-category-03.jpg" alt="Model wearing minimalist watch with black wristband and white watch face." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Accessories
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="women-shoes-heading-mobile" class="font-medium text-gray-900">
                Shoes &amp; Accessories
              </p>
              <ul role="list" aria-labelledby="women-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sneakers
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Boots
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Flats
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sandals
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Heels
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Socks
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-collection-heading-mobile" class="font-medium text-gray-900">
                Shop Collection
              </p>
              <ul role="list" aria-labelledby="women-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Everything
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Core
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    New Arrivals
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sale
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Accessories
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="women-clothing-heading-mobile" class="font-medium text-gray-900">
                All Clothing
              </p>
              <ul role="list" aria-labelledby="women-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Basic Tees
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Artwork Tees
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Tops
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Bottoms
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Swimwear
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Underwear
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="women-accessories-heading-mobile" class="font-medium text-gray-900">
                All Accessories
              </p>
              <ul role="list" aria-labelledby="women-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Watches
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Wallets
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Bags
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sunglasses
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Hats
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Belts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="women-brands-heading-mobile" class="font-medium text-gray-900">
                Brands
              </p>
              <ul role="list" aria-labelledby="women-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Full Nelson
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    My Way
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Re-Arranged
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Counterfeit
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Significant Other
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* <!-- 'Men' tab panel, show/hide based on tab state. --> */}
        <div id="tabs-1-panel-2" class="pt-10 pb-8 px-4 space-y-10" aria-labelledby="tabs-1-tab-2" role="tabpanel" tabindex="0">
          <div class="space-y-4">
            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-category-01.jpg" alt="Wooden shelf with gray and olive drab green baseball caps, next to wooden clothes hanger with sweaters." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Accessories
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/product-page-04-detail-product-shot-01.jpg" alt="Drawstring top with elastic loop closure and textured interior padding." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    New Arrivals
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>

            <div class="group relative aspect-w-1 aspect-h-1 rounded-md bg-gray-100 overflow-hidden">
              <img src="https://tailwindui.com/img/ecommerce-images/category-page-02-image-card-06.jpg" alt="Three shirts in gray, white, and blue arranged on table with same line drawing of hands and shapes overlapping on front of shirt." class="object-center object-cover group-hover:opacity-75"/>
              <div class="flex flex-col justify-end">
                <div class="p-4 bg-white bg-opacity-60 text-base sm:text-sm">
                  <a href="#" class="font-medium text-gray-900">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    Artwork Tees
                  </a>
                  <p aria-hidden="true" class="mt-0.5 text-gray-700 sm:mt-1">Shop now</p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-shoes-heading-mobile" class="font-medium text-gray-900">
                Shoes &amp; Accessories
              </p>
              <ul role="list" aria-labelledby="men-shoes-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sneakers
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Boots
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sandals
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Socks
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-collection-heading-mobile" class="font-medium text-gray-900">
                Shop Collection
              </p>
              <ul role="list" aria-labelledby="men-collection-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Everything
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Core
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    New Arrivals
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sale
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-clothing-heading-mobile" class="font-medium text-gray-900">
                All Clothing
              </p>
              <ul role="list" aria-labelledby="men-clothing-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Basic Tees
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Artwork Tees
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Pants
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Hoodies
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Swimsuits
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p id="men-accessories-heading-mobile" class="font-medium text-gray-900">
                All Accessories
              </p>
              <ul role="list" aria-labelledby="men-accessories-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Watches
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Wallets
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Bags
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Sunglasses
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Hats
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Belts
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div class="space-y-10">
            <div>
              <p id="men-brands-heading-mobile" class="font-medium text-gray-900">
                Brands
              </p>
              <ul role="list" aria-labelledby="men-brands-heading-mobile" class="mt-6 flex flex-col space-y-6">
                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Re-Arranged
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Counterfeit
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    Full Nelson
                  </a>
                </li>

                <li class="flow-root">
                  <a href="#" class="-m-2 p-2 block text-gray-500">
                    My Way
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-200 py-6 px-4 space-y-6">
        <div class="flow-root">
          <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Company</a>
        </div>

        <div class="flow-root">
          <a href="#" class="-m-2 p-2 block font-medium text-gray-900">Stores</a>
        </div>
      </div>

      <div class="border-t border-gray-200 py-6 px-4">
        <a href="#" class="-m-2 p-2 flex items-center">
          <img src="https://tailwindui.com/img/flags/flag-canada.svg" alt="" class="w-5 h-auto block flex-shrink-0"/>
          <span class="ml-3 block text-base font-medium text-gray-900">
            CAD
          </span>
          <span class="sr-only">, change currency</span>
        </a>
      </div>
    </div>
  </div>

 

  <main class="max-w-2xl mx-auto py-24 px-4 sm:px-6 lg:max-w-7xl lg:px-8" aria-labelledby="order-history-heading">
    <div class="max-w-xl">
      <h1 id="order-history-heading" class="text-3xl font-extrabold tracking-tight text-gray-900">Order history</h1>
      <p class="mt-2 text-sm text-gray-500">Check the status of recent orders, manage returns, and discover similar products.</p>
    </div>

    <div class="mt-16 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:grid-cols-3 lg:gap-x-8 xl:grid-cols-4">
      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img className="w-full h-full object-contain h-100 w-200" src="https://images-na.ssl-images-amazon.com/images/I/51b7XbfMIIL.jpg" alt="Black fabric shoe bag with zipper around 3 sides, holding pair of white sneakers." class="object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Clean Code
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-[#557C55]">Out for delivery</span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img className="w-full h-full object-contain h-100 w-200" src="https://images-na.ssl-images-amazon.com/images/I/41oYsXjLvZL._SX348_BO1,204,203,200_.jpg" alt="Light grey canvas backpack with black handle, zipper, and edge details." class="object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Cracking the Coding Interview
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-900">Delivered on <time datetime="2021-06-21">June 21, 2021</time></span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img className="w-full h-full object-contain h-100 w-200" src="https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX258_BO1,204,203,200_.jpg" alt="Orange canvas cylindrical bag with drawstring top, front zipper pouch, and black shoulder strap." class="object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Clean Architecture
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-500">Cancelled</span>
        </p>
      </div>

      <div class="group relative">
        <div class="aspect-w-1 aspect-h-1 bg-gray-200 rounded-md overflow-hidden group-hover:opacity-75">
          <img className="w-full h-full object-contain h-100 w-200" src="https://images-na.ssl-images-amazon.com/images/I/41-sN-mzwKL._SX258_BO1,204,203,200_.jpg" alt="White canvas tote bag with black drawstring liner and white handle." class="object-center object-cover"/>
        </div>
        <h3 class="mt-4 text-sm text-gray-500">
          <a href="#">
            <span class="absolute inset-0"></span>
            Clean Architecture
          </a>
        </h3>
        <p class="mt-1 text-lg font-medium">
          <span class="text-gray-900">Delivered on <time datetime="2021-05-24">May 24, 2021</time></span>
        </p>
      </div>

      {/* <!-- More orders... --> */}
    </div>
  </main>

  
</div>




            </>

    )
    }