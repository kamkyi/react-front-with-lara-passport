const initialState = {
       counter :0
}
const reducer = (state = initialState, action ) =>{
       if(action.type === 'INCRE')
       {
              return {
                     counter:state.counter+2
              }
       }
       return state;
}

export default reducer;