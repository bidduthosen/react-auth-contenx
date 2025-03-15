import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()

    

    const { loginUser, googleLogin } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        // login user on firebase
        loginUser(email, password)
            .then(res => {
                console.log(res.user)
                navigate('/')
                e.target.reset()
            })
            .catch(err => {
                console.log(err.message)
                alert(`${err.message}`)
            })

    };

    const handleGoogleLogin = ()=>{
        googleLogin()
        .then(res =>{
            console.log(res.user)
            navigate('/')
        })
        .catch(err =>{
            console.log(err.message)
        })
    }

    return (
        <div>
            <form onSubmit={handleLogin} className='flex flex-col justify-center items-center space-y-5'>
                <h1>Login Form</h1>
                <label className="input input-bordered flex items-center gap-2">
                    <input type="email" name='email' className="grow" placeholder="Email" />
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            fillRule="evenodd"
                            d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                            clipRule="evenodd" />
                    </svg>
                </label>
                <label className="input input-bordered flex items-center gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-4 w-4 opacity-70">
                        <path
                            d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                        <path
                            d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                    </svg>
                    <input type="password" name='password' className="grow" placeholder="password" />
                </label>
                <button className='btn btn-outline btn-info'>Login</button>
            </form >
            <hr />
            <div>
                <button onClick={handleGoogleLogin} className='btn btn-ghost'>Google</button>
            </div>
        </div>
    );
};

export default Login;