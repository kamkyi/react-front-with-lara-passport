const initialState = {
       counter :0,
       username : '',
       password : ''
}
const reducer = (state = initialState, action ) =>{
       if(action.type === 'INCRE')
       {
              return {
                     counter:state.counter+2
              }
       }else if(action.type === 'LOGIN')
       {
            
       }
       return state;
}

export default reducer;