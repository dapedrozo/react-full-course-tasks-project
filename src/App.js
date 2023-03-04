import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './samples/tasks.json';
import Tasks from './components/Tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';

class App extends Component{
  
  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const newTask ={
      title: title,
      description: description,
      done:false,
      id: this.state.tasks.length
    }
    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const newTasks = (this.state.tasks.filter(task => task.id !== id));
    this.setState({
      tasks: newTasks
    })
  }

  checkDone = (id) => {
    const newTasks = (this.state.tasks.map(task => {
      if (task.id === id){
        task.done = !task.done
      }
      return task;
    }));
    this.setState({
      tasks: newTasks
    })
  }

  render(){
    return <div>
      <Router>
        <Link to="/">Home</Link>
        <br/>
        <Link to="/posts">Posts</Link>
        <Route exact path="/" render={() => {
          return (<div>
            <TaskForm addTask={this.addTask}/>
            <Tasks
              tasks={this.state.tasks}
              deleteTask={this.deleteTask} 
              checkDone={this.checkDone}
            />  
          </div>)
        }}>
        </Route>
        <Route path="/posts" component={Posts}/>
      </Router>
      
    </div>
  }
}

/* 
function Helloworld2(props) {
  return (
    <div id="hello">
      <h3>{props.subtitle}</h3>
      {props.mytext}
    </div>
  )
}

//estados
class Helloworld extends React.Component{

  state = {
    show: true
  }

  camboEstado = () => {
    this.setState({show: !this.state.show})
  }

  render(){
    if (this.state.show){
      return(
        <div id="hello">
          <h3>{this.props.subtitle}</h3>
          {this.props.mytext}
          <button onClick={this.camboEstado}>cambiar estado</button>
        </div>
      )
    }
    else{
      return <h1>
        no hay elementos
        <button onClick={this.camboEstado}>
          cambiar estado
        </button>
        </h1>
    }
  }
}
/* 3 enfoques de escribir un componente como funcion normal, funcion flecha y clase, se puede usar cualquiera de los 3

const App = () => <div>This is my arrow component: <Helloworld/> </div>

class App extends React.Component {
  render() {
    return <div>This is my class component: <Helloworld/></div>
  }
}

function App() {
  return (
    <div>This is my component: <Helloworld/><Helloworld/><Helloworld/></div>
  );
}
*/
/*
function App() {
  return (
    <div>
      This is my component: 
      <Helloworld mytext="hello dp" subtitle="subtitulo 1"/>
      <Helloworld mytext="second component hello dp" subtitle="subtitulo 2"/>
      <Helloworld mytext="third component hello dp" subtitle="subtitulo 3"/>
    </div>
  );
}
 */
export default App;
