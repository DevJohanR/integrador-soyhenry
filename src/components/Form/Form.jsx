import React from 'react'
import { useState } from 'react'
import validator from './validator'

const Form = (props) => {

  const { login } = props

  const [errors, setErrors] = useState({})

    const [userData, setUserData] = useState({
        email: '',
        password: ''
      })
      //DEBEMOS CONECTAR EL ESTADO CON LOS INPUTS
      
      const handleChange = (e) =>{

       setErrors(validator({...userData, [e.target.name]: e.target.value}))

        setUserData({...userData, [e.target.name]: e.target.value})
        console.log(userData)
      }

      const handleSubmit  = (e) =>{
        e.preventDefault()
        login(userData)
      }

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder='Email...' name='email' value={userData.email} onChange={handleChange} /> {/*LOS CONECTAMOS CON: VALUE */}
                {errors.e1 ?(
                  <p>{errors.e1} </p>
                ): errors.e2 ? (
                  <p>{errors.e2} </p>
                ):(
                  <p>{errors.e3} </p>
                ) }
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Password...' name='password' value={userData.password} onChange={handleChange} />
                {errors.p1 ? (
                       <p>{errors.p1} </p>
                ): (
                  <p>{errors.p2} </p>
                )
              }
            </div>
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form