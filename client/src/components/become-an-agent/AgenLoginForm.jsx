import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { useDispatch } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useLazyGetAuthenticatedUserQuery } from "@/redux/features/allApis/usersApi/usersApi";
import { setCredentials } from "@/redux/slices/authSlice";
import { useLoginAgentMutation } from "@/redux/features/allApis/usersApi/agentsApi";

const AgentLoginForm = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  //   const [errorMessage, setErrorMessage] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const [loginAgent, { isLoading }] = useLoginAgentMutation();
  const [getUser] = useLazyGetAuthenticatedUserQuery();
  const navigate = useNavigate();
  const { addToast } = useToasts();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const onSubmit = async (data) => {
    const { username, password } = data;
    try {
      const { data: loginData, error } = await loginAgent({
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

        if (userData?.role === "agent") {
          navigate("/cashagent");
        } else {
          navigate("/becomeanagent");
        }
      }
    } catch (error) {
      addToast("Unexpected error occurred.", {
        appearance: "error",
        autoDismiss: true,
      });
    } finally {
      reset();
      onClose();
    }
  };

  return (
    <div>
      <form className="py-4 px-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="space-y-1 mb-2">
          <label className="text-white text-sm" htmlFor="name">
            Username
          </label>
          <input
            {...register("username", {
              required: "Username is required",
              pattern: {
                value: /^[a-zA-Z0-9]{4,15}$/,
                message: "4-15 characters, letters and numbers only",
              },
            })}
            placeholder="4-15 char, allow number"
            className={`text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ${
              errors.username ? "ring-red-600" : "ring-[#767575]"
            } hover:ring-red-600`}
          />
          {errors.username && (
            <p className="text-red-600 text-xs">{errors.username.message}</p>
          )}
        </div>
        <div className="space-y-1 relative">
          <label className="text-white text-sm" htmlFor="password">
            Password
          </label>
          <input
            {...register("password", {
              required: "Password is required",
            })}
            type={showPassword ? "text" : "password"}
            placeholder="6-20 Characters and Numbers"
            className={`text-white bg-[#363636] border-none outline-none w-full py-1.5 px-4 rounded-md ring-1 ${
              errors.password ? "ring-red-600" : "ring-[#767575]"
            } hover:ring-red-600`}
          />
          <button
            type="button"
            className="absolute top-8 right-3 text-white"
            onClick={togglePasswordVisibility}
          >
            {showPassword ? <IoIosEye /> : <IoIosEyeOff />}
          </button>
          {errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
        </div>

        <div className="text-right text-sm font-semibold text-red-600">
          <div className="inline-block cursor-pointer">Forgot password?</div>
        </div>
        <button
          type="submit"
          className="p-1.5 w-full text-lg text-[#aaa9a9] hover:text-white bg-[#363636] hover:bg-red-600 duration-300 rounded-md"
        >
          {isLoading ? "..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default AgentLoginForm;
