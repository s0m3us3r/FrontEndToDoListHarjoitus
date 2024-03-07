import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx'
import Home from'./components/Home.jsx'
import ToDoList from'./components/ToDoList.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([  
  {
    path: "/",
    element: <App />,
    children: [                       
      {
        element: <Home />,
        index: true                   
      },
      {
        path: "todos",                
        element: <ToDoList />,
      },
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
