import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuthContext from '../CustomContexts/UseAuthContext';
import { FcGoogle } from "react-icons/fc";
import { notifyError, notifySuccess } from '../utilities/notify';
import LoginContent from '../Components/LoginContent';




const Login = () => {
    const { logIn, googleLogIn } = useAuthContext()

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isLogINBtnLoading, setIsLogInBtnLoading] = useState(false)
    const [isGoogleBtnLoading, setIsGoogleBtnLoading] = useState(false)

    const navigate = useNavigate()
    const location = useLocation()

    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')
        setIsLogInBtnLoading(true)

        logIn(email, password)
            .then(() => {
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                notifyError('Login Failed')
            })
            .finally(() => {
                setIsLogInBtnLoading(false)
            })
    }

    const handleGoogleLogIn = () => {
        setSuccess('')
        setError('')
        setIsGoogleBtnLoading(true)

        googleLogIn()
            .then(() => {
                setSuccess('Login Successful')
                notifySuccess('Login Successful')
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                console.log("ok");
                notifyError("Login failed!")
            })
            .finally(() => {
                setIsGoogleBtnLoading(false)
            })
    }


    return (
        <div className='container mx-auto flex lg:py-10'>
            <div className="flex flex-col lg:flex-row space-y-10 flex-1 items-center justify-between mb-10 ">

                <LoginContent />

                <div className="w-full  md:w-auto">
                    <div className="card bg-accent md:w-lg shrink-0 shadow-2xl border-1 border-gray-500 ">
                        <div className="card-body">
                            <h1 className='text-4xl font-bold mb-3'>Log In</h1>
                            <form onSubmit={handleLogin} className="fieldset border-b-2 border-gray-400 border-dashed">

                                <label className="label text-lg font-black ">Email</label>
                                <input name='email' type="email" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Enter email" />

                                <label className="label font-bold text-lg ">Password</label>
                                <div className='relative'>
                                    <input name='password' required type={isPassVisible ? 'text' : "password"} className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 input pr-13 font-bold" placeholder="******" />
                                    <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-6 top-2 z-10 border-none'>
                                        {
                                            isPassVisible
                                                ? <FaEyeSlash size={18} />
                                                : <FaEye size={18} />
                                        }
                                    </button>
                                </div>
                                <Link to={'/forgot-password'} type='button' className='text-left cursor-pointer font-bold underline'>Forgot password?</Link>

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                                <button type='submit' className='mt-5 mb-3 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black/40 ' disabled={isLogINBtnLoading}>
                                    {isLogINBtnLoading && <span className="loading loading-spinner"></span>}
                                    Log IN
                                </button>
                            </form>


                            <button onClick={handleGoogleLogIn} className='mt-2 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black/40' disabled={isGoogleBtnLoading}>
                                {isGoogleBtnLoading && <span className="loading loading-spinner"></span>}
                                <FcGoogle />
                                Login with Google
                            </button>
                            <h2>Don't have an account? <Link state={location.state} className='underline text-blue-400' to={'/register'}>Register Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;