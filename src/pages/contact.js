import React from 'react'
import Layout from '../components/layout/layout.js'
import axios from 'axios'
import styles from './contact.module.scss'

const API_PATH = 'http://gatsby-contact-form.test:8888/api/contact/';

class Contact extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      subject: '',
      message: '',
      mailSent: false,
      error: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    const { name, value } = e.target

    this.setState({
      [name]: value,
    })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios({
      method: 'post',
      url: API_PATH,
      headers: { 'Content-Type': 'application/json' },
      data: this.state
    })
      .then(response => {
        this.setState({
          mailSent: response.data.sent,
        })
      })
      .catch(error => {
        this.setState({ error: error.message })
      })
  }

  render() {
    return (
      <Layout>
        <main className={styles.form}>
          <h2>Get in touch!</h2>
          <form action="#">
            <div>
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={this.state.email} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" value={this.state.subject} onChange={this.handleChange} />
            </div>
            <div>
              <label htmlFor="msg">Message</label>
              <textarea id="message" name="message" maxLength="600" value={this.state.message} onChange={this.handleChange} />
            </div>
            <button type="submit" onClick={this.handleSubmit}>Submit</button>
          </form>
        </main>
      </Layout>
    )
  }
}

export default Contact
