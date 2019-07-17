import React, { useState } from 'react'
import Layout from '../components/layout/layout.js'
import axios from 'axios'
import { ContactStyled } from './contact-styles.js'

const API_PATH = 'http://gatsby-contact-form.test:8888/api/contact/';

const Response = ({ header, message, reset }) => (
  <ContactStyled>
    <h2>{header}</h2>
    <p>{message}</p>
    <button onClick={() => reset()}>Send Mesage</button>
  </ContactStyled>
)

const Form = ({ inputs, handleChange, handleSubmit }) => (
  <ContactStyled>
    <h2>Get in touch!</h2>
    <form>
      <div>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" value={inputs.name} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" value={inputs.email} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="subject">Subject</label>
        <input type="text" id="subject" name="subject" value={inputs.subject} onChange={(e) => handleChange(e)} />
      </div>
      <div>
        <label htmlFor="msg">Message</label>
        <textarea id="message" name="message" maxLength="600" value={inputs.message} onChange={(e) => handleChange(e)} />
      </div>
      <button type="submit" onClick={(e) => handleSubmit(e)}>Submit</button>
    </form>
  </ContactStyled>
)

const Contact = () => {
  const [inputs, setInputs] = useState({ name: '', email: '', subject: '', message: '' })
  const [sent, setSent] = useState(false)
  const [error, setError] = useState(null)

  function handleChange(e) {
    const { name, value } = e.target
    setInputs(inputs => ({ ...inputs, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()

    axios({
      method: 'post',
      url: API_PATH,
      headers: { 'Content-Type': 'application/json' },
      data: inputs
    })
    .then(res => setSent(res.data.sent))
    .catch(err => setError(err.message))
  }

  function reset() {
    setInputs({ name: '', email: '', subject: '', message: '' })
    setSent(false)
    setError(null)
  }

  function getForm() {
    if (sent) {
      return (
        <Response
          header="Message Received!"
          message="Click below if you'd like to send another message."
          reset={reset}
        />
      )
    } else if (error) {
      return (
        <Response
          header="Oops! Something Went Wrong"
          message="Click below to try sending your message again."
          reset={reset}
        />
      )
    } else {
      return (
        <Form
          inputs={inputs}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
        />
      )
    }
  }

  return (
    <Layout>
      <main>
        {getForm()}
      </main>
    </Layout>
  )
}

export default Contact
