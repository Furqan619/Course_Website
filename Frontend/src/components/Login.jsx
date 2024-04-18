import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {

    // Get 'useForm' dependencies as it is from the 'react-hook-form' website follow the steps as it is
  const {register,handleSubmit,formState: { errors }} = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
      <button
        className="btn btn-sm text-white bg-gray-800 hover:bg-gray-500 "
        onClick={() => document.getElementById("my_modal_3").showModal()}
      >
        Login
      </button>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box dark:bg-slate-900 dark:text-white border border-1">

        {/* Form start from here */}
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            {/* if there is a button in form, it will close the modal */}

            <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" onClick={() => document.getElementById("my_modal_3").close()}>
            
              ✕
            </Link>

            <h3 className="font-bold text-lg text-blue-500">Login</h3>

            <div className="mt-4 space-y-2">
              {/* email */}
              <span>Email</span>
              <br />
              <input
                className="w-80 px-3 border outline-none rounded-md"
                type="email"
                placeholder="Enter you Email"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />

              {/* password */}
              <span>Password</span>
              <br />
              <input
                className="w-80 px-3 border outline-none rounded-md"
                type="password"
                placeholder="Enter you Password"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              
              {/* Login Button */}
              <div className="flex justify-between px-1">
                <button
                  type="submit"
                  className="bg-blue-400 hover:bg-blue-500 text-white rounded-md px-2 py-1 text-sm mb-1 mt-6"
                >
                  Login
                </button>
                <p className=" mt-6">
                  Not registered?
                  <Link
                    to="/signup"
                    className="text-blue-400 cursor-pointer underline " onClick={() => document.getElementById("my_modal_3").close()}
                  >
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
