const initialState = ''
  
const filterReducer = (state = initialState, action) => {
  if (action.type ==='FILTER_CHANGE'){
    return action.value
  }
  return state
}

export const filterChange =(value)=>{
  return {
    type:'FILTER_CHANGE',
    value:value
  }
}
export default filterReducer