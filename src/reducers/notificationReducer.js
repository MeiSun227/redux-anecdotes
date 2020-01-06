
const initialState = 'hello world'

const notificationReducer = ( state = initialState, action) => {
  console.log('action',action)
  return state
}

export default notificationReducer