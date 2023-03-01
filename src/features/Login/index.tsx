import Form from "../../components/core/form";
import Button from "../../components/core/button";
import Input from "../../components/core/input";
import { useState } from "react";
import { useLogin } from "../../domain/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();

  const handleEmailChange = (event: any) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: any) => {
    setPassword(event.target.value);
  };

  console.log(email, password);

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      await login(email, password);
      console.log(email, password);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Form title="Login" onSubmit={handleSubmit}>
      <Input
        id="email"
        label="E-mail"
        name="email"
        type="email"
        value={email}
        placeholder=""
        onChange={handleEmailChange}
      />
      <Input
        id="password"
        label="Senha"
        name="password"
        type="password"
        value={password}
        placeholder=""
        onChange={handlePasswordChange}
      />
      <Button label="Login" />
    </Form>
  );
}
