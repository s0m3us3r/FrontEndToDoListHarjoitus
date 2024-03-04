import React, { useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material                                            .css"; // Optional Theme applied to the grid
import dayjs from 'dayjs';

function ToDoList() {

  const [todo, setTodo] = useState({ description: "", priority: "", date: dayjs().format('DD.MM.YYYY') });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();//To get access to the Grid API, we can use the React useRef hook function,avulla kutsutaan aggrid metodeja
  // Columns
  const [columnDefs, setColumnDefs] = useState([
    { field: 'description', sortable: false, filter: true, floatingFilter: true },
    {
      field: 'priority', filter: true, floatingFilter: true,
      cellStyle: params => params.value === "High" ? { color: 'red' } : params.value === "Low" ? { color: 'lightblue' } : { color: 'black' }
    },
    { field: 'date', filter: true, floatingFilter: true }
  ]);

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, todo])
    setTodo({ date: dayjs().format('DD.MM.YYYY'), description: "", priority: "" })
  }

  const handleDelete = (event) => {
    //console.log(gridRef.current.getSelectedNodes());
    event.preventDefault();
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
        index != gridRef.current.getSelectedNodes()[0].id))
    }
    else {
      alert('Select a row first!');
    }
  };



  return (
    <>
      <div className='TodoList'>

        <form onSubmit={addTodo}>
          <fieldset>
            <legend>Add todo:</legend>
            <input
              placeholder="Description"
              onChange={e => setTodo({ ...todo, description: e.target.value })}
              value={todo.description} />
            <input
              placeholder="Priority"
              onChange={e => setTodo({ ...todo, priority: e.target.value })}
              value={todo.priority} />
            <input
              placeholder="Date"
              onChange={e => setTodo({ ...todo, date: e.target.value })}
              value={todo.date} />
            <button onClick={addTodo}>Add</button>
            <button onClick={handleDelete}>Delete</button>
          </fieldset>
        </form>

        <div className="ag-theme-material" style={{ width: 700, height: 500 }}>
          <AgGridReact
            rowData={todos}
            columnDefs={columnDefs}
            rowSelection="single" //First, we have to enable row selection(kerrotaan että rivivalinnat mahdollisia) and set mode to single selection by using the rowSelection grid prop.
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api} //aggridin käyttöön sääntö, ei yleinen react
          />
        </div>
      </div>
    </>
  );
}

export default ToDoList;
