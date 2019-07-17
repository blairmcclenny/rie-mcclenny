import styled from 'styled-components'

export const ContactStyled = styled.div`
  width: 60%;
  margin: 2rem auto;

  label {
    display: block;
    margin: .875rem 0 .375rem;
  }

  input, textarea {
    width: 100%;
    border: 1px solid lightgray;
    padding: .5rem;
  }

  textarea {
    display: block;
    height: 10rem;
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
`
