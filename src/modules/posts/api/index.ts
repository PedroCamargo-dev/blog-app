import { instance } from '../../../infra/apiConfig'
import { IPosts } from '../interfaces/IPosts'
import { endpoints } from './endpoints'

export const res = {
  newPost: (data: IPosts) =>
    instance.post(endpoints.newPost.url, data, {
      headers: { Authorization: endpoints.newPost.accessToken },
    }),
}
