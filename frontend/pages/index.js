import Head from "next/head";
import Image from "next/image";
import LoginForm from "../components/forms/LoginForm";

export default function Home() {
  return (
    <div className="container">
      <div className="row min-vh-100 align-items center col-lg-6 offset-lg-3">
        <LoginForm />
      </div>
    </div>
  );
}
