
const initialState = {
  message: '',
  visibility: false
}

const notificationReducer = (state = initialState, action) => {
  if (action.type === 'NOTIFICATION') {
    console.log(action.type)
    const foundAnecdote = action.anecdotes.find(anecdote => action.anecdoteId === anecdote.id)
    console.log('you voted ' + '\'' + foundAnecdote.content +'\'')
    return {message: 'you voted ' + '\'' + foundAnecdote.content +'\'' , visibility: true}
  }
  if (action.type === 'REMOVE_NOTIFICATION') {
    state.visibility = false
    return {message: '', visibility: false}
  }
  return state
}

export const notificationAction =(id, anecdotes) => {
  return {
    type: 'NOTIFICATION',
    anecdoteId: id,
    anecdotes: anecdotes
  }
}

export const removeNotificationAction = () => {
  return {
    type: 'REMOVE_NOTIFICATION'
  }
}

export default notificationReducer