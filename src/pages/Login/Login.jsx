import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { Helmet } from 'react-helmet-async';
import Swal from "sweetalert2";
import SocialLogin from '../shared/SocialLogin/SocialLogin';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const {signIn}=useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const onSubmit = data => {
        // console.log(data);
        signIn(data.email, data.password)
        .then(result => {
            const user = result.user;
            console.log(user);
            Swal.fire('Login Successful!')
            const loggedUser={
                email:user.email
            }
            console.log(loggedUser);
    
            navigate(from, {replace:true});
        })
        .catch(error => console.log(error))
    };
    const [checked, setChecked] = useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    };
    return (
        <>
        <Helmet>
        <title>Arrosa | Login</title>
      </Helmet>
        <div>
            <div className="">
            <h2 className="text-3xl font-semibold text-center text-orange-950">Please Login!</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="w-full">
                <div className="form-control items-center">
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Email*</span>
                        </label>
                        <input type="email" placeholder="Your Email Address" className="input input-bordered w-full bg-orange-100" {...register("email", { required: true })} />

                    </div>
                    <div className="form-control w-1/3  mx-16">
                        <label className="label">
                            <span className="label-text text-orange-950 text-xl font-semibold">Password*</span>
                        </label>
                        <input type={!checked ? "password" : "text"} placeholder="Password" className="input input-bordered w-full bg-orange-100" {...register("password", { required: true, minLength: 6 })} />
                    </div>
                    <div className="form-control">
                        <label className="label cursor-pointer">
                            <span className="label-text mr-8">Show Password</span>
                            <input onChange={handleCheck} type="checkbox" checked={checked} className="checkbox" />
                        </label>
                    </div>
                </div>
                <div className="form-control items-center">
                    <input type="submit" className="btn bg-orange-950 my-10 w-1/3 text-white" value='Login' />
                    <SocialLogin></SocialLogin>
                </div>
                <p className="text-center">Not Registered? <Link className="text-orange-600" to='/register'>Create An Account</Link></p>
            </form>
        </div>
        </div>
        </>
    );
};

export default Login;