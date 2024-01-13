import React from 'react'

const Login = () => {
  return (
    <div><form action="">
    <fieldset>
    <legend>Login</legend>
    <table>
      <tr>
        <td><label htmlFor="">Username/Email</label></td>
        <td><input type="text" /></td>
      </tr>
      <tr>
        <td><label htmlFor="">Password</label>
        </td>
        <td><input type="number" /></td>
        </tr>
      <tr>
        <td>
        <button>Submit </button>
        </td>
        <td>
          <button>Cancel</button>
        </td>
      </tr>
    </table>

    </fieldset>
  </form></div>
  )
}

export default Login