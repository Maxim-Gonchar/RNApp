const GET_FIRST_NAME = "GET_FIRST_NAME";
const GET_SECOND_NAME = "GET_SECOND_NAME";
const GET_IMAGE = "GET_IMAGE";

const initialState = {
  firstName: null,
  secondName: null,
  image: null
}
export const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_FIRST_NAME:
      return { ...state, firstName: action.payload }
    case GET_SECOND_NAME:
      return { ...state, secondName: action.payload }
    case GET_IMAGE:
      return { ...state, image: action.payload }
    default:
      return state
  }
}
export const getFistName = (payload) => ({ type: GET_FIRST_NAME, payload });
export const getSecondName = (payload) => ({ type: GET_SECOND_NAME, payload });
export const getImage = (payload) => ({ type: GET_IMAGE, payload });