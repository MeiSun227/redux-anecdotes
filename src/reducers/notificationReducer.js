
const initialState = {
  message: '',
  visibility: false
}

const notificationReducer = (state = initialState, action) => {
  if (action.type === 'NOTIFICATION') {
    return { message: 'you voted ' + '\'' + action.data.content + '\'', visibility: true }
  }
  if (action.type === 'REMOVE_NOTIFICATION') {
    state.visibility = false
    return { message: '', visibility: false }
  }
  return state
}

export const notificationAction = (anecdote) => {
  return {
    type: 'NOTIFICATION',
    data: anecdote
  }
}

export const removeNotificationAction = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer