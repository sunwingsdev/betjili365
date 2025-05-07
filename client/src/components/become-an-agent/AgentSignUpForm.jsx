import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { FaSync } from "react-icons/fa";
import Swal from "sweetalert2";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useAddAgentMutation } from "@/redux/features/allApis/usersApi/agentsApi";
import { useToasts } from "react-toast-notifications";

const AgentSignupForm = ({ onClose }) => {
  const [addAgent, { isLoading }] = useAddAgentMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
  } = useForm();
  const [verificationCode, setVerificationCode] = useState(generateCode());
  const [isCodeMatched, setIsCodeMatched] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [phone, setPhone] = useState("");
  const { addToast } = useToasts();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleInputChange = (e) => {
    const value = e.target.value.replace(/\D/g, "");
    setPhone(value);
  };

  function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
  }

  const handleRefresh = () => {
    const newCode = generateCode();
    setVerificationCode(newCode);
    setIsCodeMatched(false);
  };

  const enteredCode = watch("verificationCode", "");
  useEffect(() => {
    setIsCodeMatched(enteredCode === verificationCode);
  }, [enteredCode, verificationCode]);

  const onSubmit = async (data) => {
    const { verificationCode, ...userInfo } = data;
    if (isCodeMatched) {
      try {
        const result = await addAgent(userInfo);
        if (result.error) {
          addToast(result.error.data.error, {
            appearance: "error",
            autoDismiss: true,
          });
        } else if (result.data.insertedId) {
          Swal.fire({
            text: "Thanks for your registration. Please wait for admin approval.",
            showConfirmButton: false,
            width: 600,
            padding: "3em",
            color: "#ffff",
            background: "#222222",
            timer: 1500,
          });
        }
      } catch (error) {
        /* empty */
      } finally {
        handleRefresh();
        reset();
        setPhone("");
        onClose();
      }
    } else {
      console.log("Verification code does not match.");
    }
  };

  return (
    <div className="px-4 py-2">
      <form className="space-y-3" onSubmit={handleSubmit(onSubmit)}>
        {/* Full Name */}
        <div className="space-y-1">
          <label className="text-white text-sm" htmlFor="fullName">
            Full Name
          </label>
          <input
            {...register("fullName", {
              required: "Full Name is required",
            })}
            name="fullName"
            type="text"
            placeholder="Your Full Name"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors.fullName.message}</p>
          )}
        </div>

        {/* User name */}
        <div className="space-y-1">
          <label className="text-white text-sm" htmlFor="username">
            Username
          </label>
          <input
            {...register("username", {
              required: "Username is required",
              minLength: { value: 4, message: "Minimum 4 characters required" },
              maxLength: {
                value: 15,
                message: "Maximum 15 characters allowed",
              },
              pattern: { value: /^[a-zA-Z0-9]+$/, message: "Invalid format" },
            })}
            name="username"
            type="text"
            placeholder="4-15 char and number"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
          />
          {errors.username && (
            <p className="text-red-600 text-sm">{errors.username.message}</p>
          )}
        </div>

        {/* Email */}
        <div className="space-y-1 relative">
          <label className="text-white text-sm" htmlFor="email">
            Email
          </label>
          <input
            {...register("email", {
              required: "Email is required",
            })}
            type="email"
            placeholder="Your Email Address"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
          />

          {errors.email && (
            <p className="text-red-600 text-sm">{errors.email.message}</p>
          )}
        </div>

        {/* Password */}
        <div className="space-y-1 relative">
          <label className="text-white text-sm" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Minimum 6 characters required" },
              maxLength: {
                value: 20,
                message: "Maximum 20 characters allowed",
              },
            })}
            type={showPassword ? "text" : "password"}
            placeholder="6-20 Characters and Numbers"
            className="text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ring-[#767575] hover:ring-red-600"
          />
          <button
            type="button"
            className="absolute top-8 right-3 text-white"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
          {errors.password && (
            <p className="text-red-600 text-sm">{errors.password.message}</p>
          )}
        </div>

        {/* Phone Number */}
        <div className="space-y-1 relative w-full">
          <label className="text-white text-sm" htmlFor="phone">
            Phone Number
          </label>
          <div className="flex items-center bg-[#363636] text-white ring-1 ring-[#767575] hover:ring-red-600 rounded-md">
            <div className="flex items-center px-3 border-r border-[#767575]">
              <img
                src="https://flagcdn.com/w40/bd.png"
                alt="Bangladesh Flag"
                className="w-6 h-4"
              />
              <span className="ml-2">+880</span>
            </div>
            <input
              {...register("phone", {
                required: "Phone number is required",
                pattern: {
                  value: /^[1-9][0-9]{9}$/,
                  message: "Invalid phone number",
                },
              })}
              type="text"
              value={phone}
              onChange={handleInputChange}
              placeholder="1XXXXXXXXX"
              className="flex-1 bg-transparent border-none outline-none py-1.5 px-4 text-white"
              maxLength="10"
            />
          </div>
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone.message}</p>
          )}
        </div>

        {/* Verification Code */}
        <div className="space-y-1 w-full">
          <label className="text-white text-sm" htmlFor="verificationCode">
            Verification Code
          </label>
          <div className="flex items-center bg-[#363636] text-white ring-1 ring-[#767575] hover:ring-red-600 rounded-md">
            <div className="w-1/2">
              <input
                {...register("verificationCode", {
                  required: "Verification code is required",
                })}
                type="text"
                placeholder="Enter Code"
                className="w-full bg-transparent text-white py-2 px-4 outline-none"
                maxLength={6}
              />
            </div>
            <div className="w-1/2 flex items-center justify-between border-l border-[#767575] px-3 gap-3">
              <span className="text-lg">{verificationCode}</span>
              <button
                type="button"
                onClick={handleRefresh}
                className="hover:text-red-600"
              >
                <FaSync size={18} />
              </button>
            </div>
          </div>
          {errors.verificationCode && (
            <p className="text-red-600 text-sm">
              {errors.verificationCode.message}
            </p>
          )}
        </div>

        <button
          className={`p-1.5 w-full text-lg ${
            isCodeMatched || isLoading
              ? "text-white bg-red-600 hover:bg-red-800"
              : "text-gray-500 bg-gray-300 cursor-not-allowed"
          } duration-300 rounded-md`}
          type="submit"
          disabled={!isCodeMatched || isLoading}
        >
          {isLoading ? "..." : "SIGN UP"}
        </button>
        <p className="mt-2 px-4 text-xs text-center text-[#aaa9a9]">
          Already have an account?
          <span className="text-red-600 font-semibold"> Login</span>
        </p>
      </form>
    </div>
  );
};

export default AgentSignupForm;
