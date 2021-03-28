import React,{useState, useContext} from 'react'
import { GlobalContext } from './../context/GlobalState';

const AddTransaction = () => {
const [text,setText]= useState('');
const [amount,setAmount]= useState(0);

const {addTransaction}=useContext(GlobalContext);

const onSubmitFn = e => {
    e.preventDefault();

    const newTransaction = {
        //generating ID
        ig: Math.floor(Math.random() * 1000000),
        //since we haave state and amount available we pass them as so
        text,
        amount: +amount 
        //this +amount will help us change the amount passing as a string into a number, can also use ParseInt
    }
    //callign addTransaction from our context an passign the new transaction
    addTransaction(newTransaction);
}


    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmitFn}>
        <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" 
            value={text} 
            onChange={(e)=>setText(e.target.value)} 
            placeholder="Enter text..." />
        </div> 
        <div className="form-control">
            <label htmlFor="amount">Amount <br />
            (negative - expense, positive - income)
            </label>            
            <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn">Add transaction</button>
        </form>
        </>
    )
}

export default AddTransaction
