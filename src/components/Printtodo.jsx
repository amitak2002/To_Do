import React, { useState } from 'react'
import { useContext } from 'react';
import ContextObject from '../ContextAmit/ContextAmit';

function Printtodo({data , id}) {

    const [msg , setMsg] = useState(data.msg)
    const [changeAllow , setChangeAllow] = useState(true)

    const {delTodo , changeTodo} = useContext(ContextObject)

    const deleteData = (e) => {
        e.preventDefault()
        delTodo(data.id)
    }

    const editData = (e) => {
        e.preventDefault()
        setChangeAllow((changeAllow) => false)

    }

    const saveData = (e) => {
        e.preventDefault()
        changeTodo(data.id , msg)
        setChangeAllow((changeAllow) => true);
    }

    const completeData = (e) => {
        e.preventDefault()
        const mesg = `${msg} is completed`
        setMsg(mesg);
        changeTodo(data.id , mgs)
        setChangeAllow((changeAllow) => false);

    }

  return (
    <div className='print'>
        <input className='todoinput' value = {msg} 
        disabled = {changeAllow}
        onChange={(e) => setMsg(e.target.value)}

        />

        <button type='submit' onClick={editData} disabled = {!changeAllow}>Edit</button>
        <button type='submit' onClick={deleteData}>Cancel</button>
        <button type='submit' onClick={saveData} disabled = {changeAllow}>Save</button>
        <button type='sumbit' onClick={completeData} disabled = {!changeAllow}>Complete</button>
        
    </div>
  )
}

export default Printtodo