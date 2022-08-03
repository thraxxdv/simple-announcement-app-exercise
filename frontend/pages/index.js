import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/forms/LoginForm";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { authCheck } from "../api/auth";

export default function Home() {
  const router = useRouter();
  useEffect(() => {
    authCheck()
      .then((r) => router.push("/dashboard"))
      .catch((e) => null);
  }, []);

  return (
    <div className="container">
      <div className="row min-vh-100 align-items-center col-lg-6 offset-lg-3">
        <LoginForm />
      </div>
    </div>
  );
}
