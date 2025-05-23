import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import useAuthContext from '../CustomContexts/UseAuthContext';
import { notifyError, notifySuccess } from '../utilities/notify';
import LoginContent from '../Components/LoginContent';
import isValidPassword from '../utilities/PassValidation';
import { FcGoogle } from "react-icons/fc";


const Register = () => {
    const { createUser, updateUserProfile, reloadUser, googleLogIn } = useAuthContext()

    const [success, setSuccess] = useState('')
    const [error, setError] = useState('')
    const [isPassVisible, setIsPassVisible] = useState(false)
    const [isBtnLoading, setISBtnLoading] = useState(false)
    const [isGoogleBtnLoading, setIsGoogleBtnLoading] = useState(false)


    const navigate = useNavigate()
    const location = useLocation()

    const handleCreateUser = e => {
        e.preventDefault()
        const userName = e.target.userName.value
        const photoURL = e.target.photoURL.value
        const email = e.target.email.value
        const password = e.target.password.value

        setSuccess('')
        setError('')

        isValidPassword(password)
            .then(() => {
                setISBtnLoading(true)
                createUser(email, password)
                    .then(() => {
                        const updateInfo = {
                            displayName: userName,
                            photoURL: photoURL
                        }
                        updateUserProfile(updateInfo)
                            .then(() => {
                                setSuccess('Account created successfully')
                                notifySuccess("Account created successfully")
                                reloadUser()
                                navigate(location.state || '/')
                            })
                            .catch(error => {
                                setError(error.code)
                                notifyError('Registration failed')
                            })
                    })
                    .catch(error => {
                        setError(error.code)
                        notifyError('Registration failed')
                    })
                    .finally(() => {
                        setISBtnLoading(false)
                    })
            })
            .catch(error => {
                setError(error.message)
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
                reloadUser()
                navigate(location.state || '/')
            })
            .catch(error => {
                setError(error.code)
                notifyError("Login failed!")
            })
            .finally(() => {
                setIsGoogleBtnLoading(false)
            })
    }


    return (
        <div className='flex lg:py-10'>
            <div className="flex flex-col lg:flex-row space-y-10 flex-1 items-center justify-around mb-10 ">

                <LoginContent />

                <div className="w-full  md:w-auto">
                    <div className="card bg-accent md:w-lg shrink-0 shadow-2xl border-1 border-gray-500 ">
                        <div className="card-body">
                            <h1 className='text-4xl font-bold mb-3'>Register</h1>
                            <form onSubmit={handleCreateUser} className="fieldset border-b-1 border-gray-400 border-dashed">

                                <label className="label text-lg font-black ">Email</label>
                                <input name='email' type="email" required className="border-1 border-gray-200  w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Enter email" />

                                <label className="label text-lg font-black ">User name</label>
                                <input name='userName' type="text" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Enter username" />

                                <label className="label text-lg font-black ">Photo URL</label>
                                <input name='photoURL' type="url" required className="border-1 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 font-bold input" placeholder="Enter photo URL" />

                                <label className="label font-bold text-lg ">Password</label>
                                <div className='relative'>
                                    <input name='password' required type={isPassVisible ? 'text' : "password"} className="border-2 border-gray-200 w-full focus:outline-none focus:border-2  focus:border-blue-400 input pr-13 font-bold" placeholder="******" />
                                    <button type='button' onClick={() => setIsPassVisible(value => !value)} className='cursor-pointer p-0 h-6 w-4 absolute right-6 top-2 z-10 border-none'>
                                        {
                                            isPassVisible
                                                ? <FaEyeSlash size={18} />
                                                : <FaEye size={18} />
                                        }
                                    </button>
                                </div>

                                <p className='text-green-400' >{success}</p>
                                <p className='text-red-400' >{error}</p>

                                <button type='submit' className=' mb-3 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black/40' disabled={isBtnLoading}>
                                    {isBtnLoading && <span className="loading loading-spinner"></span>}
                                    Register
                                </button>
                            </form>

                            <button onClick={handleGoogleLogIn} className='mt-2 btn btn-neutral shadow-none rounded-sm hover:bg-white hover:text-black border-2 border-black/40 ' disabled={isGoogleBtnLoading}>
                                {isGoogleBtnLoading && <span className="loading loading-spinner"></span>}
                                <FcGoogle />
                                Login with Google
                            </button>
                            <h2>Already have an account? <Link state={location.state} className='underline text-blue-400' to={'/login'}>Log IN Now</Link></h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;