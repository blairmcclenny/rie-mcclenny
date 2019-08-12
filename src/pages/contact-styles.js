import styled from 'styled-components'

const error = '#d9534f'

const ContactStyled = styled.div`
  width: 60%;
  margin: 2rem auto;

  label {
    color: gray;
    display: block;
    margin: .875rem 0 .375rem;
  }

  input, textarea {
    width: 100%;
    border: 1px solid lightgray;
    padding: .5rem;
    transition: all .2s ease-out;

    :focus {
      outline: none;
      border-color: #2b2b2b;
    }
  }

  textarea {
    display: block;
    resize: none;
    overflow: auto;
  }

  button {
    margin: 1rem 0;
    border: none;
    border-radius: 4px;
    background: #2b2b2b;
    color: white;
    padding: .5rem 1rem;
    cursor: pointer;
  }

  .error-message {
    color: ${error};
    margin-top: .375rem;
    font-size: .75rem;
  }
`

export default ContactStyled
