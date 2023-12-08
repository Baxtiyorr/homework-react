import { useReducer } from 'react'
import { useEffect } from 'react'
import './ToDoList.scss'

const initialState = {
    items: JSON.parse(localStorage.getItem('todoList')) || [],
}


const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                ...state,
                items: [...state.items, action.payload]
            }
                case 'ADD_TIME':
                    return{
                        ...state,
                        items: [...state.items, action.payload]
                    }
        case 'REMOVE_ITEM':
            return {
                ...state,
                items: state.items.filter((item, index) => index !== action.payload)
            }
        default:
            return state
    }
}


const ToDoList = () => {
    const [state, dispatch] = useReducer(reducer, initialState);

    const addItem = (text) => {
        dispatch({ type: 'ADD_ITEM', payload: text })
    }
    const addTime = (text) =>{
        dispatch({ type: 'ADD_TIME', payload: text})
    }
    const removeItem = (index) => {
        dispatch({ type: 'REMOVE_ITEM', payload: index })
    }

    useEffect(() => {
        localStorage.setItem('todoList', JSON.stringify(state.items));
    }, [state.items]);

    const handleSubmit = (e) => {
        e.preventDefault();
        const inputValue = e.target.task.value.trim()
        const time =  e.target.time.value.trim()
        const name =  e.target.name.value.trim()
        
        if (inputValue !== '' && time !== '' && name !== '' ) {
            addItem(name);
            addItem(inputValue);
            addTime(time)
            
            e.target.reset();
        }
    }

    return (
        <div>
            <h1 className='title'>To Do</h1>

            <form className='form' onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Enter name" />
                <input type="text" name="task" placeholder="Enter task" />
                <input type="text" name="time" placeholder="Enter time" />
                <button className='sub_btn' type='submit'>Submit</button>
            </form>
            {
                state.items.map((item, index) => (
                    <div className='list-wrapper' key={index}>
                        <div>{item}</div>
                        <button className='del_btn' onClick={() => removeItem(index)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default ToDoList
