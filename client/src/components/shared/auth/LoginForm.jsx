import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaUser, FaLock } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import PrimaryButton from "../Buttons/PrimaryButton";
import {
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";
import SpinLoader from "../loaders/Spinloader";
import { useToasts } from "react-toast-notifications";

const LoginForm = ({ closeModal }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const { addToast } = useToasts();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const handleInputChange = (value) => {
    if (/^[a-zA-Z0-9]*$/.test(value)) {
      setUsername(value);
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data: loginData } = await loginUser({
        username,
        password,
      });
      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        dispatch(setCredentials({ token: loginData.token, user: userData }));
        addToast("Login successful", {
          appearance: "success",
          autoDismiss: true,
        });
        closeModal();
      }
    } catch (err) {
      console.error("Login failed:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Username Input */}
      <div className="grid w-full items-center gap-1.5 relative">
        <Label className="text-base" htmlFor="username">
          ব্যবহারকারীর নাম
        </Label>
        <div className="relative">
          <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-[#ffb80c]" />
          <Input
            type="text"
            id="username"
            value={username}
            onChange={(e) => handleInputChange(e.target.value)}
            placeholder="ব্যবহারকারীর নাম"
            className="pl-14 rounded border-[#adacb1] focus:outline-none"
          />
        </div>
      </div>

      {/* Password Input */}
      <div className="grid w-full items-center gap-1.5 relative">
        <Label className="text-base" htmlFor="password">
          পাসওয়ার্ড
        </Label>
        <div className="relative">
          <FaLock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-xl text-[#ffb80c]" />
          <Input
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="পাসওয়ার্ড"
            className="pl-14 pr-10 rounded border-[#adacb1] focus:outline-none"
          />
          <button
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black text-xl"
          >
            {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
          </button>
        </div>
      </div>
      <p className="text-right underline text-[#474747] hover:text-[#14815f]">
        পাসওয়ার্ড ভুলে গেছেন?
      </p>
      <PrimaryButton widthFull={true} type="submit">
        {isLoading ? <SpinLoader /> : "এখনি লগইন করুন"}
      </PrimaryButton>
      <p className="text-sm">
        একাউন্ট নেই?{" "}
        <span className="underline text-[#474747] hover:text-[#14815f]">
          এখন সাইন আপ করুন!
        </span>
      </p>
    </form>
  );
};

export default LoginForm;
