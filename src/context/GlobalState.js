import react, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'
//we are going to have global reducers

//initial state
//all global states will go in this object
//can replace this with an empty array to not have any initial values
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 }
    ]
}

//create context
export const GlobalContext = createContext(initialState);

//provider - in order for components to have access
//since we're wrapping stuff in App.js, all the components will be children
export const GlobalProvider = ({children})=> {
    const [state, dispatch] = useReducer(AppReducer,initialState)
//provider provides state and any actions
//has a value prop through which we can pass actions

//actions
//pass id for deleting
function deleteTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    });
}

//pass transaction
function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    });
}

return(<GlobalContext.Provider value={{
    //have to pass what we want to use in the provider
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
}}>
    {children}
</GlobalContext.Provider>
)
}