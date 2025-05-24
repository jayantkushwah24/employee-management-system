import React from "react";

const Login = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    console.log("submit");
  }
  return (
    <div className="flex item-center justify-center h-screen w-screen">
      <div className="border-2 rounded-xl border-emerald-600 p-20">
        <form 
        onSubmit={(e) => onSubmitHandler(e)}
        className="flex flex-col items-center justify-center">
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            required
            className="outline-none bg-transparent border-2 border-emerald-600 font-medium text-lg py-2 px-6 rounded-full mt-3 placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button
            
            className="mt-7 text-white border-none outline-none hover:bg-emerald-700 font-semibold bg-emerald-600 text-lg py-2 px-8 w-full rounded-full placeholder:text-white"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
