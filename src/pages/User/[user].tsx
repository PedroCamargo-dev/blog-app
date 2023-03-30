import { useSelector } from 'react-redux'

const Post = () => {
  const { user } = useSelector((state) => state.userReducer)

  return (
    <>
      <p>name: {user.name}</p>
      <p>email: {user.email}</p>
      <p>username: {user.username}</p>
    </>
  )
}

export default Post
