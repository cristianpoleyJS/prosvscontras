export default function FooterApp () {
  return (
        <>
          <footer className="pt-10 sm:mt-10 pt-10">
              <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                  <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                      <div className="text-xs uppercase text-black font-medium mb-6">
                          Getting Started
                      </div>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Installation
                      </a>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Release Notes
                      </a>
                  </div>

                  <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                      <div className="text-xs uppercase text-black font-medium mb-6">
                          Core Concepts
                      </div>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Utility-First
                      </a>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Responsive Design
                      </a>
                  </div>

                  <div className="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                      <div className="text-xs uppercase text-black font-medium mb-6">
                          Customization
                      </div>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Configuration
                      </a>
                      <a href="#" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                          Theme Configuration
                      </a>
                  </div>
              </div>

              <div className="pt-2">
                  <div className="flex pb-5 px-3 m-auto pt-5 border-t border-gray-500 text-black text-sm flex-col md:flex-row max-w-6xl">
                      <div className="mt-2">
                          © Copyright 2021 - Cristian Poley. All Rights Reserved.
                      </div>

                      <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                          <a href="#" className="w-6 mx-1">
                              <i className="uil uil-facebook-f"></i>
                          </a>
                      </div>
                  </div>
              </div>
          </footer>
          <style jsx>{`
            
            footer {
              background-image: url('/icons/iconBackgroundWave.svg');
              background-position: center;
              background-size: cover;
            }
          `}
          </style>
        </>
  )
}
