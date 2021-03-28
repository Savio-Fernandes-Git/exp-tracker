//CONTAINS ALL OUR FUNCTIONS
//reducer: specify how the applications state changes in response to certian actions to our context
// eslint-disable-next-line import/no-anonymous-default-export
export default (state,action)  => {
    switch(action.type){
        case 'DELETE_TRANSACTION':
        return{
            ...state,
            transactions: state.transactions
            .filter(transaction => transaction.id !== action.payload)
        }
        case 'ADD_TRANSACTION':
            return{
                ...state,
                transactions: [action.payload,...state.transactions]
            //action.payload is the neew transacation while ...state.transactions is the array of all the transactions
            }
        default: return state;
    }
}