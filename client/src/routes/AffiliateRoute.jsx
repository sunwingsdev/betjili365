import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";

const AffiliateRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  // const { addToast } = useToasts();

  useEffect(() => {
    if (!token || !user || user?.role !== "affiliate") {
      // addToast("Please login as an affiliate first", {
      //   appearance: "error",
      //   autoDismiss: true,
      // });
      navigate("/affiliate");
    }
  }, [token, user, navigate]);

  if (!token || !user || user?.role !== "affiliate") {
    return null;
  }

  return children;
};

export default AffiliateRoute;
