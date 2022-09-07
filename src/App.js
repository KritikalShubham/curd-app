import './App.css';
import Create from './Components/create';
import Read from './Components/read';
import Update from './Components/update';
// import Sidebar from './Components/sideBar'
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
      <div className='main'>
        <h2 className="main-header">React Crud Operations</h2> 
      <Routes >
            <Route exact path='create' element={<Create/>}></Route>
            <Route exact path='read'  element={<Read/>}></Route>
            <Route exact path='update' element={<Update/>}></Route>
            {/* <Route exact path='sidebar' element={<Sidebar/>}></Route> */}

      </Routes>
      </div>
    </Router>
  );
}

export default App;