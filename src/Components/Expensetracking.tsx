import React, {useContext} from 'react'
import { stateType } from '../Types/type';
import {StateContext} from '../Context/GlobalState'
import { transactionType } from '../Types/type';

const Expensetracking = () => {
    const { transactions }:stateType = useContext(StateContext);
    const amount:number[] = transactions.map((transaction:transactionType) => transaction.amount);
    const total:number = amount.reduce((accumulator:number | any, initialAmount:number) => (accumulator += initialAmount), 0).toFixed(2);
    const sign:string = (total < 0) ? "-" : "+";
    if (total < 0) {
        window.alert("Your expenses has grossed your income");
    }
    return (
        <div>
            <div className="expense-tracking">
                <h2>Current Balance</h2>
                <h2>{sign}${Math.abs(total)}</h2>
            </div>
        </div>
    )
}

export default Expensetracking
