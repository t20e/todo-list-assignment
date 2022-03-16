import React, {useState} from 'react';

const TodoList = () => {
    let [nameInput, setNameInput] = useState("")
    let [taskComplete, setTaskComplete] = useState(false) 
    let [toDoItems, setToDoItems] = useState([])
    

        const addTodoItems = (e) => {
            e.preventDefault();
            let newTodo = {nameInput, taskComplete}
            //create a new var to set the input fields to an object so we can access the keys
            setNameInput("")
            //clear out the input field
            setToDoItems([...toDoItems,newTodo]);
            //copy the old task list and add a new item to it and paste it back so new task items
        }
        const deleteTask =(i) =>{
            let filterOutTheIindex = toDoItems.filter((item, index) =>{
                return index != i
            })
            setToDoItems(filterOutTheIindex)
            //make the fitlered out var into the new toDoLists
        }
        const updateTaskCompletion = (i) =>{
            toDoItems[i].taskComplete = !toDoItems[i].taskComplete
            //set the taskcomplete to the opposite of whatever it its currentent false || true
            setToDoItems(toDoItems);
            console.log(toDoItems, '**');
        }
    return (
        <div>
            <form onSubmit= {addTodoItems} >
                <label htmlFor="">name:</label>
                <input type="text" onChange={(e) => {setNameInput(e.target.value)} } value={nameInput} />
                {/* value is the empty string the onchange makes the value to input then we need to change it back to empty after submititing */}
                {/* //value used to make it clear out  */}

                <input type="submit" value="submit" />
            </form>
            <div>
                {
                    toDoItems.map((task, i) =>{
                        return <div key={i}>
                            <h1 style={{textDecoration: task.taskComplete? 'line-through' 
                            : null}}>{task.nameInput}</h1>

                            <button onClick={() => deleteTask(i)} style={{backgroundColor: 'blue', color:'white', borderRadius: '50px'}}>delete task</button>
                            <input id='checkBox' type="checkbox" onClick={() => updateTaskCompletion(i)}  />

                            
                        </div>
                    })
                }
            </div>
        </div>
    );
};


export default TodoList;