import React, { useReducer, useState } from 'react'

function reducer(state, action) {
    switch (action.type) {
        case 'Withdraw':
            return state - action.payload;
        case 'Deposit':
            return state += action.payload
        
    }
}


function Reducer() {
    const [value, setvalue] = useState()
    const [UserPassword, setUserPassword] = useState()
    const [state, dispatch] = useReducer(reducer, 1000)
    /* ERRAND BOY */
    const Withdraw = (stat) => {
        dispatch({
            type: 'Withdraw',
            payload: stat,
        })
    }
    const deposit = () => {
        dispatch({
            type: 'Deposit',
            payload: Number(value)
        })
        value=''
    }

    function addform(e) {
        e.preventDefault()
    }

    
  return (
      <div>
          
          <h1>{state}</h1>
          
          <button onClick={() => Withdraw(200)}>Withdraw</button>
          <input type="text" placeholder='Deposit' value={value} onChange={(e)=> setvalue(e.target.value)} />
          <button onClick={deposit}>Deposit</button>

        <h1>Getting Value with reducer</h1>
        <div>
        <form onClick={addform} action="">
            <input value={UserPassword} onChange={(e)=> setUserPassword(e.target.value)} type="text"  placeholder="Name" required="" />
            <button>Send</button>
        </form>     
  </div>
    </div>
  )
}

export default Reducer