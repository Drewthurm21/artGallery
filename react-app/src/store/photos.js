
const LOAD_PHOTOS = 'session/LOAD_PHOTOS'
// const ADD_PHOTO = 'session/ADD_PHOTOS'

const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    payload: photos
})

// const addPhoto = (photo) => ({
//     type: ADD_PHOTO,
//     payload: photo
// })

export const getPhotos = () => async (dispatch) => {
    const res = await fetch('/api/photos', {
        headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(loadPhotos(data.photos))
    }
}

// export const createPhoto = (photo) => async (dispatch) => {
//     const formData = new FormData()
//     formData.append('title', title)
//     formData.append('body', body)
//     formData.append('photo', photo)
//     const res = await fetch('/api/photos', {
//         method: 'POST',
//         body: formData
//     })

//     if (res.ok) {
//         const post = await res.json()
//         dispatch(addPost(post.post))
//     }
// }

// export const deletePost = (id) => async (dispatch) => {
//     const res = await fetch(`/api/photos/${id}`, {
//         method: 'DELETE'
//     })

//     if (res.ok) {
//         return 'yoink'
//     }
// }

const initialState = { photos: null }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PHOTOS:
            return { ...state, photos: action.payload };
        // case ADD_PHOTO:
        //     return { ...state, photos: [...state.photos, action.payload] }
        default:
            return state;
    }
}