import React, { useEffect, useState } from 'react';
//import { Table } from 'semantic-ui-react'
import axios from 'axios'
// import 'semantic-ui-css/semantic.min.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
}

useEffect(() => {
    axios.get(`https://6315a3bb33e540a6d380ad11.mockapi.io/user`)
        .then((response) => {
            setAPIData(response.data);
        })
    }, [])
return (
    <Table striped bordered hover variant="dark">
    <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Checked</th>
            <th>Update</th>
        </tr>
    </thead>

  {APIData.map((data) => {
     return (
       <tr>
           <td>{data.id}</td>
           <td>{data.firstName}</td>
           <td>{data.lastName}</td>
           <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
           <td> 
                <Link to='/update'>
                 <Button onClick={setData(data)}>Update</Button>
                 {/* <Button id={data.id} onClick={this.handleClick}>Update</Button> */}
                </Link>
           </td>
        </tr>
   )})}
</Table>
)
}