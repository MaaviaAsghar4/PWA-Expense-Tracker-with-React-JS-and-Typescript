import { transactionType } from '../Types/type';
import {stateType} from '../Types/type'

const FunctionReducer = (state: stateType, action: any) => {
    switch (action.type) {
        case "Add_Transaction":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        case "Delete_Transaction":
            return {
                ...state,
                transactions: state.transactions.filter((transaction:transactionType) => transaction.id !== action.payload)
            }
        default:
        return state;
    }
}

export default FunctionReducer