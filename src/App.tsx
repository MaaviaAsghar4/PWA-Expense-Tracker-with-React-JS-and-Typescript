import React from 'react'
import Header from './Components/Header'
import './App.css'
import History from './Components/History'
import Expensetracking from './Components/Expensetracking'
import IncomeExpense from './Components/IncomeExpense'
import Addtransactions from './Components/Addtransactions'
import { GlobalStateProvider } from './Context/GlobalState'

const App:React.FC = () => {
  return (
    <GlobalStateProvider>
      <div>
        <Header />
        <Expensetracking />
        <IncomeExpense />
        <History />
        <Addtransactions />
      </div>
    </GlobalStateProvider>
  )
}

export default App
