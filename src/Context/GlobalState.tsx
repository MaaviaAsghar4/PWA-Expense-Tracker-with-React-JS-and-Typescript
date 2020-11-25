import React, { createContext, useReducer } from 'react'
import { transactionType } from '../Types/type'
import { stateType } from '../Types/type'
import FunctionReducer from "./FunctionReducer"

const initialState: stateType = {
    transactions: []
}

export const StateContext: React.Context<any> = createContext(initialState)

export const GlobalStateProvider: React.FC = ({ children }: any) => {
    const [state, dispatch] = useReducer(FunctionReducer, initialState);

    function addTransaction(transaction: transactionType) {
        dispatch({
            type: "Add_Transaction",
            payload: transaction
        })
    }

    function deleteTransaction(id:number){
        dispatch({
            type: "Delete_Transaction",
            payload: id
        });
    }

    return (
        <StateContext.Provider
            value={{
                transactions: state.transactions,
                addTransaction,
                deleteTransaction
            }}
        >
            {children}
        </StateContext.Provider>
    )
}