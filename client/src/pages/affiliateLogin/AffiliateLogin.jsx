import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ClipLoader } from "react-spinners";
import affiliateBg from "../../assets/affiliates/affiliateBg.jpg";
import { useLoginAffiliateMutation } from "@/redux/features/allApis/usersApi/affiliatesApi";
import { useLazyGetAuthenticatedUserQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { setCredentials } from "@/redux/slices/authSlice";

const AffiliateLogin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loginAffiliate, { isLoading }] = useLoginAffiliateMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const { data: loginData, error } = await loginAffiliate({
        username,
        password,
      });
      // If error exists, handle it here
      if (error) {
        const errorMessage = error?.data?.error || "Unexpected error occurred.";
        const specialError =
          "Your account is not approved yet. Please wait for approval or check your email.";
        if (specialError === errorMessage) {
          Swal.fire({
            title: "Access Denied",
            text: errorMessage,
            showConfirmButton: false,
            width: 600,
            padding: "3em",
            color: "#ffff",
            background: "#222222",
            timer: 4500,
            customClass: {
              title: "text-red-600",
            },
          });
        } else {
          addToast(errorMessage, {
            appearance: "error",
            autoDismiss: true,
          });
        }

        return; // Exit the function if there's an error
      }
      //   setErrorMessage(errorMessage);
      if (loginData.token) {
        const { data: userData } = await getUser(loginData.token);
        dispatch(setCredentials({ token: loginData.token, user: userData }));
        addToast("Login successful", {
          appearance: "success",
          autoDismiss: true,
        });

        if (userData?.user?.role !== "affiliate") {
          navigate("/affiliatesdashboard");
        } else {
          navigate("/affiliate/login");
        }
      }
    } catch (error) {
      addToast("Unexpected error occurred.", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      reset();
    }
  };

  return (
    <div
      className="flex items-center justify-center min-h-screen p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${affiliateBg})` }}
    >
      <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
        <h3 className="text-left font-semibold text-2xl text-gray-800 mb-6 border-s-8 border-[#384050] ps-3">
          Sign In
        </h3>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
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

          {/* Password */}
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

          {/* Buttons */}
          <div className="flex items-center justify-center space-y-3">
            {/* Sign In Button */}
            <button
              type="submit"
              className=" bg-gray-700 text-white py-2 px-3 rounded-md hover:bg-gray-800 transition"
            >
              {isLoading ? <ClipLoader size={15} color="#ffffff" /> : "Sign In"}
            </button>
          </div>

          {/* Forgot Password */}
          <div className="flex flex-row items-center justify-center gap-3 mt-4">
            {/* Sign Up Button */}
            <Link to="/affiliate/signup">
              <button
                type="button"
                className="w-full border-2 border-[#488286] text-[#488286] py-1 px-4 rounded-md hover:text-white hover:bg-[#488286] transition"
              >
                Sign Up
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

export default AffiliateLogin;
