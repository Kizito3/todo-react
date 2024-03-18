 import {useState} from 'react';
 import styles from './form.module.css'
export default function Form({todos, setTodos}) {
    const [todo, setTodo] = useState({name: "", done: false});
   
    function handleSumbit (e) {
        e.preventDefault();
        setTodos([...todos,todo]);
        setTodo({name: "", done: false});
    }
    return(
        <form className={styles.todoform} onSubmit={handleSumbit}>
            <div className={styles.todoflex}>
                <input 
                onChange={(e) => setTodo({name:e.target.value, done : false})} 
                type="text"
                placeholder='Enter a Todo'
                value={todo.name}
                required 
                />
                <button 
                type='submit' 
                >
                Add
                </button>
            </div>
        </form>
    )
}