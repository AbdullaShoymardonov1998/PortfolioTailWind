import React from "react";
import work1 from '../assets/work1.png';
import work2 from '../assets/work2.png';
import work3 from '../assets/work3.png';
import work4 from '../assets/work4.png';
import work5 from '../assets/work5.png';
import work6 from '../assets/work6.png';
const Works = () => {
  return (
    <div name="works" className="w-full md:h-screen bg-gray-900 text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-teal-600">
            Works
          </p>
          <p className="py-4">Checkout my works</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div
            style={{ backgroundImage: `url(${work1})`, backgroundSize: 'cover'}}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">Shopping Cart using Redux</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work3})`, backgroundSize: 'cover'}}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">Shopping Cart using Redux</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/AbdullaShoymardonov1998/ReduxCart">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                       Code 
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work2})`, backgroundSize: 'cover' }}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">Auth and counter app</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/AbdullaShoymardonov1998/SimpleReduxProject">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work4})`, backgroundSize: 'cover' }}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">Food Order application</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/AbdullaShoymardonov1998/Food-Order-App">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work5})`, backgroundSize :'cover' }}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">Meetup application</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/AbdullaShoymardonov1998/React-Blog">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${work6})`, backgroundSize: 'cover' }}
          >
            <div className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">
              {/* Hover effects */}
              <div className="opacity-0 group-hover:opacity-100">
                <span className="text-2xl font-bold text-white">ReactJS application</span>
                <div className="pt-8 text-center">
                  <a href="/">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Demo
                    </button>
                  </a>
                  <a href="https://github.com/AbdullaShoymardonov1998/E-Commerce-Project">
                    <button className="text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg">
                      Code
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Works;
