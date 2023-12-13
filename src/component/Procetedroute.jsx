/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";

function Procetedroute({ childern }) {
  const { user } = UserAuth();

  if (!user) {
    return <Navigate to="/" />;
  } else {
    return childern;
  }
}

export default Procetedroute;
