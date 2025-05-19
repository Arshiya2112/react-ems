import React, { useState } from "react";

const Login = ({handleLogin}) => {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)

    setEmail("")
    setPassword("")
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="border-2 border-gray-300 rounded-xl p-20">
        <form
          onSubmit={(e) => {submitHandler(e)}}
          className="flex flex-col items-center justify-center"
        >
          <input
            required
            value={email}
            className="text-black outline-none border-2 border-gray-100 rounded-lg py-3 px-5 text-lg placeholder:text-gray-400"
            type="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            placeholder="Enter your email"
          />
          <input
            required
            value={password}
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            className="text-black outline-none border-2 mt-3 border-gray-100 rounded-lg py-3 px-5 text-lg placeholder:text-gray-400"
            type="password"
            placeholder="Enter your password"
          />
          <button className="text-white outline-none border-2 mt-10 border-gray-100 rounded-lg py-2 px-5 text-xl placeholder:text-gray-400 bg-blue-600 hover:bg-green-600 cursor-pointer">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
