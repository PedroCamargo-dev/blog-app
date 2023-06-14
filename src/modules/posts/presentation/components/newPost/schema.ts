import * as z from 'zod'

export const newPostSchema = z.object({
  title: z.string().nonempty('Você precisa inserir um Titulo'),
  content: z
    .string()
    .nonempty('Você precisa inserir algo no corpo da postagem'),
})
