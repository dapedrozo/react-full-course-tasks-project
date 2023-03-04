import React, {Component} from 'react';
import './Task.css';
import PropTypes from 'prop-types';

class Task extends Component {

    StyleCompleted(){
        return {
            fontSize: '20px',
            color: this.props.tareas.done ? 'gray' : 'black',
            textDecoration: this.props.tareas.done ? 'line-through' : 'none'
        }
    }

    render() {
        const {tareas} = this.props;
        return <p style={this.StyleCompleted()}>
            {tareas.title} - 
            {tareas.description} - 
            {tareas.done} - 
            {tareas.id}
            <input 
                type="checkbox" 
                className="red" 
                onChange={this.props.checkDone.bind(this, tareas.id)}/>
            <button 
                style={BtnDelete} 
                onClick={this.props.deleteTask.bind(this, tareas.id)}>
                x
            </button>
        </p>
    }
}

Task.propTypes = {
    tareas: PropTypes.object.isRequired
}


const BtnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    cursor: 'pointer'
}

export default Task;