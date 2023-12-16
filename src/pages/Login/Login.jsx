import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import axios from 'axios';
import { AuthContext } from '../../components/hooks/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'

    const { auth,
        user,loading,login,CreateUser,SignOutUser,loginWithGoogle, setLoading} = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')  
    
    // login
    const onSubmit = (data) => {
        console.log(data);
        // Perform login logic here

        login(data.email, data.password)
            .then(result => {
                const loggedUser = result.user
                console.log(loggedUser)
              
                Swal.fire("successfully logged in");
                  setError('')
                  navigate(from, {replace:true});
            })
            .catch(error => {
                setLoading(false)
                console.log(error)
                setError(error.message)
            })
    }
    
    //password show and hide
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    // google login
    const handleGoogleLogin =()=>{
        loginWithGoogle()
        .then(result=> {
            const loggedUser = result.user
            console.log(loggedUser)
            axios.post('http://localhost:5000/users',{name: loggedUser?.displayName, email:loggedUser?.email, photo:loggedUser?.photoURL})
            .then(res=>{
                Swal.fire("successfully logged in");
            })
            
            navigate(from, { replace: true });

        })
        .catch(error=>{
            setLoading(false)
            console.log(error)})
    }

    return (
       <>
        

        <div className="hero min-h-screen">
            <div className="hero-content  flex-col lg:flex-row-reverse">
                <div className="text-center hidden   lg:block  lg:text-left">
                    <img src="https://i.ibb.co/NFCpKmH/austin-distel-rxp-Th-Owu-Vg-E-unsplash.jpg" className='w-3/4 mx-auto rounded-xl' alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl ">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <h1 className="text-5xl font-bold">Login now!</h1>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input className='input input-bordered' type="text" {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' } })} />

                                {errors.email && <span>{errors.email.message}</span>}
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                
                                <input className="input input-bordered" type={showPassword ? 'text' : 'password'} {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must have at least 6 characters' } })} />
                                <div className="password-icon flex items-center gap-3 my-1" onClick={togglePasswordVisibility}>
                                    {showPassword ? <><AiFillEyeInvisible /> <span>Hide password</span></> :<> <AiFillEye /> <span>Show password</span></> }
                                </div>
                                {errors.password && <span>{errors.password.message}</span>}

                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type='submit'>Login</button>
                            </div>
                            {/* error message from firebase */}
                            {
                                error ?? <p className='bg-text-red-500'>{error}</p>
                            }
                            <div className="text-center my-3">
                                    <p className='text-sm'>New here?<Link to="/signUp"><span className='font-bold text-accent'> Create a New Account</span></Link></p>
                                </div>
                            <div className="flex flex-col w-full border-opacity-50">
                                    <div className="divider">OR</div>
                                    <div className="">
                                        <button onClick={handleGoogleLogin} className='btn w-full btn-outline btn-accent  text-xl font-bold'>G</button>
                                    </div>
                                </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
       </>
    );
};

export default Login;