import { Button, Dialog, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Dashboard.scss'
function AddStaff() {
  const [id, setId] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();
  const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement`

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = { id, avatar, name, age, address };
    fetch(baseUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(staff)
    })
      .then((res) => {
        alert('Add successfully!');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
      })

  }

  return (
    <form className='add-container' onSubmit={handleSubmit}>
      <div className='add-form'>
        <div className='form-title'>
          <h2>Add new Staff</h2>
        </div>
        <div className='form-body'>
          <div className='form-group'>
            <TextField id="standard-basic" label="ID" variant="standard"
              fullWidth
              value={id}
              disabled />
          </div>
          <div className='form-group'>
            <TextField id="standard-basic" label="Avatar" variant="standard"
            type='url'
              fullWidth
              value={avatar}
              onChange={e => setAvatar(e.target.value)} />
          </div>
          <div className='form-group'>
            <TextField id="standard-basic" label="Name" variant="standard"
              type='text'
              fullWidth
              value={name}
              onChange={e => setName(e.target.value)}
              required />
          </div>
          <div className='form-group'>
            <TextField id="standard-basic" label="Age" variant="standard"
              type='number'
              fullWidth
              value={age}
              onChange={e => setAge(e.target.value)}
              required />
          </div>
          <div className='form-group'>
            <TextField id="standard-basic" label="Address" variant="standard"
              type='text'
              fullWidth
              value={address}
              onChange={e => setAddress(e.target.value)}
              required />
          </div>
          <div className='btn-group'>
            <div className='save-btn'>
              <Button variant="contained" color="success" type='submit'>Save</Button>
            </div>
            <div className='cancel-btn'>
              <Link to='/dashboard'><Button variant="contained" color="error">Cancel</Button></Link>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

export default AddStaff