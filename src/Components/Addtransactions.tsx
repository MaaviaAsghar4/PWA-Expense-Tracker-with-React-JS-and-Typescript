import React, { useState, useContext } from "react";
import {StateContext} from '../Context/GlobalState'

const Addtransactions:React.FC = () => {

    const [transaction, setTransactionType] = useState('');
    const [amount, setTransactionAmount] = useState(0);
    const { addTransaction } = useContext(StateContext);

    const submitTransaction = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const newEntry = {
            id: Math.floor(Math.random() * 333333333),
            transaction,
            amount: +amount
        }
        console.log(newEntry)
        addTransaction(newEntry);
    }

    const clear = (e: React.FocusEvent<HTMLInputElement>) => {
        e.target.value = ""
    }

    const setAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
        let number: number | any = e.target.value
        setTransactionAmount(number)
        }
    return (
        <div>
            <h3>Add New Transactions</h3>
            <form className="form-transaction" onSubmit={submitTransaction}>
                <label htmlFor="transactions">Transactions</label>
                <br></br>
                <input type="text" value={transaction} onFocus={clear} onChange={(e) => setTransactionType(e.target.value)} placeholder="Enter Transaction Type" />
                <br></br>
                <label htmlFor="amount">Amount</label>
                <br></br>
                <sub>(-ve indicates expense, +ve indicates income)</sub>
                <br></br>
                <input type="number" value={amount} onFocus={clear} onChange={setAmount} placeholder="Enter amount" />
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Addtransactions
