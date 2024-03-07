import React, { useRef, useState } from "react";
import { AgGridReact } from 'ag-grid-react'; // AG Grid Component
import "ag-grid-community/styles/ag-grid.css"; // Mandatory CSS required by the grid
import "ag-grid-community/styles/ag-theme-material.css"; // Optional Theme applied to the grid
import dayjs from 'dayjs';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DatePicker } from "@mui/x-date-pickers";

function ToDoList() {

  const [todo, setTodo] = useState({ description: "", priority: "", date: dayjs().format('DD.MM.YYYY') });
  const [todos, setTodos] = useState([]);
  const gridRef = useRef();//To get access to the Grid API, we can use the React useRef hook function,avulla kutsutaan aggrid metodeja


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
    setTodo({ date: "", description: "", priority: "" })
  }

  const handleDelete = (event) => {
    event.preventDefault();
    if (gridRef.current.getSelectedNodes().length > 0) {
      setTodos(todos.filter((todo, index) =>
        index != gridRef.current.getSelectedNodes()[0].id))
    }
    else {
      alert('Select a row first!');
    }
  };

  const formatDate = (date) => {
    setTodo({ ...todo, date: dayjs(date).format('DD.MM.YYYY') })
  }


  return (
    <>
      <Stack direction="column" justifyContent="center" alignItems="center">
        <Stack mt={2} direction="row" spacing={2} justifyContent="center" alignItems="center">

          <TextField
            label="Description"
            onChange={e => setTodo({ ...todo, description: e.target.value })}
            value={todo.description}
          />
          <TextField
            label="Priority"
            onChange={e => setTodo({ ...todo, priority: e.target.value })}
            value={todo.priority}
          />
          <DatePicker
            label="Date"
            format="DD.MM.YYYY"
            //value={dayjs(todo.date)}
            //onChange={date => setTodo({ ...todo, date: dayjs(date).format('DD.MM.YYYY') })}
            onChange={date => formatDate(date)}
          />
          <Button onClick={addTodo}>Add</Button>
          <Button color="error" onClick={handleDelete}>Delete</Button>
        </Stack >



        <div className="ag-theme-material" style={{ width: 600, height: 500 }}>
          <AgGridReact
            ref={gridRef}
            onGridReady={params => gridRef.current = params.api}
            rowData={todos}
            columnDefs={columnDefs}
            rowSelection="single"
          />
        </div >
        
        </Stack >
    </>
  );
}

export default ToDoList;
