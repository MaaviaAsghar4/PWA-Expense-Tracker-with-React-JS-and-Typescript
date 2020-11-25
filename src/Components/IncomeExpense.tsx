import React,{useContext} from 'react'
import {StateContext} from '../Context/GlobalState'
import { transactionType } from '../Types/type';
import { stateType } from '../Types/type';

const IncomeExpense = () => {

    const { transactions }:stateType = useContext(StateContext);
    const amount:number[] = transactions.map((transaction:transactionType) => transaction.amount);

    const income = amount.filter((item:number) => item > 0)
        .reduce((reducer:number, item:number) => (reducer += item), 0).toFixed(2);

    const expense = (amount.filter((item:number) => item < 0)
        .reduce((reducer:number, item:number) => (reducer += item), 0) * -1).toFixed(2);
    return (
        <div className="flexing">
            <div>
                <h3>Income</h3>
                <h3>${income}</h3>
            </div>
            <div>
                <h3>Expense</h3>
                <h3>${expense}</h3>
            </div>
        </div>
    )
}

export default IncomeExpense
