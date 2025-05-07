import React, { useState, useRef, useContext } from "react";
import signUpImage from "../../../assets/register/image_157256.jpg";
import { LanguageContext } from "@/Context/LanguageContext";
import bdImage from "../../../assets/v2/BD.png";
import INImage from "../../../assets/v2/IN.png";
import mainLogo from "../../../assets/v2/loaderLogo.png";
import { Link } from "react-router-dom";

const countryCodes = [
  { code: "+880", flag: bdImage },
  { code: "+91", flag: INImage },
];

const ForgetPassword = ({ handleLoginOpenTwo }) => {
  const { language } = useContext(LanguageContext);
  const t = {
    en: {
      title: "Forget Password",
      username: "Username",
      placeholderUsername: "4-15 characters, numbers allowed",
      email: "Email",
      placeholderEmail: "Enter your email",
      phoneNumber: "Phone Number",
      back: "Back to Login",
      reset: "Reset Password",
      confirm: "Confirm",
    },
    bn: {
      title: "পাসওয়ার্ড ভুলে গেছেন",
      username: "ব্যবহারকারীর নাম",
      placeholderUsername: "৪-১৫ অক্ষর, নাম্বার এলাউ",
      email: "ইমেইল",
      placeholderEmail: "আপনার ইমেইল লিখুন",
      phoneNumber: "ফোন নম্বর",
      back: "বেক টু লগইন",
      reset: "পাসওয়ার্ড রিসেট করুন",
      confirm: "নিশ্চিত করুন",
    },
  }[language];

  const [activeTab, setActiveTab] = useState("email");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    countryCode: "+880",
    phone: "",
  });

  const [codeDropdownOpen, setCodeDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCodeSelect = (option) => {
    setFormData((prev) => ({ ...prev, countryCode: option.code }));
    setCodeDropdownOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reset request submitted:", formData);
  };

  return (
    <div className="">
      {/* large Device */}
      <div className="bg-primary-primaryColor">
       
      <div className="py-5 hidden md:block mx-auto lg:max-w-6xl  text-white">
        <div className="flex flex-col lg:items-center lg:flex-row gap-4 lg:gap-0  p-8">
          <div className="lg:w-full lg:h-[600px]">
            <img
              src={signUpImage}
              alt="Sign Up Illustration"
              className="w-full h-full cursor-pointer"
            />
          </div>

          <div className="lg:w-2/3 lg:h-[800px] bg-componentBgPrimary text-white p-6 rounded-md space-y-6">
            {/* Tabs */}
            <div className="flex justify-between border-b border-white border-opacity-20 space-x-4 mb-4">
              <button
                onClick={() => setActiveTab("email")}
                className={`px-4 py-2 w-full text-center ${
                  activeTab === "email"
                    ? "text-textSecondaryColor border-b-2 border-textSecondaryColor"
                    : "text-white"
                }`}
              >
                E-mail
              </button>
              <button
                onClick={() => setActiveTab("sms")}
                className={`px-4 py-2 w-full text-center ${
                  activeTab === "sms"
                    ? "text-textSecondaryColor border-b-2 border-textSecondaryColor"
                    : "text-white"
                }`}
              >
                SMS
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-lg text-textSecondaryColor">{t.title}</h3>
              </div>
              {/* Username */}
              <div>
                <label>{t.username}</label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={t.placeholderUsername}
                  className="w-full p-2 text-white bg-primary-primaryColor rounded-md border border-gray-400"
                />
              </div>

              {/* Email Tab */}
              {activeTab === "email" && (
                <>
                  <div>
                    <label>{t.email}</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.placeholderEmail}
                      className="w-full p-2 text-white bg-primary-primaryColor rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex justify-end">
                    <Link to="/login">
                      <p className="text-textSecondaryColor">{t.back}</p>
                    </Link>
                  </div>
                </>
              )}

              {/* SMS Tab */}
              {activeTab === "sms" && (
                <div>
                  <label>{t.phoneNumber}</label>
                  <div className="flex gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative w-1/3">
                      <div
                        onClick={() => setCodeDropdownOpen(!codeDropdownOpen)}
                        className="p-2 text-white bg-primary-primaryColor border border-gray-400 rounded-md flex items-center justify-between cursor-pointer"
                      >
                        <img
                          src={
                            countryCodes.find(
                              (c) => c.code === formData.countryCode
                            )?.flag
                          }
                          alt="Flag"
                          className="w-5 h-5 mr-1"
                        />
                        {formData.countryCode}
                      </div>

                      {codeDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute z-10 w-full text-white bg-primary-primaryColor rounded shadow-md mt-1"
                        >
                          {countryCodes.map((option, idx) => (
                            <div
                              key={idx}
                              className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-800 hover:text-textSecondaryColor"
                              onClick={() => handleCodeSelect(option)}
                            >
                              <img
                                src={option.flag}
                                alt="flag"
                                className="w-5 h-5"
                              />
                              {option.code}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01xxxxxxxxx"
                      className="w-full p-2 text-white bg-primary-primaryColor rounded-md border border-gray-400"
                    />
                  </div>
                  <div className="flex justify-end pt-2">
                    <Link to="/login">
                      <p className="text-textSecondaryColor">{t.back}</p>
                    </Link>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-primary-primaryColor py-2 rounded-md"
              >
                {t.reset}
              </button>
            </form>
          </div>
        </div>
      </div>
       
      </div>
      {/* small device */}
      <div className=" md:hidden min-h-screen bg-componentBgPrimary text-white ">
        <div className="flex flex-col lg:flex-row gap-4 lg:border-4 border-textPrimary ">
          <div className="lg:w-2/3 text-xs text-white  rounded-md space-y-6">
            {/* Tabs */}
            <div className="flex justify-between bg-backgroundSecondaryColor border-b border-white border-opacity-20 space-x-4 mb-4">
              <button
                onClick={() => setActiveTab("email")}
                className={`px-4 py-2 w-full text-white text-center ${
                  activeTab === "email" ? "border-b-2 border-white" : ""
                }`}
              >
                E-mail
              </button>
              <button
                onClick={() => setActiveTab("sms")}
                className={`px-4 py-2 w-full text-white text-center ${
                  activeTab === "sms" ? " border-b-2 border-white" : ""
                }`}
              >
                SMS
              </button>
            </div>
            <div className="     flex justify-center items-center ">
              <img src={mainLogo} alt="" className="w-[30%]" />
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 px-2">
              <div>
                <h3 className="text-lg text-textSecondaryColor">{t.title}</h3>
              </div>
              {/* Username */}
              <div className="flex gap-4 bg-componentBgSecondary w-full p-2 text-white  rounded-md border border-gray-400">
                <label>{t.username}</label>
                <input
                  name="username"
                  type="text"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder={t.placeholderUsername}
                  className=" bg-componentBgSecondary "
                />
              </div>

              {/* Email Tab */}
              {activeTab === "email" && (
                <>
                  <div className="flex gap-4 bg-componentBgSecondary w-full p-2 text-white  rounded-md border border-gray-400">
                    <label className="w-[30%]">{t.email}</label>
                    <input
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder={t.placeholderEmail}
                      className="bg-componentBgSecondary  "
                    />
                  </div>
                  <div
                    className="flex justify-end"
                    onClick={handleLoginOpenTwo}
                  >
                    <p className="text-textSecondaryColor">{t.back}</p>
                  </div>
                </>
              )}

              {/* SMS Tab */}
              {activeTab === "sms" && (
                <div>
                  <label className="w-[30%]">{t.phoneNumber}</label>
                  <div className="flex gap-2">
                    {/* Country Code Dropdown */}
                    <div className="relative w-1/3">
                      <div
                        onClick={() => setCodeDropdownOpen(!codeDropdownOpen)}
                        className="p-2 text-white bg-componentBgSecondary  rounded-md flex items-center justify-between cursor-pointer"
                      >
                        <img
                          src={
                            countryCodes.find(
                              (c) => c.code === formData.countryCode
                            )?.flag
                          }
                          alt="Flag"
                          className="w-5 h-5 mr-1"
                        />
                        {formData.countryCode}
                      </div>

                      {codeDropdownOpen && (
                        <div
                          ref={dropdownRef}
                          className="absolute z-10 w-full text-white bg-componentBgSecondary rounded shadow-md mt-1"
                        >
                          {countryCodes.map((option, idx) => (
                            <div
                              key={idx}
                              className="p-2 flex items-center gap-2 cursor-pointer hover:bg-gray-800 hover:text-textSecondaryColor"
                              onClick={() => handleCodeSelect(option)}
                            >
                              <img
                                src={option.flag}
                                alt="flag"
                                className="w-5 h-5"
                              />
                              {option.code}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Phone Input */}
                    <input
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="01xxxxxxxxx"
                      className="w-full p-2 text-white bg-componentBgPrimary  "
                    />
                  </div>
                  <div
                    className="flex justify-end pt-2"
                    onClick={handleLoginOpenTwo}
                  >
                    <p className="text-textSecondaryColor">{t.back}</p>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full text-white bg-backgroundSecondaryColor py-2 rounded-md"
              >
                {t.confirm}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;
