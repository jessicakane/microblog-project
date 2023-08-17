import React, { useContext } from 'react'
import { ProfileForm } from '../ProfileForm'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContextProvider'

export const UserPage = () => {

  const {userID} = useContext(AuthContext);

  return (
    <div className='outer2'>
    <div>
        <ProfileForm />
        {userID ? (<div></div>) : (
          <div>
          <p>Don't have an account?</p>
          <Link to = '/signup'>
         <button className='saveButton btn btn-primary'>Sign up</button>
         </Link>
         </div>
        )}
        
    </div>
    </div>
  )
}
