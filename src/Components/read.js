import axios from 'axios'
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell,{ tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import EditIcon from '@mui/icons-material/Edit';
// import Icon from '@mui/material/Icon';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
        },
    }));

    export default function Read() {

    const [APIData, setAPIData] = useState([]);

    const onToggleEditMode = data => {
      //console.log(data.id);
      //console.log(data.firstName);
      let { id, firstName, lastName } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
       // localStorage.setItem('Checkbox Value', checkbox)

    };
    useEffect(() => {
        axios.get(`/user`)
            .then((response) => {
                console.log(response.data);
                setAPIData(response.data);
            })
        }, [])
 
    cons onDelete = (id) => {
        axios.delete(`/user/${id}`)
        .then(() => {
            getData();
        })
    }
    const getData = () => {
            axios.get(`/user`)
                .then((getData) => {
                  console.log(getData.data);
                    setAPIData(getData.data);
                })
    }

    return (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <StyledTableCell align='center'> User Id  </StyledTableCell>
                <StyledTableCell align="center">First Name</StyledTableCell>
                <StyledTableCell align="center">Last Name</StyledTableCell>
                {/* <StyledTableCell align="right">Checked</StyledTableCell> */}
                <StyledTableCell align="center">Operations</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody >
              {APIData.map((data) => (
                <TableRow
                  key={data.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row" align='center'> {data.id}</TableCell>
                  <TableCell align="center">{data.firstName}</TableCell>
                  <TableCell align="center">{data.lastName}</TableCell>
                  {/* <TableCell align="right">{data.checkbox ? 'Checked' : 'Unchecked'}</TableCell> */}
                  <TableCell align="center"><Button component={Link} to="/newUpdate" variant="contained" onClick={() => onToggleEditMode(data)}>Edit</Button> <Button variant="contained" onClick={() =>onDelete(data.id) }>Delete</Button></TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      );

}


// import React, { useEffect, useState } from 'react';
// //import { Table } from 'semantic-ui-react'
// import axios from 'axios'
// // import 'semantic-ui-css/semantic.min.css';
// import { Link } from 'react-router-dom';
// import Button from 'react-bootstrap/Button';
// import Table from 'react-bootstrap/Table';
// import 'bootstrap/dist/css/bootstrap.min.css';


// export default function Read() {
//     const [APIData, setAPIData] = useState([]);
//     const setData = (data) => {
//         let { id, firstName, lastName, checkbox } = data;
//         localStorage.setItem('ID', id);
//         localStorage.setItem('First Name', firstName);
//         localStorage.setItem('Last Name', lastName);
//         localStorage.setItem('Checkbox Value', checkbox)
// }

// useEffect(() => {
//     axios.get(`https://6315a3bb33e540a6d380ad11.mockapi.io/user`)
//         .then((response) => {
//             setAPIData(response.data);
//         })
//     }, [])
// return (
//     <Table striped bordered hover variant="dark">
//     <thead>
//         <tr>
//             <th>#</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Checked</th>
//             <th>Update</th>
//         </tr>
//     </thead>

//   {APIData.map((data) => {
//      return (
//        <tr>
//            <td>{data.id}</td>
//            <td>{data.firstName}</td>
//            <td>{data.lastName}</td>
//            <td>{data.checkbox ? 'Checked' : 'Unchecked'}</td>
//            <td> 
//                 <Link to='/update'>
//                  <Button onClick={setData(data)}>Update</Button>
//                  {/* <Button id={data.id} onClick={this.handleClick}>Update</Button> */}
//                 </Link>
//            </td>
//         </tr>
//    )})}
// </Table>
// )
// }