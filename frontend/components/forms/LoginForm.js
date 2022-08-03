import React, { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button";
import { authCheck, login } from "../../api/auth";
import Handle422Error from "../../utils/Handle422Error";
import { toast } from "react-toastify";
import {useRouter} from "next/router"

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(email, password)
      .then((r) => {
        localStorage.setItem("token", r.data.token);
        router.push("/dashboard");
      })
      .catch((e) => {
        let status = e.response.status;
        console.log(status);
        if (status == 422) {
          Handle422Error(e.response.data.errors);
        } else if (status == 401) {
          toast("Invalid login credentials", { type: "error" });
        }
      });
  };

  return (
    <div className="w-100 shadow p-5 rounded">
      <h1 className="fw-bold text-primary">Login</h1>
      <p>Login with your credentials below</p>
      <hr className="my-4" />
      <form action="" onSubmit={handleSubmit}>
        <Input
          name="email"
          type="email"
          label="Email:"
          placeholder="test@test.com"
          value={email}
          onChangeCb={(e) => setEmail(e.target.value)}
        />
        <Input
          name="password"
          type="password"
          label="Password:"
          placeholder="password"
          value={password}
          onChangeCb={(e) => setPassword(e.target.value)}
          containerClass="my-3"
        />
        <Button type="submit" additionalClasses="mx-auto d-block" />
      </form>
    </div>
  );
}

export default LoginForm;
