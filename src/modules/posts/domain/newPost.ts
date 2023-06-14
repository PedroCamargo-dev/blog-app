import { res } from '../api'
import { IPosts } from '../interfaces/IPosts'

const newPost = async (data: IPosts) => {
  try {
    const response = await res.newPost(data)
    return response
  } catch (err: any) {
    const error = err.response.data
    return error
  }
}

export default newPost
