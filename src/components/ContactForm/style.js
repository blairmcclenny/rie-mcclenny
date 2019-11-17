import styled from 'styled-components'
import { colors, sizes } from '../../styles/theme'

export const ContactStyled = styled.div`
  margin: 2rem auto;

  @media (min-width: ${sizes.small.min}) {
    width: 80%;
  }

  @media (min-width: ${sizes.medium.min}) {
    width: 60%;
  }

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
      border-color: ${colors.primary.black};
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
    background: ${colors.primary.black};
    color: white;
    padding: .5rem 1rem;
    cursor: pointer;
  }

  .error-message {
    color: ${colors.text.error};
    margin-top: .375rem;
    font-size: .75rem;
  }
`
