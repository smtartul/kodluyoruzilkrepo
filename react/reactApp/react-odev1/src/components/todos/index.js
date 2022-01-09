import { useState } from "react";

import Filter from "./Filter";
import Form from "./Form";
import './style.css';

function Todos() {
    const [list, setList] = useState([
        {
            isCompleted:false,
            text:'Test React'
        },{
            isCompleted:true,
            text:'Training on HTML'
        },{
            isCompleted:true,
            text:'Watch CCS Tutorials'
        }
    ])
    return (
        <div>
          <section className="todoapp">
          <header className="header">
                <h1>Todos APP</h1>
                <form action="">
                    <input property="newTodo" className="new-todo"
                    placeholder="What needs to be done ?" />
                </form>
            </header>
            <section className="main">
                <input type="checkbox"
                id="toggle-all"
                className="toggle-all"
                checked={true} 
                property="toggleAll"/>
                <label htmlFor="toggle-all">Mark all as complete</label>
            </section> 
                <Form data={list}></Form>
          </section>
                <Filter data={list}></Filter>
            
        </div>
    )
}

export default Todos
