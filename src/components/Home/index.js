import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ListItem from '../ListItem';
import './index.css';

class Home extends Component {
    state = { todoList: [], name: '' };

    onChangeInp = (event) => {
        this.setState({ name: event.target.value });
    };

    onClickAddBtn = () => {
        const { todoList, name } = this.state;

        if (name.trim() !== '') {
            const newTodoList = [...todoList, { name, isCompleted: false, id: uuidv4() }];
            this.setState({ todoList: newTodoList, name: '' });
        }
    };

    onDelete = (id) => {
        const { todoList } = this.state;
        const newTodoList = todoList.filter((eachItem) => eachItem.id !== id);
        this.setState({ todoList: newTodoList });
    };

    onCompleted = (id) => {
        const { todoList } = this.state;
        const newTodoList = todoList.map((eachItem) => {
            if (eachItem.id === id) {
                return { ...eachItem, isCompleted: !eachItem.isCompleted };
            }
            return eachItem;
        });
        this.setState({ todoList: newTodoList });
    };

    render() {
        const { todoList, name } = this.state;

        return (
            <div className="container">
                <h1>Task Tracker</h1>
                <div className="input-container">
                    <input type="text" value={name} onChange={this.onChangeInp} placeholder="Enter task" />
                    <button onClick={this.onClickAddBtn}>Add</button>
                </div>
                <ul>
                    {todoList.map((eachItem) => (
                        <ListItem key={eachItem.id} data={eachItem} onDelete={this.onDelete} onCompleted={this.onCompleted} />
                    ))}
                </ul>
            </div>
        );
    }
}

export default Home;
