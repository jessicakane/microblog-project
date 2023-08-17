import Spinner from 'react-bootstrap/Spinner';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useContext } from 'react';
import { TweetsContext } from '../context/TweetsContextProvider';

import React from 'react'

const Loader = () => {

    const {isLoading} = useContext(TweetsContext); 

  return (
    <div>
    {isLoading? (<Spinner animation="border" />) : (<div></div>)}
    </div>
  )
}

export default Loader;