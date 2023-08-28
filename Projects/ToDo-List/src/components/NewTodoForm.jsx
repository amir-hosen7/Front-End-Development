import React, { useState } from 'react'

export default function NewTodoForm({ addTodoItem }) {
    const [newItem, setNewItem] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        addTodoItem(newItem);
        setNewItem("");
    }

  return (
    <div>
        <form className='pt-3 my-3' onSubmit={handleSubmit}>
            <div>
                <label>New Item</label>
                <input 
                    type="text" 
                    className='form-control my-2'
                    value={newItem}
                    onChange={(e) => setNewItem(e.target.value)}
                    placeholder='Enter item here...'
                />
                <input type="submit" className='btn btn-primary'/>
            </div>
        </form>
    </div>
  )
}



