import React, { Component } from 'react'
import TodoItem from './todoItem';
import RemainInfo from './remainInfo';
import RemoveDonesButton from './removeDonesButton';
import AddTodo from './AddTodo';

export default class TodoList extends Component {
    state = {
        todoItems:[
            {
                context : '밥먹기',
                isDone : false
            }
        ]
    }
    getRemainItems = ()=>{
        var remainCount = 0;
        this.state.todoItems.forEach((item)=> {
            if(!item.isDone) remainCount++;
        });

        return remainCount;
    }
    renderTodoItems = ()=> {
        return this.state.todoItems.map((item, index) => {
            return (
                <TodoItem isDone={item.isDone} context={item.context} index={index} changeState={this.changeState}></TodoItem>
            )
        });
    }
    addNewItem = (context)=>{
        var todoItems = this.state.todoItems;
        todoItems.push({
            context: context,
            isDone : false
        });

        this.setState({todoItems});
    }
    changeState = (index)=>{
        var {todoItems} = this.state;
        todoItems[index].isDone = !todoItems[index].isDone;

        this.setState({todoItems});
    }
    removeDones = () => {
        var {todoItems} = this.state;
        var newItems = todoItems.filter((item)=>{
            return !item.isDone
        });

        this.setState({todoItems:newItems});
    }
    render() {
        var {todoItems} = this.state;

        return (
            <div>
                <RemainInfo minItemCount={this.getRemainItems()} maxItemCount={todoItems.length}> </RemainInfo>
                {this.renderTodoItems()}
                <RemoveDonesButton onClick={this.removeDones}></RemoveDonesButton>
                <AddTodo onAddNewItem={this.addNewItem}></AddTodo>
            </div>
        )
    }
}
