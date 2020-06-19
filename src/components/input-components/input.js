import React, { useState,useContext } from 'react'
import './input.css'
import {GlobalContext} from '../../context/globalContext'
export const Input = () => {
    const {addTransaction} = useContext(GlobalContext)

    const [Text,setText]=useState("")    
    const [Num,setNum]=useState() 
    
    const handleSubmit =(e) => {
        e.preventDefault();
   
        addTransaction({
            text : Text,
            amount : parseInt(Num)
        })

        setText("")
        setNum("")
    }

  
    return (
        <div>
            <h5 className="newTransaction">Add new Transaction</h5>
            <hr/>
        <form onSubmit={(e)=>{handleSubmit(e)}} >
        <input value={Text} type="text" onChange={(ev)=>{ setText(ev.target.value)}} placeholder="Enter some Text for transaction detail" className="form-control" aria-label="Amount (to the nearest dollar)" required/>    
        <br/>
        <input value={Num} onChange={(ev)=>{setNum(ev.target.value)}} type="number" placeholder="Enter Amount" className="form-control input-box" aria-label="Amount (to the nearest dollar)" required />          
        <br/>
        <button type="Submit" className="btn btn-primary btn-lg btn-block">Add new Transaction</button>
        </form>
        </div>
    )
    }
