import Form from "../../../../core/form";
import Button from "../../../../core/button";
import Input from "../../../../core/input";
import { useState } from "react";
import { useLoginForm } from "../../hooks/useLoginForm";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, errorForm, handleSubmit } = useLoginForm({
    email,
    password,
  });

  return (
    <>
      <Form title="Login" onSubmit={handleSubmit}>
        <Input
          id="email"
          label="E-mail"
          name="email"
          type="email"
          placeholder=""
          value={email}
          erros={errorForm?.email}
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          label="Senha"
          name="password"
          type="password"
          placeholder=""
          value={password}
          erros={errorForm?.password}
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <Button label="Login" />
      </Form>
    </>
  );
}
