import React, { useEffect, useState } from "react";
import { authCheck } from "../../api/auth";
import { useRouter } from "next/router";

function AuthenticatedLayout({ children }) {
  const [authenticated, setAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    authCheck()
      .then(() => setAuthenticated(true))
      .catch(() => {
        setAuthenticated(false);
        router.push("/");
      });
  }, []);

  return authenticated ? (
    children
  ) : (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 min-vh-100">
      <div className="spinner-border text-primary" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>

      <p className="text-center mt-2">Loading...</p>
    </div>
  );
}

export default AuthenticatedLayout;
