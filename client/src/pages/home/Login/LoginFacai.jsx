import { useContext, useRef, useState } from "react";
import signUpImage from "../../../assets/register/image_157256.jpg";

// import mainLogo from "../../../assets/v2/loaderLogo.png";
import mainLogo from "../../../assets/betJilliImages/images/member-logo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useToasts } from "react-toast-notifications";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { setCredentials } from "@/redux/slices/authSlice";

const LoginFacai = ({ handleRegisterOpen, setIsModalForgetOpen }) => {
  const { language } = useContext(LanguageContext);
  const [step, setStep] = useState(0); // <-- Start from Step 0

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToasts();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const translations = {
    en: {
      title: "Login",
      username: "Username",
      placeholderUsername: "4-15 char, allow number",
      password: "Password",
      placeholderPassword: "6-20 char, allow number",
      finalSubmit: "Login",
    },
    bn: {
      title: "লগইন",
      username: "ব্যবহারকারীর নাম",
      placeholderUsername: "৪-১৫ অক্ষর নাম্বার এলাউ",
      password: "পাসওয়ার্ড",
      placeholderPassword: "৬-২০ অক্ষর নাম্বার এলাউ",
      finalSubmit: "লগইন",
    },
  };

  const t = translations[language] || translations.bn;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Optional validation (based on your previous RegEx logic)
    if (!/^[a-zA-Z0-9]*$/.test(formData.username)) {
      addToast("Username must contain only letters and numbers", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    try {
      const { data: loginData } = await loginUser({
        username: formData.username,
        password: formData.password,
      });

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
    <div>
      {/* largeDevice */}
      {/* <div className="bg-primary-primaryColor">
        <div className="py-5 hidden md:block  mx-auto lg:max-w-6xl  text-white">
          <div className="flex flex-col lg:items-center lg:flex-row gap-4 lg:gap-0  p-8">
            
            <div className="lg:w-full lg:h-[600px]">
              <img
                src={signUpImage}
                alt="Sign Up Illustration"
                className="w-full h-full cursor-pointer"
                onClick={() => console.log("Image clicked")}
              />
            </div>

            
            <form
              onSubmit={handleSubmit}
              className="lg:w-2/3 lg:h-[800px] bg-componentBgPrimary text-sm p-10 space-y-6"
            >
              <div>
                <h3 className="text-2xl text-textSecondaryColor">Login</h3>
              </div>
              <div>
                <h3>{t.username}</h3>
                <input
                  type="text"
                  name="username"
                  placeholder={t.placeholderUsername}
                  className="w-full p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>

              <div className="  flex flex-col">
                <h3>{t.password}</h3>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    placeholder={t.placeholderPassword}
                    className="w-full p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <FaEye className="text-textPrimary " />
                    ) : (
                      <FaEyeSlash className="text-textPrimary " />
                    )}
                  </div>
                </div>
              </div>
              <div className="flex justify-end">
                <Link to="/forgetpassword">
                  <p className="text-textSecondaryColor">Forget Password</p>
                </Link>
              </div>

              <div className="flex justify-between gap-6 text-sm items-center">
                <div className="w-full">
                  <button
                    type="submit"
                    className="bg-primary-primaryColorTwo w-full text-white px-6 py-2 rounded-md ml-auto"
                  >
                    {isLoading ? "Logging In..." : t.finalSubmit}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      
      <div className="pb-14  h-screen md:h-auto   mx-auto lg:max-w-6xl text-xs bg-jili-bgBlack text-white">
        <div className="flex flex-col  gap-4   ">
          <div className="  p-6   flex justify-center items-center ">
            <img src={mainLogo} alt="" className="w-[60%]" />
          </div>

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="  text-sm  space-y-6">
            <div className="p-2">
              <div className="bg-jili-bgSecondary bg-opacity-70 p-2 rounded flex flex-col gap-2  ">
                <div className="flex flex-col gap-2">
                  <h3>{t.username}</h3>
                  <input
                    type="text"
                    name="username"
                    placeholder={t.placeholderUsername}
                    className="w-full  p-2 text-white bg-jili-bgSecondary  outline-textSecondaryColorThree rounded-md"
                    value={formData.username}
                    onChange={handleChange}
                  />
                </div>

                <div className="  flex flex-col gap-2">
                  <h3>{t.password}</h3>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder={t.placeholderPassword}
                      className="w-full p-2 text-white bg-jili-bgSecondary outline-textSecondaryColorThree rounded-md"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <div
                      className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEye className=" " />
                      ) : (
                        <FaEyeSlash className=" " />
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="border border-textSecondaryColorThree rounded px-2 py-1 cursor-pointer">
                    <p
                      onClick={() => setIsModalForgetOpen(true)}
                      className="text-xs text-textSecondaryColorThree"
                    >
                      {language === "en"
                        ? "Forget Password"
                        : "পাসওয়ার্ড ভুলে গেছেন?"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-between gap-6 text-sm items-center p-2">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-formBgColor w-full text-white px-6 py-2 rounded-md ml-auto"
                >
                  {t.finalSubmit}
                </button>
              </div>
            </div>
            {/* <div className="flex justify-between gap-6 text-sm items-center p-2">
              <div className="w-full">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="bg-backgroundSecondaryColor w-full text-white px-6 py-2 rounded-md ml-auto"
                >
                  {isLoading ? "Logging In..." : t.finalSubmit}
                </button>
              </div>
            </div> */}
            <div className="flex justify-center gap-2">
              <p>
                {language === "en"
                  ? "Do not have an account"
                  : "একাউন্ট নেই ? "}{" "}
              </p>
              <strong
                onClick={handleRegisterOpen}
                className="text-textSecondaryColor cursor-pointer"
              >
                {language === "en" ? "Sign up" : "সাইন আপ ? "}
              </strong>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginFacai;
