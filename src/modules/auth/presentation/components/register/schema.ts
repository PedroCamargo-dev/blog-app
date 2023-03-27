import * as z from 'zod'

export const registerSchema = z.object({
  name: z
    .string()
    .nonempty('Você precisa inserir um nome')
    .regex(/^[A-Z][a-z]+\s[A-Z][a-z]+$/, {
      message: 'Deve iniciar com maiúsculo os nomes',
    }),
  email: z
    .string()
    .nonempty('Você precisa inserir um email')
    .email('Precisa ser um email válido')
    .min(4, { message: 'O email precisa conter mais que 4 caracteres' }),
  username: z
    .string()
    .nonempty('Você precisa inserir um usuário')
    .min(4, { message: 'O usuário precisa conter mais que 4 caracteres' }),
  password: z
    .string()
    .nonempty('Você precisa inserir uma senha')
    .regex(/^(?=.*\d)[0-9a-zA-Z$*&@#]{2,}$/, {
      message: 'Deve conter ao menos um dígito',
    })
    .regex(/^(?=.*[a-z])[0-9a-zA-Z$*&@#]{2,}$/, {
      message: 'Deve conter ao menos uma letra minúscula',
    })
    .regex(/^(?=.*[A-Z])[0-9a-zA-Z$*&@#]{2,}$/, {
      message: 'Deve conter ao menos uma letra maiúscula',
    })
    .regex(/^(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{2,}$/, {
      message: 'Deve conter ao menos um caractere especial',
    })
    .regex(/^[0-9a-zA-Z$*&@#]{8,}$/, {
      message: 'Deve conter ao menos 8 dos caracteres mencionados',
    }),
})
