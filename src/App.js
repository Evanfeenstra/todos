import React from 'react';
import './App.css';
import {Button, Checkbox} from 'antd'

class App extends React.Component {

  state = {
    todos:[{
      text:'Get Married',
      completed:true, 
      dueDate:''
    }]
  }

  render(){
    const {todos} = this.state
    return (
      <div className="App">
        <header className="App-header">
          Todo List
        </header>
        <Button>hi</Button>
        {todos.map((t,i)=>{
          return <Item key={i} {...t} 
            setCompleted={(e)=>console.log(e)}
          />
        })}
      </div>
    );
  }
}

function Item({text, completed, dueDate, setCompleted, setDueDate}) {
  return (<div className="item">
    <Checkbox checked={completed} onChange={setCompleted}/>
    <span className="item-text">{text}</span>
    <span className="item-duedate">{dueDate}</span>
  </div>)
}

export default App;
