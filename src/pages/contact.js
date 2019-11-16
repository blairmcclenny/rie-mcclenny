import React, { useState } from 'react'
import Layout from '../components/Layout'
import axios from 'axios'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import ContactStyled from './contact-styles'

const API_PATH = ''
const MATCH = 'Enter letters and spaces only'
const EMAIL = 'Enter a valid email address'
const REQUIRED = 'This field is required'

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .max(80)
    .matches(/^[a-zA-Z\s]*$/, MATCH)
    .required(REQUIRED),
  email: Yup.string()
    .email(EMAIL)
    .required(REQUIRED),
  subject: Yup.string()
    .max(120)
    .matches(/^[a-zA-Z\s]*$/, MATCH)
    .required(REQUIRED),
  message: Yup.string()
    .max(600)
    .required(REQUIRED),
})

const Sent = ({ setStatus }) => (
  <>
    <h2>Got it!</h2>
    <p>We'll be in touch. If you'd like to send another message use the button below.</p>
    <button onClick={() => setStatus({ sent: false, submitted: false })} type="button">Send Another One</button>
  </>
)

const Failed = ({ setStatus }) => (
  <>
    <h2>Uh oh.</h2>
    <p>Something went wrong. If you'd like to try sending another message use the button below.</p>
    <button onClick={() => setStatus({ sent: false, submitted: false })} type="button">Try Again</button>
  </>
)

const Input = ({ type, name, id, label, maxLength, errors, touched }) => {
  const field = () => {
    if (type === 'textarea') {
      return (
        <Field component='textarea' name={name} id={id} maxLength={maxLength ? maxLength : null} rows='8' />
      )
    } else {
      return (
        <Field type={type} name={name} id={id} maxLength={maxLength ? maxLength : null} />
      )
    }
  }

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      {field()}
      {errors && touched && <div className='error-message'>{errors}</div>}
    </div>
  )
}

const ContactForm = ({ setStatus }) => {
  return (
    <>
      <h2>Get in touch!</h2>
      <Formik
        initialValues={{ name: '', email: '', subject: '', message: '' }}
        validationSchema={ContactSchema}
        validateOnChange={false}
        onSubmit={(values) => {
          axios({
            method: 'post',
            url: API_PATH,
            headers: { 'Content-Type': 'application/json' },
            data: values
          })
          .then(res => setStatus({ sent: res.data.sent, submitted: true }))
          .catch(err => setStatus({ sent: false, submitted: true }))
        }}
      >
        {({ errors, touched, isSubmitting }) => (
          <Form>
            <Input
              type={'text'}
              name={'name'}
              id={'name'}
              label={'Name'}
              maxLength={100}
              errors={errors.name}
              touched={touched.name}
            />
            <Input
              type={'email'}
              name={'email'}
              id={'email'}
              label={'Email'}
              errors={errors.email}
              touched={touched.email}
            />
            <Input
              type={'text'}
              name={'subject'}
              id={'subject'}
              label={'Subject'}
              maxLength={100}
              errors={errors.subject}
              touched={touched.subject}
            />
            <Input
              type={'textarea'}
              name={'message'}
              id={'message'}
              label={'Message'}
              maxLength={100}
              errors={errors.message}
              touched={touched.message}
            />
            <button disabled={isSubmitting} type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  )
}

const Contact = () => {
  const [ status, setStatus ] = useState({
    sent: false,
    submitted: false
  })

  return (
    <Layout>
      <main>
        <ContactStyled>
          {
            !status.sent && !status.submitted
            && <ContactForm setStatus={setStatus} />
          }
          {
            status.sent && status.submitted
            && <Sent setStatus={setStatus} />
          }
          {
            !status.sent && status.submitted
            && <Failed setStatus={setStatus} />
          }
        </ContactStyled>
      </main>
    </Layout>
  )
}

export default Contact
