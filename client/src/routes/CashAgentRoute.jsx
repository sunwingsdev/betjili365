import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import { useEffect } from "react";

const CashAgentRoute = ({ children }) => {
  const { token, user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const { addToast } = useToasts();

  useEffect(() => {
    if (!token || !user || user?.role !== "agent") {
      addToast("Please login as an agent first", {
        appearance: "error",
        autoDismiss: true,
      });
      navigate("/becomeanagent");
    }
  }, [token, user, addToast, navigate]);

  if (!token || !user || user?.role !== "agent") {
    return null;
  }

  return children;
};

export default CashAgentRoute;
