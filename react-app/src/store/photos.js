
const LOAD_PHOTOS = 'session/LOAD_PHOTOS'
const LOAD_PHOTO = 'session/LOAD_PHOTO'


const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    payload: photos
})


const loadPhoto = (photo) => ({
    type: LOAD_PHOTO,
    payload: photo
})


export const getPhotos = () => async (dispatch) => {
    const res = await fetch('/api/photos', {
        headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
        const data = await res.json()
        dispatch(loadPhotos(data.photos))
    }
}

export const getPhoto = (id) => async (dispatch) => {
    const res = await fetch(`/api/photos/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
        const photo = await res.json()
        dispatch(loadPhoto(photo))
    }
}

export const getBlogPhoto = (id) => async (dispatch) => {
    const res = await fetch(`/api/posts/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    })

    if (res.ok) {
        const data = await res.json();
        dispatch(loadPhoto(data))
    }
}

export const uploadPhoto = (title, image) => async (dispatch) => {
    const formData = new FormData()
    formData.append('title', title)
    formData.append('image', image)

    await fetch('/api/photos', {
        method: 'POST',
        body: formData
    })
}

const initialState = { photos: null, photo: null }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PHOTOS:
            return { ...state, photos: action.payload };
        case LOAD_PHOTO:
            return { ...state, photo: action.payload }
        default:
            return state;
    }
}