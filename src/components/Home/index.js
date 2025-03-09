import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../ListItem';
import './index.css';

const Home = () => {
    const [todoList, setTodoList] = useState([]);
    const [name, setName] = useState('');

    const onChangeInp = (event) => {
        setName(event.target.value);
    };

    const onClickAddBtn = () => {
        if (name.trim() !== '') {
            setTodoList([...todoList, { name, isCompleted: false, id: uuidv4() }]);
            setName('');
        }
    };

    const onDelete = (id) => {
        setTodoList(todoList.filter((eachItem) => eachItem.id !== id));
    };

    const onCompleted = (id) => {
        setTodoList(todoList.map((eachItem) => (
            eachItem.id === id ? { ...eachItem, isCompleted: !eachItem.isCompleted } : eachItem
        )));
    };

    return (
        <div className="container">
            <h1>Task Tracker</h1>
            <div className="input-container">
                <input type="text" value={name} onChange={onChangeInp} placeholder="Enter task" />
                <button onClick={onClickAddBtn}>Add</button>
            </div>
            <ul>
                {todoList.map((eachItem) => (
                    <ListItem key={eachItem.id} data={eachItem} onDelete={onDelete} onCompleted={onCompleted} />
                ))}
            </ul>
        </div>
    );
};

export default Home;
