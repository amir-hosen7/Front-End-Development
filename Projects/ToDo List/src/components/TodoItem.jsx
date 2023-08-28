import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'

export default function TodoItem({ id, title, completed, toggleCheckBox, handleDelete }) {
  return (
    <div>
        <li key={id} className='list-inline' id='todo-item'>
            <label id='todo-item'>
                <input 
                    type="checkbox" 
                    className='mx-3' 
                    checked={completed}
                    onChange={(e) => toggleCheckBox(id, e.target.checked)}
                />
                { (completed === true) ? 
                    <p id='blur-text' className='pt-3'>{title}</p> 
                :
                    <p className='pt-3'>{title}</p>
                    }
            </label>
            <button
                className='btn btn-link mx-3 mt-1'
                onClick={() => handleDelete(id)}
                id='del-button'
            >
                <FontAwesomeIcon icon={faTrash} /> 
            </button>
            
        </li>
    </div>
  )
}



