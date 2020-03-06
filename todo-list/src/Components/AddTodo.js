import React, { Component } from 'react'
import NewTodoInput from './newTodoInput';
import AddNewTodoButton from './addNewTodoButton';

export default class AddTodo extends Component {
    state={
        context:''
    }
    addButtonClicked = ()=>{
        var {context} = this.state;

        if(context === '') return;
        this.props.onAddNewItem(context);
        this.setState({context:''});
    }
    contenxtChanged = (context)=>{
        this.setState({context});
    }
    render() {
        return (
            <div>
                <NewTodoInput onChange={this.contenxtChanged}  value={this.state.context}> </NewTodoInput>
                <AddNewTodoButton onClick={this.addButtonClicked}> </AddNewTodoButton>
            </div>
        )
    }
}
