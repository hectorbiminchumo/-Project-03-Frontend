import React from 'react'

function Home() {
    return (
        <>


<div class="mt-20 bg-white">


  <main>
    {/* <!-- Hero section --> */}
    <div class="relative">
      <div class="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100"></div>
      <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
        <div class=" shadow-xl sm:rounded-2xl sm:overflow-hidden">
          <div class="absolute inset-0">
          
            <img class=" h-full w-full object-cover" src="https://wattention.com/wp-content/uploads/2018/04/Books-and-coffee.jpg" alt="books"/>
           
            
            <div class="absolute inset-0 bg-gradient-to-r from-green-800 to-[#F2FFE9] mix-blend-multiply"></div>
          </div>
          <div class="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
            <h1 class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
              <span class="block text-white">For the Love of Reading</span>
              <span class="block text-indigo-200"></span>
            </h1>
            <p class="block text-white mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl font-extrabold">
            "We love books, real books. Made of ink, printed on paper. Books that feel like books, and smell like books. Books with a past, present, and a future."
            </p>
            
          </div>
        </div>
      </div>
    </div>

    {/* <!-- Logo Cloud --> */}
    

    {/* <!-- Alternating Feature Sections --> */}
    <div class="relative pt-16 pb-32 overflow-hidden">
      <div aria-hidden="true" class="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-gray-100"></div>
      <div class="relative">
        <div class="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-1 lg:grid-flow-col-dense lg:gap-24">
          <div class="px-4 max-w-xl mx-auto sm:px-6 lg:py-1 lg:max-w-none lg:mx-0 lg:px-0">
            <div className="rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A6CF98" fill-opacity="1" d="M0,192L720,224L1440,64L1440,320L720,320L0,320Z"></path></svg>

      {/* ESTE ES EL INICIO DEL TAILWIND */}
        
  

          
      {/* ESTE ES EL FIN DEL TAILWIND */}

            <section className="pb-20 bg-[#A6CF98] -mt-20 rounded-lg ml-0">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap pt-40">
              
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Power</h6>
                    <p className="mt-2 mb-4 text-gray-600 text-center">
                    "We believe in the power of the written word to capture our wonderment, and immerse us in endless stories and worlds. For the love of reading. For the love of books. OnlyBooks!"
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Adventure
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    "We've got your next great adventure...New favorite recipe Affordable textbooks Rare treasures Perfect match or cozy afternoon."
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                      <i className="fas fa-fingerprint"></i>
                    </div>
                    <h6 className="text-xl font-semibold">
                      Books
                    </h6>
                    <p className="mt-2 mb-4 text-gray-600">
                    "Any format, edition, and condition; right at your fingertips."
                    </p>
                  </div>
                </div>
              </div>
            </div>


            <div className="flex flex-wrap items-center mt-28">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto  ">
              <div className="border-b border-gray-200"></div>
                <div className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 mt-6 shadow-lg rounded-full bg-gray-500">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Working with us is a pleasure
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700">
                "We believe in the power of the written word. To capture our wonderment, and immerse us in endless stories and worlds." 
                </p>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700">
                "For the love of reading. For the love of books."
                </p>
                <a
                  href="/"
                  className="font-bold text-gray-800 mt-8 "
                >
                  OnlyBooks!
                </a>
                <div className="mt-6 border-t border-gray-200"></div>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-[#DB6B97]">
                  <img
                    alt="..."
                    src="https://ridgewater.edu/wp-content/uploads/2020/08/RotatorImage_Bookstore.jpg"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                  
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block"
                      style={{
                        height: "95px",
                        top: "-94px"
                      }}
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-[#DB6B97] fill-current"
                      ></polygon>
                    </svg>
                    
                    <h4 className="text-xl font-bold text-white">
                      Used Books
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                    Used books are often treasures that are out-of-print or rare. With Wish Lists you can choose to be notified the instant we find a copy, see how often we find rare titles, and see who else is interested.
                    </p>
                  </blockquote>
                </div>
              </div>

            </div>
          </div>
        </section>
                      <div>
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A6CF98" fill-opacity="1" d="M0,224L720,64L1440,160L1440,0L720,0L0,0Z"></path></svg>
                      </div>
              
            </div>
           
          </div>
         
        </div>
      </div>
      
    </div>

    {/* <!-- Gradient Feature Section --> */}
    <div class="mt-0 bg-gradient-to-r from-green-800 to-[#DB6B97]">
      <div class="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
      
        <div class="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-16">
          <div>
            <div>
              <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* <!-- Heroicon name: outline/inbox --> */}
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </span>
            </div>
            <div class="mt-">
              <h3 class="text-lg font-medium text-white">Only Books</h3>
              <p class="mt-2 text-base text-purple-200">
              "Any format, edition, and condition; right at your fingertips."
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* <!-- Heroicon name: outline/users --> */}
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Power</h3>
              <p class="mt-2 text-base text-purple-200">
              "We believe in the power of the written word.To capture our wonderment,and immerse us in endless stories and worlds.For the love of reading.For the love of books. OnlyBooks."
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* <!-- Heroicon name: outline/trash --> */}
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
            </div>

            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Adventure</h3>
              <p class="mt-2 text-base text-purple-200">
              "We've got your next great adventure...New favorite recipe Affordable textbooks Rare treasures Perfect match or cozy afternoon."
              </p>
            </div>
          </div>

          <div>
            <div>
              <span class="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                {/* <!-- Heroicon name: outline/trash --> */}
                <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </span>
            </div>
            <div class="mt-6">
              <h3 class="text-lg font-medium text-white">Easy</h3>
              <p class="mt-2 text-base text-purple-200">
              "At OnlyBooks, we make it easy for you to love books too."
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>

    {/* <!-- Stats section --> */}
    <div class="relative bg-gray-900">
      <div class="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
        <div class="h-full w-full xl:grid xl:grid-cols-2">
          <div class="h-full xl:relative xl:col-start-2">
            <img class="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0" src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100" alt="People working on laptops"/>
            <div aria-hidden="true" class="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"></div>
          </div>
        </div>
      </div>
      
    </div>

    {/* <!-- CTA Section --> */}
    <div class="bg-white">
      <div class="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 class="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span class="block">Ready to get started?</span>
          <span class="block bg-gradient-to-r from-purple-600 to-[#DB6B97] bg-clip-text text-transparent">Get in touch or create an account.</span>
        </h2>
        
        <div class="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
          <a href="#" class="flex items-center justify-center bg-gradient-to-r from-[#DB6B97] to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-[#DB6B97] hover:to-indigo-700">
            Learn more
          </a>
          <a href="#" class="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-[#] hover:bg-indigo-100">
            Get started
          </a>
        </div>
      </div>
    </div>
  </main>


</div>







        </>
        
    )
}

export default Home
