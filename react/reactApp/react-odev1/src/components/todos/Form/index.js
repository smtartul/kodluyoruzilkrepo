import { useState } from "react";

function Form({ data }) {
  const [filter, setFilter] = useState("all");

  return (
    <div>
       <ul className='todo-list'>
                {data.map((todo,index)=>
                <li key={index}>
                    <div className="view">
						<input type="checkbox" 
						className="toggle" 
						property="done" 
						defaultChecked={todo.isCompleted} />

						<label property="text">{todo.text}</label>

						<button className="destroy"></button>
					</div>
				
				</li>)}
            </ul>
    </div>
  );
}

export default Form;
