import React from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const clientId = process.env.REACT_APP_CLIENT_SECRET;
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Outlet />
    </GoogleOAuthProvider>
  );
};

export default PrivateRoutes;
