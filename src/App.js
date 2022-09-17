import './App.css';
import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';
import Navbar from './Components/navbar'
import Form from './Components/form'
import NewUpdate from './Components/newUpdate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <Router>
      <Navbar />
      <div className=''>
      <Routes >
            <Route exact path='create' element={<Create/>}></Route>
            <Route exact path='update' element={<Update/>}></Route>
            <Route exact path='form' element={<Form/>}></Route>
            <Route exact path='newUpdate' element={<NewUpdate/>}></Route>
            <Route exact path='read'  element={<Read/>}></Route>

      </Routes>
      </div>
    </Router>
  );
}

export default App;