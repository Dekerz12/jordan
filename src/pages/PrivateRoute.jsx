import { Outlet } from "react-router-dom";
import Landing from "./Landing";
import useUser from "../context/useUser";

const PrivateRoutes = () => {
  const { isAuthenticated } = useUser();

  return isAuthenticated ? <Outlet /> : <Landing />;
};
export default PrivateRoutes;
