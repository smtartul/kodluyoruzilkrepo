import React from "react";
import "./index.css";

function Filter({ data }) {
  return (
    <footer className="footer">
        <span className="todo-count">
          <strong>{data.length} items left</strong>
        </span>
      <ul className="filters">
        
        <li>
          <a className="all">All</a>
        </li>
        <li>
          <a className="active">Active</a>
        </li>
        <li>
          <a className="completed">Completed</a>
        </li>
      </ul>
      <button className="clear-completed">Clear completed</button>
    </footer>
  );
}

export default Filter;
