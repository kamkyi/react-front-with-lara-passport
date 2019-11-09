const initialState = {
       counter :0,
       username : '',
       password : ''
}
const reducer = (state = initialState, action ) =>{
       if(action.type === 'SIGN_IN_EMAIL')
       {
              window.alert();
              return {
                     counter:state.counter+2
              }
       }
       else if(action.type === 'text_now'){
              window.alert(state);
              console.log(state);
              return {
                     
              }
       }
       return state;
}

export default reducer;