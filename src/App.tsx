function App() {
  return (
    <>
      <div className="h-screen w-screen overflow-x-hidden">
        <body className="bg-white dark:bg-zinc-900">
          <div className="w-full flex justify-between items-center fixed top-0 bg-white dark:bg-zinc-700 border-b-2">
            <div className="flex justify-center items-center text-center lg:pl-5"><img
                    src="https://avatars.githubusercontent.com/u/169891388?v=4"
                    alt=""
                    className=" h-16"
                  />
                  <div className=" font-bold text-2xl text-gray-900 dark:text-white pl-2 ">
                     ZeroDoller
                  </div>
                  </div>
            
            
            {/* <div className="box">
                  <div className="box-wrapper">
                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200">
                      <button className="outline-none focus:outline-none">
                        <svg
                          className=" w-5 text-gray-600 h-5 cursor-pointer"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="search for Companies or Creatores"
                        x-model="q"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                      />
                    </div>
                  </div>
                </div> */}
            
            
          </div>

          <div className="main">
            <div className="px-4 sm:px-8 lg:px=-16 lg:px-80 mx-auto  ">
              <div className="hero">
                <div className="hero-headline flex flex-col items-center justify-center pt-24 text-center">
                  <img
                    src="https://avatars.githubusercontent.com/u/169891388?v=4"
                    alt=""
                    className=" h-40"
                  />
                  <h1 className=" font-bold text-3xl text-gray-900 dark:text-white">
                    Stunning Companies & Greate Creatores
                  </h1>
                  <p className=" font-base text-base text-gray-600 dark:text-zinc-400">
                    high quality stock images and videos shared by our talented
                    community.
                  </p>
                </div>

                <div className="box pt-6 pb-10">
                  <div className="box-wrapper">
                    <div className=" bg-white rounded flex items-center w-full p-3 shadow-sm border border-gray-200 dark:bg-black dark:border-zinc-800">
                      <button className="outline-none focus:outline-none">
                        <svg
                          className=" w-5 text-gray-600 h-5 cursor-pointer dark:text-white"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                        </svg>
                      </button>
                      <input
                        type="search"
                        name=""
                        id=""
                        placeholder="search for Companies or Creatores"
                        x-model="q"
                        className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent dark:text-white"
                      />
                      <div className="select">
                        <select
                          name=""
                          id=""
                          x-model="image_type"
                          className="text-sm outline-none focus:outline-none bg-transparent"
                        >
                          <option value="all" selected>
                            All
                          </option>
                          <option value="photo">Photo</option>
                          <option value="illustration">Illustration</option>
                          <option value="vector">Vector</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="">
                <section
                  className=" grid grid-cols-1 md:grid-cols-2 gap-4"
                >

                
                  <div>

                    <div className="max-w-md p-px border-2 shadow-sm hover:bg-orange-600 dark:border-zinc-700 hover:border-orange-600 ">
                      <div className=" p-10 bg-white dark:bg-black">
                      <h1 className=" font-bold text-3xl text-gray-900 pb-5 dark:text-white">
                    Stunning Companies & Greate Creatores
                  </h1>
                      <div
                      className="w-full justify-center flex bg-zinc-500"><img
                      src="https://avatars.githubusercontent.com/u/169891388?v=4"
                      alt=""
                      className=" h-40 justify-center"
                    /></div>
                        <p className="text-gray-700 dark:text-gray-300 pt-5">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

                        <div className="mt-8 flex gap-4 items-center">
                          <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                  <div>

                    <div className="max-w-md p-px bg-gradient-to-b from-blue-300 to-pink-300 dark:from-blue-800 dark:to-purple-800 ">
                      <div className=" p-10 bg-white dark:bg-gray-900">
                        <p className="text-gray-700 dark:text-gray-300">I absolutely love Tailus! The component blocks are beautifully designed and easy to use, which makes creating a great-looking website a breeze.</p>

                        <div className="mt-8 flex gap-4 items-center">
                          <img className="h-12 w-12 rounded-full" src="https://pbs.twimg.com/profile_images/1599029039297077249/p0znhFdE_400x400.jpg" alt="" />
                          <div>
                            <h3 className="text-lg font-medium text-gray-700 dark:text-white">Oketa Fred</h3>
                            <span className="text-sm tracking-wide text-gray-600 dark:text-gray-400">Fullstack Developer</span>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>
                </section>
                <div className="h-24"/>
                </div>



              </div>
              
                {/* <section className="fixed max-w-md p-4 mx-auto bg-white border border-gray-200 dark:bg-gray-800 left-12 bottom-16 dark:border-gray-700 rounded-2xl">
    <h2 className="font-semibold text-gray-800 dark:text-white">🍪 We use cookies!</h2>

    <p className="mt-4 text-sm text-gray-600 dark:text-gray-300">Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent. <a href="#" className="font-medium text-gray-700 underline transition-colors duration-300 dark:hover:text-blue-400 dark:text-white hover:text-blue-500">Let me choose</a>. </p>
    
    <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">Closing this modal default settings will be saved.</p>
    
    <div className="grid grid-cols-2 gap-4 mt-4 shrink-0">
        <button className=" text-xs bg-gray-900 font-medium rounded-lg hover:bg-gray-700 text-white px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Accept all
        </button>

        <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Reject all
        </button>

        <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Preferences
        </button>

        <button className=" text-xs border text-gray-800 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 font-medium rounded-lg px-4 py-2.5 duration-300 transition-colors focus:outline-none">
            Close
        </button>
    </div>
</section> */}
              
              <footer className="p-5 text-sm text-gray-600 text-center inline-flex items-center fixed bottom-0 right-0 w-full justify-between bg-white border-t-2">
                <div className="flex">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="heart"
                  className="svg-inline--fa fa-heart fa-w-16 text-red-600 w-4 h-4 mr-4 align-middle"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"
                  ></path>
                </svg>
                <span>
                  Made by{" "}
                  <a
                    href="https://tailwindcss.com/"
                    target="_new"
                    className="text-teal-600 font-semibold"
                  >
                    iamprathameshmore
                  </a>
                  {/* & <a href="https://github.com/alpinejs/alpine" target="_new" className="text-teal-600 font-semibold">alpinejs</a> */}
                </span>
                </div>
                <div className="pr-5">
                <a href="#" className="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-5" viewBox="0 0 16 16">
<path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                </svg>
                        
                            </a>
                </div>
              </footer>
            </div>
          </div>
          {/* <script
            src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.3.5/dist/alpine.min.js"
            defer
          ></script> */}
        </body>
      </div>
    </>
  );
}

export default App;
