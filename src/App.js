import './App.css';
import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';
// import Sidebar from './Components/sideBar'
import Navbar from './Components/navbar'
import Test from './Components/test'
import Form from './Components/form'
import NewUpdate from './Components/newUpdate'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (  
    <Router>
      {/* <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes exact path='create' component={Create} />
        </div>
        <div style={{ marginTop: 20 }}>
          <Routes exact path='read' component={Read} />
        </div>
        <Routes exact  path='update' component={Update} />
      </div> */}
      <Navbar />
      <div className=''>
        {/* <h2 className="main-header">React Crud Operations</h2>  */}
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