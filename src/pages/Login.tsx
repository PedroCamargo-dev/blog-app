import Button from "../components/core/button";
import Container from "../components/core/container";
import Form from "../components/core/form";
import Input from "../components/core/input";

export default function Login() {
  return (
    <Container>
      <Form title="Login">
        <Input
          id="email"
          label="E-mail"
          name="email"
          type="email"
          placeholder=""
        />
        <Input
          id="password"
          label="Senha"
          name="password"
          type="password"
          placeholder=""
        />
        <Button label="Login" />
      </Form>
    </Container>
  );
}
