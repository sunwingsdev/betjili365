import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";

const PrivateRoute = ({ children }) => {
  const { addToast } = useToasts();
  const { token, user } = useSelector((state) => state.auth);
  if (!token || !user) {
    addToast("Please login first", {
      appearance: "error",
      autoDismiss: true,
    });
    return <Navigate to="/" />;
  } else return children;
};

export default PrivateRoute;
