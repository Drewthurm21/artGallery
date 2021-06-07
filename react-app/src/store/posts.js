
const LOAD_POSTS = 'session/LOAD_POSTS'

const loadPosts = (posts) => ({
  type: LOAD_POSTS,
  payload: posts
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
    default:
      return state;
  }
}