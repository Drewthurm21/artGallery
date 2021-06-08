
const LOAD_POSTS = 'session/LOAD_POSTS'
const ADD_POST = 'session/ADD_POST'

const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  payload: posts
})

const addPost = (post) => ({
  type: ADD_POST,
  payload: post
})

export const getPosts = () => async (dispatch) => {
  const res = await fetch('/api/posts', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (res.ok) {
    const posts = await res.json()
    dispatch(loadPosts(posts.posts))
  }
}

export const createPost = (name, email, content) => async (dispatch) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('content', content)
  const res = await fetch('/api/posts', {
    method: 'POST',
    body: formData
  })

  if (res.ok) {
    const post = await res.json()
    dispatch(addPost(post.post))
  }
}

export const deletePost = (id) => async (dispatch) => {
  const res = await fetch(`/api/posts/${id}`, {
    method: 'DELETE'
  })

  if (res.ok) {
    return 'yoink'
  }
}

const initialState = { posts: null }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_POSTS:
      return { posts: action.payload };
    case ADD_POST:
      return { posts: [...state, action.payload] }
    default:
      return state;
  }
}