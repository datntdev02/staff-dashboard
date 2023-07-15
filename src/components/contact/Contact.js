import { Button, Stack, TextField } from '@mui/material'
import React from 'react'
import './Contact.scss'
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-container'>
      <div className="contact-form">
        <h2>Send message</h2>
        <form onSubmit={handleSubmit}>
          <Stack spacing={2} direction="row" sx={{ marginBottom: 3 }}>
            <TextField
              type="text"
              variant='outlined'
              color='primary'
              label="Name"
              fullWidth
              required
            />
            <TextField
              type="email"
              variant='outlined'
              color='primary'
              label="Email"
              fullWidth
              required
            />
          </Stack>
          <TextField
            type="text"
            variant='outlined'
            color='primary'
            label="Message"
            fullWidth
            required
            sx={{ mb: 3 }}
          />
          <Button variant="contained">SEND</Button>
        </form>
      </div>
    </div>
  )
}

export default Contact