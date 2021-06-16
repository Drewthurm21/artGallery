
const LOAD_PHOTOS = 'session/LOAD_PHOTOS'

const loadPhotos = (photos) => ({
    type: LOAD_PHOTOS,
    payload: photos
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


const initialState = { photos: null }

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case LOAD_PHOTOS:
            return { ...state, photos: action.payload };
        default:
            return state;
    }
}