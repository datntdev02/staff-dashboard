import { Button, TextField } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
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
        <h2>Edit Staff Information</h2>
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
            title='Name should contain at least 4 digit'
          />
        </div>
        <div className='form-group'>
          <TextField id="standard-basic" label="Age" variant="standard"
            type='number'
            fullWidth
            value={age}
            onChange={e => setAge(e.target.value)}
            required
            pattern="[0-9]{1,3}"
            title='Age should contain at least 2 digit.'
          />
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
            <CheckCircleIcon color="success" fontSize="large" />
            </Button>
          <Link to='/dashboard'>
            <Button>
              <CancelIcon color="error" fontSize="large"/>
            </Button>
          </Link>
        </div>
      </div>
    </form>
  )
}

export default EditStaff