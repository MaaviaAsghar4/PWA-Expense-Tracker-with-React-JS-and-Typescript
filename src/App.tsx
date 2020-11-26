import React from 'react'
import Header from './Components/Header'
import './App.css'
import History from './Components/History'
import Expensetracking from './Components/Expensetracking'
import IncomeExpense from './Components/IncomeExpense'
import Addtransactions from './Components/Addtransactions'
import { GlobalStateProvider } from './Context/GlobalState'
import firebase from './Config/firebase'

const App:React.FC = () => {
  window.addEventListener('load', ()=>{
    const messaging = firebase.messaging();
    messaging.requestPermission()
      .then(()=>{
        console.log('permission granted')
      })
      .catch(()=>console.log('permission denied'))
  })

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
