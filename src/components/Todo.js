import React, { useState } from "react"
import './Todo.css'
import todo from '../images/todo.svg'
import { useSelector,useDispatch} from "react-redux"
import { addTodo,deleteTodo,removeAll} from "../actions/index"
const Todo = () => {

    const [inputData,setInputData] = useState();
    const list = useSelector((state)=>state.todoReducer.list);
    const dispatch = useDispatch();
    
//     useEffect(() => {
//    localStorage.setInputData('list',JSON.stringify(inputData) )
        
//     }, [inputData]);
    return (
        <>
            <div className='main-div'>
    <div className='child-div'>
        <figure>
            <img src={todo} alt='todo-logo' ></img>
            <figcaption>Add your List Here</figcaption>
        </figure>
        <div className='addItems'>
            <input type="text" placeholder='😍 Add items....' value ={inputData} 
            onChange ={(event) => setInputData(event.target.value)} />

     <i class="fa fa-plus add-btn" aria-hidden="true" title='Add Item' 
     onClick={()  => dispatch(addTodo(inputData),setInputData(''))}></i>
                 
        </div>
        <div className='showItems'>

        {
            list.map((elem)=>{
                return (
                <div className='eachItem' key={elem.id}>
            <h3>{elem.data}</h3>
            <div className="todo-btn">
            <i class="fa fa-trash add-btn" aria-hidden="true" title='Delete Item'
            onClick={()=> dispatch(deleteTodo(elem.id))}></i>
             </div>
            </div>
                )
            })
        }
      
            </div>
<div className='showItems'>
        <button className='btn effect04' data-sm-link-text ="Remove All" onClick={()=>dispatch(removeAll())}>
        <span> Check List</span></button>
        </div>
    </div>
        
    </div>
        </>
    )
}

export default Todo
