import React, {Component} from 'react';


export default class TaskForm extends Component{

    state = {
        title: '',
        description: ''
    }

    onSubmit = event => {
        event.preventDefault();
        this.props.addTask(this.state.title,this.state.description);
    }

    onChange = e => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render(){
        return (
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="escribe una tarea" 
                    onChange={this.onChange} 
                    value={this.state.title}/>
                <br/>
                <br/>
                <textarea 
                    placeholder="escribe una descripcion"
                    name="description"  
                    onChange={this.onChange} 
                    value={this.state.description}>
                </textarea>
                <br/>
                <br/>
                <button type="submit">
                    guardar tarea
                </button>
            </form>
        )
    }
}