// redux
const redux = require('redux');
//create store by redux
const createStore = redux.createStore;

const initialState = {
    count:0
}

// reducer
const rootReducer = (state = initialState ,action) =>{

    if(action.type === 'COUNT_INC')
    {
         return {
              ...state ,
              count:state.count+1
         }
    }

    if(action.type === 'ADD_VAL')
    {
        return {
            ...state,
            count:state.count+action.value
        }
    }

    if(action.type === 'COUNT_DEC')
    {
        return {
            ...state ,
            count:state.count-action.sub
        }
    }
    return state;
}


//store
const store = createStore(rootReducer);

// dispatch
store.dispatch({type:'COUNT_INC'});

store.dispatch({type:'ADD_VAL',value:12});

store.dispatch({type:'COUNT_DEC',sub:9});


//subscription  