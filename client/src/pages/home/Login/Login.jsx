import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaChevronLeft, FaTimes, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { setCredentials } from "@/redux/slices/authSlice";
import SpinLoader from "@/components/shared/loaders/Spinloader";
import { useToasts } from "react-toast-notifications";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const { addToast } = useToasts();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleInputChange = (value) => {
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setUsername(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: loginData } = await loginUser({ username, password });

      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        dispatch(setCredentials({ token: loginData.token, user: userData }));
        addToast("Login successful", {
          appearance: "success",
          autoDismiss: true,
        });

        if (userData?.role !== "admin") {
          navigate("/profile");
        } else {
          navigate("/dashboard");
        }
      }
    } catch (error) {
      addToast("Provide valid username and password", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  return (
    <div className="bg-black h-screen">
      <div className="relative bg-slate-600 px-3 py-3 text-white text-center md:hidden">
        <FaChevronLeft
          className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 cursor-pointer"
          onClick={handleGoBack}
        />
        <p>লগ ইন</p>
      </div>
      <div className="flex items-center justify-center flex-col">
        <img
          className=""
          src="https://img.b112j.com/bj/h5/assets/images/sponsor/bn-sponsor.jpg?v=1727170388190&source=mcdsrc"
          alt=""
        />
        <div className="w-full p-3 text-[#fdfdfd] md:max-w-xl">
          <form onSubmit={handleSubmit} action="">
            {/* username Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded bg-[#292929] mb-4">
              <Label className="text-base w-1/3" htmlFor="username">
                ব্যবহারকারীর নাম
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type="text"
                  id="username"
                  value={username}
                  onChange={(e) => handleInputChange(e.target.value)}
                  placeholder="ব্যবহারকারীর নাম"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {username && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setUsername("")}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded bg-[#292929]">
              <Label className="text-base w-1/3" htmlFor="password">
                পাসওয়ার্ড
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="পাসওয়ার্ড"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {password && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-12 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setPassword("")}
                  >
                    <FaTimes />
                  </div>
                )}
                {/* Show/Hide Password button */}
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#fff] text-2xl cursor-pointer"
                  onClick={() => setShowPassword(!showPassword)} // Toggle show/hide password
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>
            <div className="flex items-center justify-end my-2">
              {" "}
              <p className="border inline-block px-3 py-0.5 text-[#14805e] border-[#14805e]">
                পাসওয়ার্ড ভুলে গেছেন?
              </p>
            </div>
            <Button
              type="submit"
              className="bg-[#14805e] w-full text-base py-6"
            >
              {isLoading ? <SpinLoader /> : "লগ ইন"}
            </Button>
            <p className="px-3 py-1.5 text-[#fff] text-center">
              একাউন্ট নেই?{" "}
              <Link to="/register">
                <span className="text-[#ffdf1a] underline"> সাইন আপ</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
