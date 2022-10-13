import Forspoken from '../Images/GamingForum/ForspokenWallpaper.jpg'
import { useNavigate } from "react-router-dom"
import * as yup from 'yup'
import axios from 'axios'
import { useState } from 'react'
import { loginFormTest } from './gamingForumLogic'

export default function GamingLogin () {
    // Creating Variables
    const navigate = useNavigate()
    const initialValue = {
        username: '',
        password: '',
    }
    const initialErrors = {
        username: '',
        password: '',
    }

    const [formValue, setFormValue, handleChanges] = useInput(initialValue)
    const [errorValue, setErrorValue] = useState(initialErrors)

    // Validator Function
    function validator(name, value) {
        yup.reach(loginFormTest, name)
        .validate(value)
        .then(() => setErrorValue({...errorValue, [name]: ''}))
        .catch(err => setErrorValue({...errorValue, [name]: err.errors[0]})) //err.errors is a completely unrelated variable. !Always! use errors to show error!
    }

    // onChange Handler 
    function change(name, value) {
        setFormValue({...formValue, [name]: value})

        validator(name, value)
    }

    // Custom Hook for onChange
    function useInput (startingValue) {
        const [value, setValue] = useState(startingValue)
        
        function handleChanges(event) {
            // Grabbing Values
            const { name, type, checked, value } = event.target

            // Setting correct checkbox values
            const checkboxValue = type === 'checkbox' ? checked : value

            change(name, checkboxValue)
        }

        return [value, setValue, handleChanges]
    }

    function register(event) {
        // Checking Form Values
        event.preventDefault()
        if (formValue.username === '' || formValue.password === '') {
            return
        }

        // axios.post('http://127.0.0.1:8000/user/register', formValue)
        axios.post('https://land-of-gaming.herokuapp.com/user/register', formValue)
        .then(res => {
            console.log(res.data)
            navigate('/forum')
        })
        .catch(err => {
            console.log('Error!', err)
        })

    }

    function login(event) {
        event.preventDefault()
        if (formValue.username === '' || formValue.password === '') {
            return
        }

        // axios.post('http://127.0.0.1:8000/user/login', formValue)
        axios.post('https://land-of-gaming.herokuapp.com/user/login', formValue)
        .then(res => {
            console.log(res.data)
            navigate('/forum')
        })
        .catch(err => {
            console.log('Error!', err)
        })
    }

    return(
        <main className='gamingLoginBody'>
            <section>
                <form>
                    <h1> Welcome to </h1>
                    <h2> Sylvia </h2>
                    <p><span> Log in </span> or <span> Register </span> to be known to my  gaming forum!</p>
                    <div className='insideForm'>
                        <input
                        type='text'
                        name='username'
                        placeholder='Username'
                        value={formValue.username}
                        onChange={handleChanges}
                        />
                        <>{errorValue.username}</>

                        <input
                        type='password'
                        name='password'
                        placeholder='Password'
                        value={formValue.password}
                        onChange={handleChanges}
                        />
                        <>{errorValue.password}</>

                        <div>
                            {/* <Link><button> Register </button></Link> */}
                            <button onClick={()=>{register()}}> Register </button>
                            <button onClick={()=>{login()}}> Login </button>
                        </div>
                    </div>
                </form>
                <div className='loginImage'>
                    <img src={Forspoken} alt='Forspoken Wallpaper' />
                </div>
            </section>
        </main>
    )
}