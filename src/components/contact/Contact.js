import { Button } from '@mui/material'
import React from 'react'
import './Contact.scss'
function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <div className='contact-container'>
      <h1 className='contact-header'>Get in touch</h1>
      <div className="contact-form container mt-5">
        <h2 className="mb-3">Send Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control" type="text" id="name" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input className="form-control" type="email" id="email" required />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">
              Message
            </label>
            <textarea className="form-control" id="message" required />
          </div>
          <Button variant="contained">SEND</Button>
        </form>
      </div>
    </div>)
}

export default Contact