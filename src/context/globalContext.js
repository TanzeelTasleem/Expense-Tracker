import React, { createContext,useReducer } from 'react'
import { transReducer } from './transReducer';

const initialState = {
    transaction:[
        {text:"salary" , amount: 200},
        {text:"bill" , amount: -50}
    ]
}
export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({children})=>{
    
    const [state, dispatch] = useReducer(transReducer, initialState)

    function addTransaction(dataobj){
        dispatch({
            type: "ADD_TRANSACTION",
            payload : {
                text: dataobj.text,
                amount: dataobj.amount
            },
        })
    }
     function deleteTransaction(item){ 
        dispatch({
             type:"DELETE_TRANSACTION",
             payload:{
                value:item
             }
         })
     }

        return(
            <GlobalContext.Provider value={{
                transaction: state.transaction,
                 addTransaction,
                 deleteTransaction
            }}>
                {children}
            </GlobalContext.Provider>
        )
    
}
    