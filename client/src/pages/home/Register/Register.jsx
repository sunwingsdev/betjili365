import { useState } from "react";
import Container from "@/components/shared/Container";
import image from "@/assets/register/register.jpg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import { RxReload } from "react-icons/rx";
import { ImCheckmark } from "react-icons/im";
import { Link, useNavigate } from "react-router-dom";
import { FaChevronLeft, FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";
import {
  useAddUserMutation,
  useLazyGetAuthenticatedUserQuery,
  useLoginUserMutation,
} from "@/redux/features/allApis/usersApi/usersApi";
import SpinLoader from "@/components/shared/loaders/Spinloader";
import { useDispatch } from "react-redux";
import { setCredentials } from "@/redux/slices/authSlice";

const generateRandomCode = () => {
  return Math.floor(1000 + Math.random() * 9000).toString(); // 4-digit code
};

// Currency to country code mapping
const currencyToCountryCode = {
  bdt: "+880", // Bangladesh Taka
  inr: "+91", // Indian Rupee
  npr: "+977", // Nepalese Rupee
  pkr: "+92", // Pakistani Rupee
};

const Register = () => {
  const [addUser] = useAddUserMutation();
  const [loginUser] = useLoginUserMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const dispatch = useDispatch();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    currency: "",
    fullName: "",
    email: "",
    verificationCode: "",
    countryCode: "",
    phone: "",
    refer: "",
  });
  const [loading, setLoading] = useState(false);
  const [generatedCode, setGeneratedCode] = useState(generateRandomCode());
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addToast } = useToasts();

  const handleNext = (e) => {
    e.preventDefault();
    if (
      formData.username &&
      formData.password &&
      formData.confirmPassword &&
      formData.currency
    ) {
      if (formData.password === formData.confirmPassword) {
        setStep(2);
      } else {
        addToast("Please match the password and confirm password", {
          appearance: "error",
          autoDismiss: true,
        });
      }
    } else {
      addToast("Please fill in all the fields.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  const handleBack = () => {
    setStep(1);
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "username") {
      // Regular expression to allow only letters and numbers
      if (/^[a-zA-Z0-9]*$/.test(value)) {
        setFormData({ ...formData, [id]: value });
      } else {
        addToast(
          "Only letters and numbers are allowed. No spaces or special characters.",
          {
            appearance: "error",
            autoDismiss: true,
          }
        );
      }
    } else {
      // For other fields, update the state normally
      setFormData({ ...formData, [id]: value });
    }
  };

  const handleCurrencyChange = (value) => {
    setFormData({
      ...formData,
      currency: value,
      countryCode: currencyToCountryCode[value] || "",
    });
  };

  const handleReloadCode = () => {
    setGeneratedCode(generateRandomCode());
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (formData.verificationCode === generatedCode) {
      const { confirmPassword, verificationCode, ...userInfo } = formData;
      try {
        setLoading(true);
        const result = await addUser(userInfo);

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
          setLoading(false);
          navigate("/");
        }
      } catch (error) {
        console.log(error.message);
        addToast(error.message, {
          appearance: "error",
          autoDismiss: true,
        });
        setLoading(false);
      }
    } else {
      addToast("Verification code does not match.", {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  // Function to go back to the previous route
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      {/* for desktop */}
      <div className="hidden md:block bg-[#4e4e4e] pb-8 pt-3">
        <Container>
          <p className="text-right text-[#999]">
            আপনার যদি সমস্যা হয় তবে যোগাযোগ করুন{" "}
            <span className="text-red-700 cursor-pointer">
              অনলাইন কাস্টমার সার্ভিস
            </span>
          </p>
          <div className="flex items-center justify-center gap-4 p-8 border-4 border-[#14815f]">
            <div className="w-[40%] text-white">
              <h3 className="text-xl text-center text-[#ffdf18]">
                {"সাইন আপ"}
              </h3>
              <div className="border border-[#ffdf18]" />
              {step === 1 ? (
                <form className="mt-3">
                  {/* Step 1: Username, Password, Currency */}
                  <div className="space-y-2">
                    {/* Username Field */}
                    <div className="grid w-full items-center gap-1.5 relative">
                      <Label className="text-base" htmlFor="username">
                        ব্যবহারকারীর নাম
                      </Label>
                      <Input
                        type="text"
                        id="username"
                        value={formData.username}
                        onChange={handleChange}
                        placeholder="৪-১৫ অক্ষর	 নাম্বার এলাউ"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                    </div>
                    {/* Password Field */}
                    <div className="grid w-full items-center gap-1.5 relative">
                      <Label className="text-base" htmlFor="password">
                        পাসওয়ার্ড
                      </Label>
                      <Input
                        type="password"
                        id="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="৬-২০ অক্ষর	 নাম্বার এলাউ"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                    </div>
                    {/* Confirm Password */}
                    <div className="grid w-full items-center gap-1.5 relative">
                      <Label className="text-base" htmlFor="confirmPassword">
                        পাসওয়ার্ড নিশ্চিত করুন
                      </Label>
                      <Input
                        type="password"
                        id="confirmPassword"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                    </div>
                    {/* Currency Selection */}
                    <div className="grid w-full items-center gap-1.5 relative">
                      <Label className="text-base" htmlFor="currency">
                        কারেন্সি নির্বাচন করুন
                      </Label>
                      <Select
                        onValueChange={handleCurrencyChange}
                        value={formData.currency}
                      >
                        <SelectTrigger className="w-full bg-[#454545]">
                          <SelectValue placeholder="Select a currency" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="bdt">BDT</SelectItem>
                            <SelectItem value="inr">INR</SelectItem>
                            <SelectItem value="npr">NPR</SelectItem>
                            <SelectItem value="pkr">PKR</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                    </div>
                    {/* Refer Code */}
                    <div className="grid w-full items-center gap-1.5 relative">
                      <Label className="text-base" htmlFor="refer">
                        Refer Code
                      </Label>
                      <Input
                        type="text"
                        id="refer"
                        onChange={handleChange}
                        placeholder="আপনার যদি থাকে তবে প্রবেশ করুন"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                    </div>
                    <div className="flex items-center justify-end">
                      <Button
                        onClick={handleNext}
                        className="rounded-full size-12 bg-[#14815f] hover:bg-[#14815f] p-0"
                      >
                        <FaArrowRight className="text-3xl font-bold" />
                      </Button>
                    </div>
                  </div>
                </form>
              ) : (
                <form className="space-y-3 mt-3" onSubmit={handleFormSubmit}>
                  {/* Step 2: Full Name, Email, Verification Code */}
                  <div className="grid w-full items-center gap-1.5 relative">
                    <Label className="text-base" htmlFor="fullName">
                      সম্পূর্ণ নাম
                    </Label>
                    <Input
                      type="text"
                      id="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="সম্পূর্ণ নাম লিখুন"
                      className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                    />
                  </div>
                  {/* Phone and Country Code */}
                  <div className="grid w-full items-center gap-1.5 relative">
                    <Label className="text-base" htmlFor="phone">
                      ফোন নাম্বার
                    </Label>
                    <div className="flex space-x-2">
                      <Select
                        value={formData.countryCode}
                        className="bg-[#454545] text-white"
                      >
                        <SelectTrigger className="bg-[#454545] ">
                          <SelectValue placeholder="Country Code" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectGroup>
                            <SelectItem value="+880">BD (+880)</SelectItem>
                            <SelectItem value="+91">IN (+91)</SelectItem>
                            <SelectItem value="+977">NP (+977)</SelectItem>
                            <SelectItem value="+92">PK (+92)</SelectItem>
                          </SelectGroup>
                        </SelectContent>
                      </Select>
                      <Input
                        type="text"
                        id="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="ফোন নাম্বার লিখুন"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                    </div>
                  </div>
                  {/* Email Field */}
                  <div className="grid w-full items-center gap-1.5 relative">
                    <Label className="text-base" htmlFor="email">
                      ই-মেইল
                    </Label>
                    <Input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="একটি বৈধ ইমেল লিখুন"
                      className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                    />
                  </div>
                  {/* Verification Code */}
                  <div className="grid w-full items-center gap-1.5 relative">
                    <Label className="text-base" htmlFor="verificationCode">
                      যাচাইকরণ কোড
                    </Label>
                    <div className="flex space-x-2 items-center">
                      <Input
                        type="text"
                        id="verificationCode"
                        value={formData.verificationCode}
                        onChange={handleChange}
                        placeholder="কোড লিখুন"
                        className="p-4 rounded border-[#adacb1] focus:outline-none text-white bg-[#454545]"
                      />
                      <div className="flex gap-3 items-center px-4 bg-black rounded-md">
                        <div className="text-white rounded text-2xl font-bold">
                          {generatedCode}
                        </div>
                        <Button
                          onClick={handleReloadCode}
                          type="button"
                          className="p-0"
                        >
                          <RxReload className="text-white text-2xl" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <Button
                      onClick={handleBack}
                      className="rounded-full size-12 bg-[#14815f] hover:bg-[#14815f] p-0"
                    >
                      <FaArrowLeft className="text-3xl font-bold" />
                    </Button>
                    <Button
                      type="submit"
                      className="rounded-full size-12 bg-[#14815f] hover:bg-[#14815f] p-0"
                    >
                      {loading ? (
                        <SpinLoader />
                      ) : (
                        <ImCheckmark className="text-3xl font-bold" />
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>
            <div className="w-[60%]">
              <img
                src={image}
                alt="Registration Banner"
                className="h-full w-full"
              />
            </div>
          </div>
        </Container>
      </div>

      {/* for mobile */}
      <div className="bg-black h-full md:hidden">
        <div className="relative bg-slate-600 px-3 py-3 text-white text-center">
          <FaChevronLeft
            className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-2 cursor-pointer"
            onClick={handleGoBack}
          />
          <p>সাইন আপ</p>
        </div>
        <img
          src="https://img.b112j.com/bj/h5/assets/images/sponsor/bn-sponsor.jpg?v=1727170388190&source=mcdsrc"
          alt=""
        />
        <div className="w-full p-3 text-[#fdfdfd]">
          <form onSubmit={handleFormSubmit}>
            {/* username Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded-t bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="username">
                ব্যবহারকারীর নাম
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type="text"
                  id="username"
                  value={formData.username}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="ব্যবহারকারীর নাম"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.username && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, username: "" })}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>

            {/* Password Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="password">
                পাসওয়ার্ড
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type={showPassword ? "text" : "password"} // Toggle password visibility
                  id="password"
                  value={formData.password}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="পাসওয়ার্ড"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.password && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-12 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, password: "" })}
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
            {/* Confirm Password Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="confirmPassword">
                পাসওয়ার্ড নিশ্চিত করুন
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type={showConfirmPassword ? "text" : "password"} // Toggle password visibility
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="পাসওয়ার্ড নিশ্চিত করুন"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.confirmPassword && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-12 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() =>
                      setFormData({ ...formData, confirmPassword: "" })
                    }
                  >
                    <FaTimes />
                  </div>
                )}
                {/* Show/Hide Password button */}
                <div
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-[#fff] text-2xl cursor-pointer"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle show/hide password
                >
                  {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                </div>
              </div>
            </div>

            {/* currency Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded-b bg-[#292929] mb-3">
              <Label className="text-sm w-1/3" htmlFor="currency">
                কারেন্সি
              </Label>
              <div className="w-2/3 h-full relative text-[#14805e] ">
                <Select
                  onValueChange={handleCurrencyChange}
                  value={formData.currency}
                >
                  <SelectTrigger className="w-full bg-transparent border-none">
                    <SelectValue placeholder="Select a currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="bdt">BDT</SelectItem>
                      <SelectItem value="inr">INR</SelectItem>
                      <SelectItem value="npr">NPR</SelectItem>
                      <SelectItem value="pkr">PKR</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* full name Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded-t bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="fullName">
                সম্পূর্ণ নাম
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="সম্পূর্ণ নাম "
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.fullName && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, fullName: "" })}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>
            {/* number  Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="phone">
                ফোন নাম্বার
              </Label>
              <div className="w-1/4">
                <Select
                  value={formData.countryCode}
                  className="text-[#14805e] bg-[#292929]"
                >
                  <SelectTrigger className="bg-[#292929] border-none ring-0 text-[#14805e]">
                    <SelectValue placeholder="Country Code" />
                  </SelectTrigger>
                  <SelectContent className="text-[#14805e]">
                    <SelectGroup>
                      <SelectItem value="+880">BD (+880)</SelectItem>
                      <SelectItem value="+91">IN (+91)</SelectItem>
                      <SelectItem value="+977">NP (+977)</SelectItem>
                      <SelectItem value="+92">PK (+92)</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="w-1/2 h-full relative">
                <Input
                  type="text"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="ফোন নাম্বার"
                  className="pl-5 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.phone && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, phone: "" })}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>
            {/* Email Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="email">
                ই-মেইল
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type="text"
                  id="email"
                  value={formData.email}
                  onChange={handleChange} // Update the state when input changes
                  placeholder="ই-মেইল"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {/* Cross (clear) button */}
                {formData.email && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, email: "" })}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>
            {/* refer code  Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded-b bg-[#292929] ">
              <Label className="text-sm w-1/3" htmlFor="refer">
                রেফার কোড
              </Label>
              <div className="w-2/3 h-full relative">
                <Input
                  type="text"
                  id="refer"
                  value={formData.refer}
                  onChange={handleChange}
                  placeholder="রেফার কোড"
                  className="pl-5 pr-10 rounded focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                />
                {formData.refer && (
                  <div
                    className="bg-[#14805e] p-1 absolute right-2 top-1/2 transform -translate-y-1/2 text-white cursor-pointer rounded-full"
                    onClick={() => setFormData({ ...formData, refer: "" })}
                  >
                    <FaTimes />
                  </div>
                )}
              </div>
            </div>
            {/* verification code  Input */}
            <div className="relative flex w-full items-center gap-1.5 px-4 py-2 rounded bg-[#292929] mt-3">
              <Label className="text-sm w-1/3" htmlFor="verificationCode">
                ভেরিফিকেশন কোড
              </Label>
              <div className="w-2/3 h-full relative">
                <div className="flex space-x-1 items-center">
                  <Input
                    type="text"
                    id="verificationCode"
                    value={formData.verificationCode}
                    onChange={handleChange}
                    placeholder="কোড লিখুন"
                    className="pl-5 focus:outline-none text-[#14805e] border-none bg-transparent w-full"
                  />
                  <div className="flex gap-2 justify-between items-center bg-white">
                    <div className="text-black rounded text-2xl px-2 font-bold">
                      {generatedCode}
                    </div>
                    <Button
                      onClick={handleReloadCode}
                      type="button"
                      className="py-2 rounded-none"
                    >
                      <RxReload className="text-white text-xl" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="bg-[#14805e] w-full text-base py-6 mt-3"
            >
              {loading ? <SpinLoader /> : "নিশ্চিত করুন"}
            </Button>
            <p className="text-white text-center py-1.5 text-sm">
              আমি 18 বছর বয়সী এবং শর্তাদি শর্তে সম্মত।
            </p>
            <p className="px-3 py-1.5 text-[#fff] text-center">
              একাউন্ট আছে ?{" "}
              <Link to="/login">
                <span className="text-[#ffdf1a] underline"> লগ ইন করুন</span>
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
