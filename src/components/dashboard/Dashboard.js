import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { Alert, AlertTitle, Button } from '@mui/material';
import './Dashboard.scss'
import { Link, useNavigate } from 'react-router-dom';

function Dashboard({ data }) {
  const [staff, setStaff] = useState([]);
  const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement`
  useEffect(() => {
    fetch(baseUrl)
      .then(response => response.json())
      .then(data => setStaff(data))
      .catch(error => console.log(error.message));

  }, []);

  const navigate = useNavigate();
  const EditFunction = (id) => {
    navigate("/dashboard/edit/" + id);
  }
  const RemoveFunction = (id) => {
    if (window.confirm('Do you want to remove?')) {
      const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement/`
      fetch(baseUrl + id, {
        method: "DELETE",
        headers: {
          "content-type": "application/json"
        },
      })
        .then((res) => res.json())
        .then((data) => {
          alert('Remove successfully!');
          setStaff((prevStaff) => prevStaff.filter((staff) => staff.id !== id));
        })
        .catch((err) => {
          console.log(err.message);
        });

    }
  }
  return (
    <div>
      {data ? (<TableContainer component={Paper} className='dashboard-container' style={{ padding: "0", margin: "0" }}>
        <Link to='/dashboard/add' className='add-btn'>
          <Button variant="contained" >
            <label>Add new Staff</label>
            <AddIcon />
          </Button>
        </Link>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className='staff-table'>
          <TableHead>
            <TableRow className='tr'>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>ID</TableCell>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>Avatar</TableCell>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>Name</TableCell>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>Age</TableCell>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>Address</TableCell>
              <TableCell align="center" style={{ fontSize: '24px', fontWeight: "700", color: "#fff" }}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className='tb'>
            {staff.map((staff) => (
              <TableRow key={staff.id}>
                <TableCell align="center" style={{ fontSize: "20px" }}>{staff.id}</TableCell>

                <TableCell component="th" scope="row" align='center'>
                  <img src={staff.avatar} />
                </TableCell>
                <TableCell align="center" style={{ fontSize: "20px" }}>{staff.name}</TableCell>
                <TableCell align="center" style={{ fontSize: "20px" }}>{staff.age}</TableCell>
                <TableCell align="center" style={{ fontSize: "20px" }}>{staff.address}</TableCell>
                <TableCell align="center">
                  <Button variant="outlined" color='success'
                    className='edit-btn'
                    onClick={() => { EditFunction(staff.id) }}>
                    <EditIcon />
                  </Button>
                  <Button variant="outlined" color='error'
                    className='delete-btn'
                    onClick={() => { RemoveFunction(staff.id) }}>
                    <DeleteIcon />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      ) : (
        <div className="dashboard-container">
          <Alert severity="error"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px"
            }}>
            <AlertTitle>Error</AlertTitle>
            Can not access to this page — <strong>Please Log-in to continue!</strong>
          </Alert>
          <Button className="btn"
            style={{
              color: "#fff", backgroundColor: "#000",
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
            component={Link}
            to="/login">
            Login
          </Button>
        </div>
      )}

    </div>

  )
}

export default Dashboard