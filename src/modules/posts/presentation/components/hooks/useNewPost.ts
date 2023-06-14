import { useUser } from '@/common/hooks/useUser'
import newPost from '@/modules/posts/domain/newPost'
import { IPosts } from '@/modules/posts/interfaces/IPosts'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

export const useNewPost = () => {
  const router = useRouter()
  const [user] = useUser()

  const { register, handleSubmit } = useForm()

  const onFormSubmit = async (data: IPosts) => {
    console.log(data)

    const response = await newPost(data)

    if (response.status === 201) {
      toast.success('Registered successfully! You will go to your posts.')
      setTimeout(() => {
        router.push(`/User/${user.username}`)
      }, 2000)
    } else {
      response.message.map((messagem, index) =>
        toast.error(response.message[index])
      )
    }
  }

  return [register, handleSubmit, onFormSubmit]
}
