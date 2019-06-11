import React from 'react'
import { css } from 'linaria'

import '@material/react-text-field/dist/text-field.css'

const wrapper = css`
  height: 100vh;
  width: 100%;
  background: #f0f0f0;


  form {
    width: 300px;
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%);
  }

  h3 {
    color: #444
    font-size: 1.5em;
    text-align: center;
  }

  label {
    font-size: 1em;
    color: #444;
  }

  input, select {
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
  }

  input[type=submit] {
    width: 100%;
    background-color: #4CAF50;
    color: white;
    padding: 14px 20px;
    margin: 8px 0;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }

  input[type=submit]:hover {
    background-color: #45a049;
  }

  input[type=submit]:disabled {
    background-color: #45a049;
    color: #93D098;
  }

  .input-container {
    width: 100%;
  }

  .form-button {
    float: right;
  }
  .text-field {
    padding-top: 4px;
    padding-bottom: 4px;
  }

  .non-fields-error {
    color: red;
    font-size: 0.8em;
  }

  .subform-container {
    height: 36px;
    
    padding-left: 16px;
  }

  .reset-password {
    height: 36px;
    font-size: 0.8em;
    line-height: 36px;
    text-align: center;
  }
`

function FormWrapper(props) {
  return <div className={wrapper}>{props.children}</div>
}

export default FormWrapper