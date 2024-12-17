import backgroundImage from "../../assets/login/1.jpg";
import logoImage from "../../assets/login/image.jpg";

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "AndiSembiring" && password === "Andi0000") {
      navigate("/DashboardAdmin");
    } else {
      setErrorMessage("Invalid username or password!");
    }
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 h-full bg-contain bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>

      <div className="w-1/2 bg-white flex flex-col items-center justify-center relative">
        <div className="absolute top-8 left-8">
          <div className="group relative cursor-pointer">
            <img
              src={logoImage}
              alt="Logo"
              className="h-24 w-24 transition-transform duration-300 ease-in-out transform group-hover:scale-110 relative z-10"
            />
            <div className="absolute inset-0 bg-blue-200 opacity-0 group-hover:opacity-100 rounded-full filter blur-xl transition-opacity duration-300 ease-in-out transform group-hover:scale-150"></div>
          </div>
        </div>

        <div className="w-3/4 max-w-md mt-16">
          <h2 className="text-3xl font-bold mb-8 text-left">Sign up</h2>
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="get@ziontutorial.com"
                className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-orange-300"
              />
            </div>
            <div>
              <div className="flex flex-col">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border rounded-xl px-4 py-3 focus:outline-none focus:ring focus:ring-orange-300"
                />
                <div className="flex justify-between w-full mt-4">
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="mr-2"
                    />
                    <span className="text-sm text-gray-500">Show password</span>
                  </div>

                  <a href="#" className="text-sm text-gray-500 hover:underline">
                    Forgot password?
                  </a>
                </div>
              </div>
            </div>

            {errorMessage && (
              <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
            )}

            <div className="mt-10">
              <button
                type="submit"
                className="block w-full bg-[#FF7043] text-white py-4 rounded-xl font-semibold text-center hover:bg-orange-600 transition-colors duration-200"
              >
                Log in
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
