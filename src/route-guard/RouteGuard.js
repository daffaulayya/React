import { Navigate, Outlet } from "react-router-dom";

export default function RouteGuard() {
  console.log("isLogin", sessionStorage.getItem("isLogin"));
  if (!sessionStorage.getItem("isLogin")) {
    return <Navigate to="/login" />;
  }

  return <Outlet />;
}
