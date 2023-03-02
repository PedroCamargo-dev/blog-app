import { object, string } from "yup";

export const loginSchema = object({
  email: string()
    .email("Deve ser um e-mail válido")
    .required("Esse campo não pode ficar vazio"),
  password: string()
    .min(4, "Coloque uma senha com mais de 4 digítos")
    .required("Esse campo não pode ficar vazio"),
});
