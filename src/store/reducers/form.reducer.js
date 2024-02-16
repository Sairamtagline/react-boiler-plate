import { ON_FORM_CHANGE } from '../constants'

const initialState = {
  isValid: {},
  formData: {},
}
const form = (state = initialState, action) => {
  switch (action.type) {
    case ON_FORM_CHANGE:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default form
