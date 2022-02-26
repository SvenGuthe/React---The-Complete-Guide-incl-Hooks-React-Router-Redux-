import React from 'react';
import classes from './Todo.module.css';

const Todo: React.FC<{ text: string, id: string, onRemoveItem: () => void }> = (props) => {
    return <li className={classes.item} onClick={props.onRemoveItem}>{props.text}</li>

};

export default Todo;