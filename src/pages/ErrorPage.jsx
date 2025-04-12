import React from 'react'
import { NavLink, useRouteError } from 'react-router-dom'

const ErrorPage = () => {

    const error = useRouteError();
    console.log(error);

  return (

    <div>
        There is no data found here. 404 - Please try again later !

        <div>
            {error && error.data}
        </div>
        <NavLink to="/" >
        <button > Go Home </button>
        </NavLink>
       
    </div>
  )
}

export default ErrorPage