import Form from '@/common/components/Form'
import EditorMD from '@/modules/posts/presentation/components/newPost/components/EditorMD'
import { useNewPost } from '../hooks/useNewPost'
import Button from '@/common/components/Button'
import Toast from '@/common/components/Toast'

export default function NewPost() {
  const [register, handleSubmit, onFormSubmit] = useNewPost()

  return (
    <Form onSubmit={handleSubmit(onFormSubmit)} title="Publicar novo conteudo">
      <Toast />
      <div className="-mt-40 flex justify-center">
        <EditorMD register={register} />
      </div>
      <div className="mt-8 flex justify-end">
        <div className="flex">
          <Button
            label="Cencelar"
            extraClass="border w-32 border-dark-blue-400 py-2.5 p-4 text-dark-blue-400 hover:bg-dark-blue-500 hover:text-white focus:bg-dark-blue-500 focus:text-white mr-3"
          />
          <Button
            label="Publicar"
            extraClass="border w-32 border-dark-violet-400 py-2.5 p-4 text-dark-violet-400 hover:bg-dark-violet-500 hover:text-white focus:bg-dark-violet-500 focus:text-white"
          />
        </div>
      </div>
    </Form>
  )
}
