import { useContext } from "react";
import { TodosContext } from "../../store/todos-context";
import Todo from "./Todo";
import classes from './Todos.module.css';

const Todos: React.FC = (props) => {

    const todosCtx = useContext(TodosContext);    

    const items = todosCtx.items;
    const onRemoveItem = todosCtx.removeTodo;

    return <ul className={classes.todos}>
        {items.map(todo => <Todo key={todo.id} text={todo.text} id={todo.id} onRemoveItem={onRemoveItem.bind(null, todo.id)} />)}
    </ul>

}

export default Todos;