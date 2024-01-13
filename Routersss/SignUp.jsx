import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

const SignUp = () => {


  let navigate=useNavigate();

  let[usename,setUsername]=useState("")
  let[password,setPassword]=useState("")

  let handleSignup=(e)=>{
    e.preventDefault();
    window.localStorage.setItem("username",usename);
    window.localStorage.setItem("password",password);
    navigate("/login");
    

  }




  return (
    <div><form action="" >
    <fieldset>
    <legend>Sign UP </legend>
      <table>
        <tr>
          <td>
        <label htmlFor="">FirstName:</label></td>
        <td><input type="text"  onChange={(e)=>{
          setUsername(e.target.value);

        }}/><br /><br /></td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">LastName</label></td>
        <td>
        <input type="text" /><br /><br /></td>
        </tr>
        <tr>
        <td>
        <label htmlFor="">Email</label></td>
        <td>
        <input type="email" /><br /><br /></td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">Phone Number</label></td>
        <td>
        <input type="number" /><br /><br /></td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">Address</label>
        </td>
        <td>
        <textarea></textarea><br /><br /></td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">Country</label>
        </td>
        <td>
        <input type="text" /><br /><br />
        </td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">Password</label></td>
        <td>
        <input type="number" onChange={(e)=>{
          setPassword(e.target.value);

        }} /><br /><br />
        </td>
        </tr>
        <tr>
          <td>
        <label htmlFor="">Confirm the password</label></td>
        <td>
        <input type="number" /><br /><br />
        </td>
        </tr>
        <tr>
          <td>  
          <button onClick={handleSignup}>Submit</button></td>
        <td>
        <button>
          Reset</button></td>
        </tr>
        
        </table>
        </fieldset>
</form></div>
  )
}

export default SignUp