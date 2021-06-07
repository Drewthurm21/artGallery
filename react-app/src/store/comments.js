
const LOAD_COMMENTS = 'session/LOAD_COMMENTS';

const loadComments = (comments) => ({
  type: LOAD_COMMENTS,
  payload: comments
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

export const deleteComment = (id) => async (dispatch) => {
  let res = await fetch(`/api/comments/${id}`, { method: 'DELETE' })

  if (res.ok) {
    return 'yoink'
  }
}

const initialState = { comments: null }

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_COMMENTS:
      return { comments: action.payload };
    default:
      return state;
  }
}