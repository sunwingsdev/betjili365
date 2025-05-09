import { useContext, useRef, useState } from "react";
import signUpImage from "../../../assets/register/image_157256.jpg";
import mainLogoJili from "../../../assets/betJilliImages/images/member-logo.png";
import mobileImage from "../../../assets/v2/mobileImage.jpg";
import bdImage from "../../../assets/v2/BD.png";
import INImage from "../../../assets/v2/IN.png";
import LkImage from "../../../assets/v2/LK.png";
import mainLogo from "../../../assets/v2/loaderLogo.png";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { TbReload } from "react-icons/tb";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import { LanguageContext } from "@/Context/LanguageContext";
import { FaChevronLeft } from "react-icons/fa";
import RegisterModal from "./RegisterModal";
import registerBg from "../../../assets/registerBg.png";
import { useToasts } from "react-toast-notifications";
import {
  useAddUserMutation,
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import SpinLoader from "@/components/shared/loaders/Spinloader";
import { useGetHomeControlsQuery } from "@/redux/features/allApis/homeControlApi/homeControlApi";

const generateCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString();
};

const RegisterFacai = ({ handleLoginOpen, setIsModalOpen }) => {
  const [addUser] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { addToast } = useToasts();
  const { language } = useContext(LanguageContext);
  const [step, setStep] = useState(0); // <-- Start from Step 0
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(generateCode());

  const { data: homeControls } = useGetHomeControlsQuery();
  const logoHomeControl = homeControls?.find(
    (control) => control.category === "logo" && control.isSelected === true
  );

  const dropdownRef = useRef(null);
  const [codeDropdownOpen, setCodeDropdownOpen] = useState(false);
  const codeDropdownRef = useRef(null);

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    email: "",
    phone: "",
    referralCode: "",
    currency: "BDT",
    countryCode: "+880",
    verificationCode: "",
    agreed: true,
  });
  const countryCodes = [
    { code: "+880", country: "BD", flag: bdImage },
    { code: "+91", country: "IN", flag: INImage },
    { code: "+1", country: "LK", flag: LkImage },
  ];

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const translations = {
    en: {
      title: "Sign Up",
      username: "Username",
      placeholderUsername: "4-15 char, allow number",
      password: "Password",
      placeholderPassword: "6-20 char, allow number",
      confirmPassword: "Confirm Password",
      placeholder: "Enter here",
      submit: "Next",
      currency: "Currency",
      phoneNumber: "Phone Number",
      countryCode: "Country Code",
      email: "Email",
      verificationCode: "Verification Code",
      placeholderVerificationCode: "4 digit code allow",
      referralCode: "Refer Code",
      placeholderReferralCode: "Enter if you have one",

      legal: "I am of legal age and agree to the",
      terms: "Terms & Conditions",
      back: "Back",
      finalSubmit: "Sign Up",
    },
    bn: {
      title: "নিবন্ধন",
      username: "ব্যবহারকারীর নাম",
      placeholderUsername: "৪-১৫ অক্ষর নাম্বার এলাউ",
      password: "গোপন নম্বর",
      placeholderPassword: "৬-২০ অক্ষর নাম্বার এলাউ",
      confirmPassword: "পাসওয়ার্ড নিশ্চিত করুন",
      placeholder: "এখানে পূরণ করুন",
      submit: "পরবর্তী",
      currency: "মুদ্রা বেছে নিন",
      phoneNumber: "ফোন নম্বর",
      countryCode: "কান্ট্রি কোড",
      email: "ইমেইল",
      verificationCode: "যাচাইকরণ কোড",
      placeholderVerificationCode: "4 ডিজিটের কোড লিখুন",
      referralCode: "রেফার কোড ",
      placeholderReferralCode: "আপনার যদি থাকে তবে প্রবেশ করুন",
      legal: "আমি বৈধ বয়সের এবং সম্মত আছি",
      terms: "শর্তাবলী ",
      back: "পেছনে ",
      finalSubmit: "নিশ্চিত করুন",
    },
  };

  const options = [
    { name: "BDT", image: bdImage },
    { name: "INR", image: INImage },
    { name: "LKR", image: LkImage },
  ];
  const handleCurrencySelect = (option) => {
    setFormData({ ...formData, currency: option.name });
    setDropdownOpen(false);
  };
  const handleCodeSelect = (option) => {
    setFormData({ ...formData, countryCode: option.code });
    setCodeDropdownOpen(false);
  };

  const t = translations[language] || translations.bn;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // const handleCheckboxChange = (e) => {
  //   const { name, checked } = e.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: checked,
  //   }));
  // };

  const handleReloadCode = () => {
    setGeneratedCode(generateCode());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (step === 1) {
      setStep(2);
      return;
    }

    // Step 2 submission
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    if (!formData.agreed) {
      alert("You must agree to the Terms & Conditions");
      return;
    }

    if (formData.verificationCode !== generatedCode) {
      addToast("Verification code does not match.", {
        appearance: "error",
        autoDismiss: true,
      });
      return;
    }

    const { confirmPassword, verificationCode, ...userInfo } = formData;

    try {
      setLoading(true);

      const result = await addUser(userInfo);
      console.log("result", result);
      if (result.data.insertedId) {
        try {
          const { data: loginData } = await loginUser({
            username: formData.username,
            password: formData.password,
          });

          if (loginData.token) {
            const { data: userData } = await getUser(loginData.token);
            dispatch(
              setCredentials({ token: loginData.token, user: userData })
            );
          }
        } catch (err) {
          console.error("Login failed:", err);
        }

        addToast("Registration successful", {
          appearance: "success",
          autoDismiss: true,
        });
        setIsModalOpen(false);
        setLoading(false);
        navigate("/");
      }
    } catch (error) {
      console.error(error.message);
      addToast(error.message, {
        appearance: "error",
        autoDismiss: true,
      });
      setLoading(false);
    }
  };

  return (
    <div>
      {/* largeDevice */}
      {/* <div
        className="bg-primary-primaryColor"
        style={{ backgroundImage: `url(${registerBg})` }}
      >
        <div className="py-5 hidden md:block  mx-auto lg:max-w-6xl  text-white">
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-0   p-8">
            
            <div className="lg:w-full lg:h-[600px]">
              <img
                src={signUpImage}
                alt="Sign Up Illustration"
                className="w-full h-[30rem] cursor-pointer"
                onClick={() => console.log("Image clicked")}
              />
            </div>

            
            <form
              onSubmit={handleSubmit}
              className="lg:w-2/3 lg:h-[800px] bg-componentBgPrimary text-sm p-10 space-y-6"
            >
              
              {step === 0 && (
                <div className="space-y-6 relative">
                  <h3 className="text-textSecondaryColor font-semibold text-lg">
                    Let&apos;s Get Started
                  </h3>

                  <div>
                    <h3 className="text-white mb-1">{t.referralCode}</h3>
                    <input
                      type="text"
                      name="referralCode"
                      placeholder={t.placeholderReferralCode}
                      className="w-full p-2 bg-primary-primaryColor text-white border border-gray-400 rounded-md"
                      value={formData.referralCode}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="relative">
                    <h3 className="text-white mb-1">{t.currency}</h3>

                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full p-2 bg-primary-primaryColor text-white border border-gray-400 rounded-md flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            options.find(
                              (opt) => opt.name === formData.currency
                            )?.image
                          }
                          alt={formData.currency}
                          className="w-6 h-6"
                        />
                        {formData.currency}
                      </div>
                      <span className="text-white">&#9662;</span>
                    </div>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute w-full bg-black text-white rounded mt-1 shadow-md z-10"
                      >
                        {options.map((option, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 hover:text-textSecondaryColor bg-primary-primaryColor hover:bg-black cursor-pointer"
                            onClick={() => handleCurrencySelect(option)}
                          >
                            <img
                              src={option.image}
                              alt={option.name}
                              className="w-6 h-6 mr-2"
                            />
                            {option.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  <button
                    type="button"
                    className="bg-white-to-darkblue w-full text-white px-6 py-2 rounded-md"
                    onClick={() => setStep(1)}
                  >
                    Sign up by Account
                  </button>
                </div>
              )}

              
              {step === 1 && (
                <>
                  <div className="flex ">
                    <button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      className="  text-textSecondaryColor px-4 py-2 rounded-md"
                    >
                      <FaChevronLeft className="text-2xl" />
                    </button>
                    <h3 className="text-textSecondaryColor text-2xl flex  ">
                      {t.title}
                    </h3>
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

                  <div className="flex flex-col">
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

                  <div className="flex flex-col">
                    <h3>{t.confirmPassword}</h3>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        name="confirmPassword"
                        placeholder={t.placeholderPassword}
                        className="w-full p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      <div
                        className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                        onClick={() =>
                          setShowConfirmPassword(!showConfirmPassword)
                        }
                      >
                        {showConfirmPassword ? (
                          <FaEye className="text-textPrimary " />
                        ) : (
                          <FaEyeSlash className="text-textPrimary " />
                        )}
                      </div>
                    </div>
                  </div>

                  
                </>
              )}

             
              {step === 2 && (
                <>
                  <div className="flex ">
                    <button
                      type="button"
                      onClick={() => setStep((prev) => prev - 1)}
                      className="  text-textSecondaryColor px-4 py-2 rounded-md"
                    >
                      <FaChevronLeft className="text-2xl" />
                    </button>
                    <h3 className="text-textSecondaryColor text-2xl flex  ">
                      {t.title}
                    </h3>
                  </div>

                  <div className="mb-4 relative">
                    <h3 className="mb-1">{t.phoneNumber}</h3>
                    <div className="flex gap-2">
                      <div className="relative w-1/3">
                        <div
                          onClick={() => setCodeDropdownOpen(!codeDropdownOpen)}
                          className="p-2 bg-primary-primaryColor text-white border border-gray-400 rounded-md flex items-center justify-between cursor-pointer"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src={
                                countryCodes.find(
                                  (opt) => opt.code === formData.countryCode
                                )?.flag
                              }
                              alt={formData.countryCode}
                              className="w-4 h-4"
                            />
                            {formData.countryCode}
                          </div>
                          <span className="text-white">&#9662;</span>
                        </div>

                        {codeDropdownOpen && (
                          <div
                            ref={codeDropdownRef}
                            className="absolute w-full bg-black text-white rounded mt-1 shadow-md z-10"
                          >
                            {countryCodes.map((option, idx) => (
                              <div
                                key={idx}
                                className="flex items-center p-3 hover:text-textSecondaryColor bg-primary-primaryColor  hover:bg-black cursor-pointer"
                                onClick={() => handleCodeSelect(option)}
                              >
                                <img
                                  src={option.flag}
                                  alt={option.code}
                                  className="w-6 h-6 mr-2"
                                />
                                {option.code}
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <input
                        type="tel"
                        name="phone"
                        placeholder={t.placeholder}
                        className="w-full p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                 

                  <div>
                    <h3>{t.verificationCode}</h3>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        name="verificationCode"
                        placeholder={t.placeholderVerificationCode}
                        className="w-2/3 p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                        value={formData.verificationCode}
                        onChange={handleChange}
                      />
                      <div className="px-4 flex items-center gap-2 rounded-md bg-black">
                        <div className="text-white text-lg">
                          {generatedCode}
                        </div>
                        <button type="button" onClick={handleReloadCode}>
                          <TbReload className="text-2xl text-white" />
                        </button>
                      </div>
                    </div>
                  </div>

                 
                </>
              )}

              
              <div className="flex justify-between gap-6 text-sm items-center">
               
                <div className="w-full">
                  {(step === 1 || step === 2) && (
                    <button
                      type="submit"
                      className="bg-primary-primaryColorTwo w-full text-white px-6 py-2 rounded-md ml-auto"
                      disabled={loading}
                    >
                      {loading ? (
                        <SpinLoader />
                      ) : step === 2 ? (
                        t.finalSubmit
                      ) : (
                        t.submit
                      )}
                    </button>
                  )}

                  {step === 0 && (
                    <div className="text-white py-2 flex flex-col lg:flex-row items-center gap-2">
                      <p>
                        {language === "en"
                          ? "Already have an account?"
                          : "ইতিমধ্যে একটি সদস্যপদ আছে?"}
                      </p>
                      <Link to="/login">
                        <p className="text-textSecondaryColor cursor-pointer underline">
                          {language === "en" ? "Log in" : "প্রবেশ করুন"}
                        </p>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div> */}

      {/* phoneDevice */}
      <div className="pb-14 md:hidden  mx-auto lg:max-w-6xl bg-jili-bgBlack text-white">
        <div className="flex flex-col lg:flex-row gap-4 lg:border-4 border-textPrimary ">
          {/* <div className="     flex justify-center items-center ">
            <img
              src={`${import.meta.env.VITE_BASE_API_URL}${
                logoHomeControl?.image
              }`}
              alt=""
              className="w-[30%]"
            />
          </div> */}
          <div className="  p-6   flex justify-center items-center ">
            <img src={mainLogoJili} alt="" className="w-[60%]" />
          </div>
          {/* Image Section */}
          {/* <div className="lg:w-full">
            <img
              src={mobileImage}
              alt="Sign Up Illustration"
              className="w-full h-full cursor-pointer"
              // onClick={() => console.log("Image clicked")}
            />
          </div> */}

          {/* Form Section */}
          <form onSubmit={handleSubmit} className="  text-xs  space-y-6">
            <div className="p-2">
              <div className="bg-jili-bgSecondary bg-opacity-70 p-2 rounded flex flex-col gap-2  ">
                <div className="space-y-6 relative">
                  <div className="relative">
                    <h3 className="text-white mb-1">{t.currency}</h3>

                    <div
                      onClick={() => setDropdownOpen(!dropdownOpen)}
                      className="w-full p-2 bg-jili-bgSecondary  text-white  rounded-md flex items-center justify-between cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <img
                          src={
                            options.find(
                              (opt) => opt.name === formData.currency
                            )?.image
                          }
                          alt={formData.currency}
                          className="w-6 h-6"
                        />
                        {formData.currency}
                      </div>
                      <span className="text-white">&#9662;</span>
                    </div>

                    {dropdownOpen && (
                      <div
                        ref={dropdownRef}
                        className="absolute w-full bg-black  text-white rounded mt-1 shadow-md z-10"
                      >
                        {options.map((option, idx) => (
                          <div
                            key={idx}
                            className="flex items-center p-3 hover:text-textSecondaryColor  hover:bg-black cursor-pointer"
                            onClick={() => handleCurrencySelect(option)}
                          >
                            <img
                              src={option.image}
                              alt={option.name}
                              className="w-6 h-6 mr-2"
                            />
                            {option.name}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* userName and password */}
              <div className="bg-jili-bgSecondary bg-opacity-70 p-2 rounded flex flex-col gap-2 mt-2  ">
                <div>
                  <h3>{t.username}</h3>
                  <input
                    type="text"
                    name="username"
                    placeholder={t.placeholderUsername}
                    className="w-full p-2 text-white bg-jili-bgSecondary     rounded-md"
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
                      className="w-full p-2 text-white bg-jili-bgSecondary  rounded-md"
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
              </div>

              {/* <div className="flex flex-col">
                <h3>{t.confirmPassword}</h3>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    placeholder={t.placeholderPassword}
                    className="w-full p-2 text-white bg-jili-bgSecondary rounded-md"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                  />
                  <div
                    className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEye className="text-textPrimary " />
                    ) : (
                      <FaEyeSlash className="text-textPrimary " />
                    )}
                  </div>
                </div>
              </div> */}
              <div className="bg-jili-bgSecondary bg-opacity-70 p-2 rounded flex flex-col gap-2 mt-2  ">
                <div className="mb-4 relative">
                  <h3 className="mb-1">{t.phoneNumber}</h3>
                  <div className="flex gap-2">
                    <div className="relative w-1/3">
                      <div
                        onClick={() => setCodeDropdownOpen(!codeDropdownOpen)}
                        className="p-2 bg-jili-bgSecondary text-white  rounded-md flex items-center justify-between cursor-pointer"
                      >
                        <div className="flex  items-center gap-2">
                          <img
                            src={
                              countryCodes.find(
                                (opt) => opt.code === formData.countryCode
                              )?.flag
                            }
                            alt={formData.countryCode}
                            className="w-3 h-3"
                          />
                          {formData.countryCode}
                        </div>
                        <span className="text-white pl-4">&#9662;</span>
                      </div>

                      {codeDropdownOpen && (
                        <div
                          ref={codeDropdownRef}
                          className="absolute w-full bg-black text-white rounded mt-1 shadow-md z-10"
                        >
                          {countryCodes.map((option, idx) => (
                            <div
                              key={idx}
                              className="flex items-center p-3 hover:text-textSecondaryColor   hover:bg-black cursor-pointer"
                              onClick={() => handleCodeSelect(option)}
                            >
                              <img
                                src={option.flag}
                                alt={option.code}
                                className="w-3 h-3 "
                              />
                              {option.code}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <input
                      type="tel"
                      name="phone"
                      placeholder={t.placeholder}
                      className="w-full p-2 text-white bg-jili-bgSecondary rounded-md"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              {/* <div>
              <h3>{t.verificationCode}</h3>
              <div className="flex gap-2">
                <input
                  type="text"
                  name="verificationCode"
                  placeholder={t.placeholderVerificationCode}
                  className="w-2/3 p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md"
                  value={formData.verificationCode}
                  onChange={handleChange}
                />
                <div className="px-4 flex items-center gap-2 rounded-md bg-black">
                  <div className="text-white text-lg">{generatedCode}</div>
                  <button type="button" onClick={handleReloadCode}>
                    <TbReload className="text-2xl text-white" />
                  </button>
                </div>
              </div>
            </div> */}
            </div>

            <div className="flex justify-between gap-6 text-sm items-center p-2">
              <div className="w-full">
                <button
                  type="submit"
                  className="bg-backgroundV2Color w-full text-black px-6 py-2 rounded-md ml-auto"
                  disabled={loading}
                >
                  {loading ? <SpinLoader /> : t.finalSubmit}
                </button>

                <div className=" pt-4 flex  lg:flex-row items-center justify-center text-xs text-jili-textThird gap-2">
                  <p>
                    {language === "en"
                      ? "Already have an account?"
                      : "ইতোমধ্যে একজন সদস্য ?"}
                  </p>
                  <p
                    className="text-textSecondaryColorThree cursor-pointer underline"
                    onClick={handleLoginOpen}
                  >
                    {language === "en" ? "Log in" : "প্রবেশ করুন"}
                  </p>
                </div>

                <div className="flex justify-center items-center text-jili-textThird  space-x-2 text-xs pb-2">
                  {/* <input
                    type="checkbox"
                    name="agreed"
                    checked={formData.agreed}
                    onChange={handleCheckboxChange}
                  /> */}
                  <label>
                    {t.legal}{" "}
                    <Link
                      to="/terms"
                      className="text-textSecondaryColorThree font-semibold underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t.terms}
                    </Link>
                  </label>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterFacai;
