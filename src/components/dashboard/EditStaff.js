import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';

function EditStaff() {
  const id = useParams();
  const pr = id.id;
  const baseUrl = `https://64994bae79fbe9bcf83eecdc.mockapi.io/staffManagement/`
  useEffect(() => {
    fetch(baseUrl + pr)
      .then(response => response.json())
      .then(data => {
        setStaff(data.id);
        setAvatar(data.avatar);
        setName(data.name);
        setAge(data.age);
        setAddress(data.address);
      })
      .catch(error => console.log(error.message));

  }, [id]);
  const [staff, setStaff] = useState("");
  const [avatar, setAvatar] = useState("");
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [address, setAddress] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const staff = { id, avatar, name, age, address };
    fetch(baseUrl + pr, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(staff)
    })
      .then((res) => {
        alert('Update successfully!');
        navigate('/dashboard');
      })
      .catch((err) => {
        console.log(err.message);
      })
  }

  return (
    <form className='edit-container' onSubmit={handleSubmit}>
      <div className='edit-form'>
        <div className='form-title'>
          <h2>Edit Staff Information</h2>
        </div>
        <div className='form-body'>
          <div className='form-group'>
            <TextField id="standard-basic" label="ID" variant="standard"
              fullWidth
              value={staff}
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
              required
            />
          </div>
          <div className='form-group'>
            <TextField id="standard-basic" label="Age" variant="standard"
              type='number'
              fullWidth
              value={age}
              onChange={e => setAge(e.target.value)}
              required
            />
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
            <div className='update-btn'>
              <Button variant="contained" color="success" type='submit'>Update</Button>
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

export default EditStaff