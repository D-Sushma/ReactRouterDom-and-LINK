// 6. import Link frm react router dom then use it
// to="/content"-->means link kha pr krna hai,(isme hame route ko dalna h jise hme btn ke click pr open krna hai)
import React from 'react';
import {Link} from "react-router-dom"
export default function Login(){
  return(
    <>
      <div><h1>Login Page</h1></div>
      <input type="text" placeholder="Enter Email" />
      <input type="password" placeholder="Enter Password"/>

      <Link to="/content">
      <input type="submit" />
      </Link>

    </>
  )
}