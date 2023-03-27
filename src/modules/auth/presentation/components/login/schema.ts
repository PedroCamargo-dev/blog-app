import * as z from 'zod'

export const authSchema = z.object({
  email: z
    .string()
    .nonempty('Você precisa inserir um email')
    .email('Precisa ser um email válido')
    .min(4, { message: 'O email precisa conter mais que 4 caracteres' }),
  password: z
    .string()
    .nonempty('Você precisa inserir uma senha')
    .regex(/^(?=.*\d)[0-9a-zA-Z$*&@#]{2,}$/, {
      message: 'Deve conter ao menos um dígito',
    }),
})
