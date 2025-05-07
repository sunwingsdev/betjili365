import { useState } from "react";
import image from "@/assets/admin/adminImage.webp";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";
import { FaKey } from "react-icons/fa";
import { FaCircleUser } from "react-icons/fa6";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import { logout, setCredentials } from "@/redux/slices/authSlice";
import SpinLoader from "@/components/shared/loaders/Spinloader";

const AdminLogin = () => {
  const { data: homeControls } = useGetHomeControlsQuery();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  // Update form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: loginData } = await loginUser(formData);

      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        if (userData?.role !== "admin") {
          dispatch(logout());
          localStorage.removeItem("token");
          addToast("Please submit admin username and password!!!", {
            appearance: "error",
            autoDismiss: true,
          });
        } else {
          dispatch(setCredentials({ token: loginData.token, user: userData }));
          addToast("Login successful", {
            appearance: "success",
            autoDismiss: true,
          });
          navigate("/dashboard");
        }
      }
      // eslint-disable-next-line no-unused-vars
    } catch (error) {
      addToast("Provide valid username and password", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  return (
    <div className="flex flex-col md:flex-row md:h-screen bg-black">
      {/* Left Side Image */}
      <div className="relative w-full md:w-1/2 ">
        <img
          src={image}
          alt="Login Background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-30"></div>
      </div>

      {/* Right Side Login */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-6 lg:px-20 py-3 -mt-12 md:mt-0 z-10 ">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${
                logoHomeControl?.image
              }`}
              alt=""
            />
            <h2 className="text-white text-lg font-semibold mt-2">
              Welcome To Admin Login
            </h2>
          </div>

          {/* Form */}
          <form className="mt-6 space-y-6" onSubmit={handleSubmit}>
            {/* Username Field */}
            <div className="">
              <label className="block text-white mb-1" htmlFor="username">
                Username
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Username"
                  className="w-full pl-10 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaCircleUser />
                </span>
              </div>
            </div>

            {/* Password Field */}
            <div className="">
              <label className="block text-white mb-1" htmlFor="password">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Password"
                  className="w-full pl-10 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
                <span className="absolute left-3 top-3.5 text-gray-400">
                  <FaKey />
                </span>
              </div>
            </div>

            {/* Login Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-3 rounded-md transition"
              >
                {isLoading ? <SpinLoader /> : <>&#x279E; Log In</>}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
