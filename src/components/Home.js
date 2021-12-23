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
    

    {/* <!-- Stats section --> */}
    

    {/* <!-- CTA Section --> */}
    <svg className="-mb-16"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A6CF98" fill-opacity="1" d="M0,192L40,165.3C80,139,160,85,240,74.7C320,64,400,96,480,144C560,192,640,256,720,256C800,256,880,192,960,181.3C1040,171,1120,213,1200,229.3C1280,245,1360,235,1400,229.3L1440,224L1440,320L1400,320C1360,320,1280,320,1200,320C1120,320,1040,320,960,320C880,320,800,320,720,320C640,320,560,320,480,320C400,320,320,320,240,320C160,320,80,320,40,320L0,320Z"></path></svg>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#A6CF98" fill-opacity="1" d="M0,320L40,282.7C80,245,160,171,240,165.3C320,160,400,224,480,213.3C560,203,640,117,720,117.3C800,117,880,203,960,229.3C1040,256,1120,224,1200,192C1280,160,1360,128,1400,112L1440,96L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
    <div class="bg-red">
    
      <div class="max-w-4xl -mt-96 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
      
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
