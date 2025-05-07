import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import { Link, useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import affiliateBg from "../../assets/affiliates/affiliateBg.jpg";
import { useAddAffiliateMutation } from "@/redux/features/allApis/usersApi/affiliatesApi";

const AffiliateSignUp = () => {
  const { addToast } = useToasts();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm();

  const navigate = useNavigate();

  const password = watch("password");

  const [addAffiliate, { isLoading }] = useAddAffiliateMutation();

  const onSubmit = async (data) => {
    // Remove confirmPassword before sending data
    const { confirmPassword, ...finalData } = data;

    try {
      const response = await addAffiliate(finalData).unwrap();
      addToast("Affiliate Registration successfully!", {
        appearance: "success",
      });
      navigate("/affiliatesdashboard");
    } catch (error) {
      addToast(error?.data?.message || "Something went wrong!", {
        appearance: "error",
      });
      console.error("Error:", error);
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${affiliateBg})` }}
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <div>
          <h3 className="text-left font-semibold text-2xl text-gray-800 mb-6 border-s-8 border-[#384050] ps-3">
            Sign Up
          </h3>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="form-control">
            <label className="label text-gray-700 font-medium">Username</label>
            <input
              type="text"
              placeholder="Enter your username"
              {...register("username", { required: "Username is required" })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="Enter your Email"
              {...register("email", { required: "Email is required" })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-medium">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your Phone Number"
              {...register("phone", { required: "Phone is required" })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-medium">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div className="form-control">
            <label className="label text-gray-700 font-medium">
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Re-enter password"
              {...register("confirmPassword", {
                required: "Confirm Password is required",
                validate: (value) =>
                  value === password || "Passwords do not match",
              })}
              className="input input-bordered w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
            {errors.confirmPassword && (
              <p className="text-red-500 text-sm">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
          <div className="flex flex-row items-center justify-center">
            <button
              type="submit"
              disabled={isLoading}
              className={` bg-gray-700 text-white py-2 px-4 rounded-md transition ${
                isLoading
                  ? "opacity-50 cursor-not-allowed"
                  : "hover:bg-gray-800"
              }`}
            >
              {isLoading ? <ClipLoader size={15} color="#ffffff" /> : "Sign Up"}
            </button>
          </div>

          <div className="mt-4 flex flex-rows items-center justify-center gap-4 w-full">
            <Link to="/affiliate/login">
              <button
                type="button"
                className="px-4 border-2 border-[#488286] text-[#488286] py-1 rounded-md hover:text-white hover:bg-[#488286] transition"
              >
                Sign In
              </button>
            </Link>
            <p>|</p>
            <Link to="/affiliate/forgetpass" className="text-gray-600 hover:underline">
              Forgot password?
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AffiliateSignUp;
