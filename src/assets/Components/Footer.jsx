import React from 'react'

const Footer = () => {
  return (
    <div>
    <footer className="shadow bg-zinc-100  py-8">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and About Section */}
          <div>
            <div className="flex items-center mb-4">
              <span className="ml-3 text-xl font-bold">Personal</span>
            </div>
            <p className="text-gray-600">
              We are creating high-quality resources and tools to aid
              developers during the development of their projects.
            </p>
            <div className="flex space-x-4 mt-4">
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-600"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-blue-400"
              >
                <i className="fab fa-twitter"></i>
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gray-800 text-white rounded-full flex items-center justify-center hover:bg-pink-500"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          {/* Links Section 1 */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Personal</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Resources
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Contact
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section 2 */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Help</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Support
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Sign Up
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Sign In
                </a>
              </li>
            </ul>
          </div>

          {/* Links Section 3 */}
          <div>
            <h5 className="text-lg font-semibold mb-3">Products</h5>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Windframe
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Loop
                </a>
              </li>
              <li>
                <a href="/" className="text-gray-700 hover:text-blue-500">
                  Contrast
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="text-center mt-8 text-gray-600">
          <small>&copy; All rights reserved by Parth Purohit .</small>

        </div>
      </div>
    </footer>
  </div>
  
  )
}

export default Footer
