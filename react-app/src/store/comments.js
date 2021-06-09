
const LOAD_COMMENTS = 'session/LOAD_COMMENTS';
const ADD_COMMENT = 'session/ADD_COMMENT'


const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: comments
})


const addComment = (comment) => ({
  type: ADD_COMMENT,
  payload: comment
})


export const getComments = () => async (dispatch) => {
  let res = await fetch('/api/comments', {
    headers: {
      'Content-Type': 'application/json'
    }
  })

  if (res.ok) {
    let comments = await res.json()
    dispatch(loadComments(comments.comments))
  }
}


export const postComment = (name, email, content) => async (dispatch) => {
  const formData = new FormData()
  formData.append('name', name)
  formData.append('email', email)
  formData.append('content', content)
  let res = await fetch('/api/comments', {
    method: 'POST',
    body: formData
  })

  if (res.ok) {
    const comment = res.json()
    dispatch(addComment(comment))
  }
}


export const deleteComment = (id) => async (dispatch) => {
  let res = await fetch(`/api/comments/${id}`, { method: 'DELETE' })

  if (res.ok) {
    return 'yoink'
  }
}


const initialState = { comments: null, comment: null }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { ...state, comments: action.payload };
    case ADD_COMMENT:
      return { ...state, comment: action.payload }
    default:
      return state;
  }
}