import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Protected({ children, authentication = true }) {
  const navigate = useNavigate();
  const authStatus = useSelector((state) => state.auth.status); // Get auth status from Redux
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const isAuthorized = authStatus === authentication;

    if (!isAuthorized) {
      navigate(authentication ? "/login" : "/");
    }
    setLoading(false); // Set loading to false after navigation decision
  }, [authStatus, navigate, authentication]);

  if (loading) return <h1>Loading...</h1>;

  return <>{children}</>;
}
