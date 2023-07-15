import { Button, Dialog, TextField } from '@mui/material'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './Dashboard.scss'
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import DisabledByDefaultIcon from '@mui/icons-material/DisabledByDefault';
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

        <h2>Add new Staff</h2>
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
            onChange={e => setAvatar(e.target.value)}
            pattern="https?://.+"
            title='Avatar should be a URL' />
        </div>
        <div className='form-group'>
          <TextField id="standard-basic" label="Name" variant="standard"
            type='text'
            fullWidth
            value={name}
            onChange={e => setName(e.target.value)}
            required
            pattern="[A-Za-z]{4,24}"
            title='Name should contain at least 4 digit' />
        </div>
        <div className='form-group'>
          <TextField id="standard-basic" label="Age" variant="standard"
            type='number'
            fullWidth
            value={age}
            onChange={e => setAge(e.target.value)}
            required
            pattern="[0-9]{1,3}"
            title='Age should contain at least 2 digit.' />
        </div>
        <div className='form-group'>
          <TextField id="standard-basic" label="Address" variant="standard"
            type='text'
            fullWidth
            value={address}
            onChange={e => setAddress(e.target.value)}
            required
            pattern="[A-Za-z]{0,100}"
            title='Address should not empty.' />
        </div>
        <div className='btn-group'>
          <Button type='submit'>
            <CheckBoxIcon color="success" fontSize="large" />
          </Button>
          <Link to='/dashboard'>
            <Button>
              <DisabledByDefaultIcon color="error" fontSize="large"/>
            </Button>
          </Link>
        </div>
      </div>
    </form>
  )
}

export default AddStaff