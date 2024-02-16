import { ON_FORM_CHANGE } from '../constants'

export const onChangeAction = () => (dispatch, getState) => {
  const state = getState()
  dispatch({ type: ON_FORM_CHANGE, state })
}
