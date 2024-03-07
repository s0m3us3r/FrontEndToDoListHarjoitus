import './App.css'
import CustomTabPanel from './Tabs.jsx'
//import BasicTabs from './Tabs.jsx'
//import ToDoList from './ToDoList'
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
//import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

function App() {

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Container maxWidth="false" >
      <CssBaseline />
      {/*<AppBar position="static" >
        <Toolbar>
          <Typography variant="h6">
            My Todos
          </Typography>  
        </Toolbar>
      </AppBar>*/}
      <CustomTabPanel/>
      {/*<ToDoList />*/}
    </Container>
    </LocalizationProvider>
  )
}

export default App;
