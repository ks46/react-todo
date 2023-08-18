import './App.css';
import { useState } from 'react';
import Task from './Task';

function App() {
    const [tasks, setTasks] = useState([
        { text: 'Go to gym', checked: true },
        { text: 'Drink coffee', checked: false },
    ])

    const handleSubmit = (event) => {
        // Add a new task to the tasks array
        // HINT: Spread the current tasks array into a new array, add this new task on there
        // then update the state of tasks
        event.preventDefault()
        const task = event.target[0].value
        const newTasks = [...tasks, {text: task, checked: false}]
        setTasks(newTasks)
    }

    const handleDelete = (index) => {
        // Using the provided index, remove the task from the array and update
        // state to re-render the component
        // HINT: .filter()
        const newTasks = tasks.filter((todoItem, todoIndex) => todoIndex !== index)
        setTasks(newTasks)
    }

    const handleUpdate = (index, checked) => {
        // Find the task by the provided index
        // Change the checked property on the task
        // Update the state array to re-render the component
        // HINT: .map() or access by index
        const newTasks = tasks.map((todoItem, todoIndex) => {
            if (todoIndex === index)
                return {...todoItem, checked:checked}
            return todoItem
        })
        setTasks(newTasks)
    }

  return (
    <div className='app'>
        <main>
            <form onSubmit={handleSubmit}>
                <input type="text" name="task" />
                <button type="submit">add task</button>
            </form>

            {
                tasks.map((todoItem, index) => {
                    return <Task todoItem={todoItem} index={index} handleUpdate={handleUpdate} handleDelete={handleDelete} />
                })
            }
        </main>
    </div>
  );
}

export default App;