import React, { useState } from "react";
import Input from "./elements/Input";
import Button from "./elements/Button"

function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('')

  const handleClick = (e) => {
    e.preventDefault();
    console.log(email)
  }

  return (
    <div className="w-100 shadow p-5">
      <h1 className="fw-bold text-primary">Login</h1>
      <p>Login with your credentials below</p>
      <hr className="my-4" />
      <form action="" onSubmit={(e) => e.preventDefault()}>
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
        <Button type="submit" additionalClasses="mx-auto d-block" onClickCb={handleClick}/>
      </form>
    </div>
  );
}

export default LoginForm;
