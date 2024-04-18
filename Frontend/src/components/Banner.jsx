import React from "react";
import banner from '../../public/Banner.png'

function Banner() {
  return (
    // In Medium and Large devices flex direction will be row and in small divices flex direction will be column
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row justify-around my-10">
      {/* in Medium and Large devices screen should be divided into 1/2 50 50 */}

      {/* Left Banner */}
      <div className="w-full order-2 md:order-1 md:w-1/2 md:mt-32 mt-12 ">
        <div className="space-y-12  ">
          <h1 className="text-3xl font-bold">
            Hello, Welcome to Course Mania where you can 
            <span className="text-3xl font-bold text-blue-500 ml-1">
              Upgrade your Skills!
            </span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            minima possimus perferendis corrupti architecto distinctio.
          </p>
        </div>
        <div>
            {/* Email Input */}
          <label className="input input-bordered flex items-center gap-2 my-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow border-none outline-none" placeholder="Email" />
          </label>
        </div>
        <button className="bg-blue-500 text-white px-3 py-2 rounded-md">Submit</button>
      </div>

      {/* RIght Banner */}
      <div className="w-full order-1 md:w-1/2">
      <div className="">
        <img  src={banner} className="w-80 h-80 mt-14 md:m-24" alt="" />
      </div>
      </div>
    </div>
  );
}

export default Banner;
