import React from "react";
import {Link, NavLink} from 'react-router-dom'
import Login from "./Login";
import {useForm} from 'react-hook-form'

function Signup() {

    // Get 'useForm' dependencies as it is from the 'react-hook-form' website follow the steps as it is
    const {register,handleSubmit,formState: { errors }} = useForm();
    const onSubmit = (data) => console.log(data);
  

  return (
    <div className="">

    {/* <div className="w-80 border-none outline-none container items-center mx-auto justify-center"> */}
    
    <div className="h-screen flex items-center mx-auto justify-center w-96">
      {/* You can open the modal using document.getElementById('ID').showModal() method */}
 
      <div id="my_modal_3" className="w-[800px]">
      <div className="modal-box">
      <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <NavLink to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</NavLink>
    
        <div className=" dark:bg-slate-900 dark:text-white border border-1 p-5 rounded-md">

          <h3 className="font-bold text-lg text-blue-500">Signup</h3>
          <div className="mt-4 space-y-2">
          <span>Name</span>
            <br />
            <input required
              className="w-60 px-3 border outline-none rounded-md"
              type="text"
              placeholder="Enter you Name"
              {...register("name", { required: true })}
            />
              <br />
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}
            <br />
            {/* email */}
            <span>Email</span>
            <br />
            <input required
              className="w-60 px-3 border outline-none rounded-md"
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
            <input required
              className="w-60 px-3 border outline-none rounded-md"
              type="password"
              placeholder="Enter you Password"
              {...register("password", { required: true })}
            />
            <br />
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            <br />
            <div className="flex justify-between px-1">
              <button className="bg-blue-400 hover:bg-blue-500 text-white rounded-md text-sm mt-10 w-[60px] h-[40px]">
                Signup
              </button>
              <p className=" mt-6 text-sm ">
                Have an account?<Login/>
                <span className="text-blue-400 cursor-pointer underline ">
                  
                  <button onClick={()=>document.getElementById('my_modal_3').showModal()}>
                    <div className="bg-none">
                  

                    </div>
                    </button>
                </span>
              </p>
            </div>
            </div>
          </div>
            </form>
        </div>
      </div>
    </div>
    </div>

    //     <div className='text-center items-center mx-auto justify-center '>
    //     <div className='pt-24 text-center container w-80 items-center justify-center mx-auto my-2'>
    //       <label className="flex items-center gap-2 w-80 border px-2 py-1 rounded-md outline-none my-2">
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" /><path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" /></svg>
    //   <input type="text" className="outline-none" placeholder="Email" />
    // </label>
    // <label className="flex items-center gap-2 w-80 border px-2 py-1 rounded-md outline-none my-2">
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" /></svg>
    //   <input type="text" className="outline-none" placeholder="Username" />
    // </label>
    // <label className="flex items-center gap-2 w-80 border px-2 py-1 rounded-md outline-none my-2">
    //   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-4 h-4 opacity-70"><path fillRule="evenodd" d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z" clipRule="evenodd" /></svg>
    //   <input type="password" className="outline-none" value="password" placeholder='Password' />
    // </label>
    //     </div>
    //     </div>
  );
}

export default Signup;
