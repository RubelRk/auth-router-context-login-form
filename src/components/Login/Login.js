import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Login = () => {
    const {signIn, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();
    const handleSubmit = event =>{
        event.preventDefault(); 
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then((result ) => {
            const user = result.user;
            console.log(user)
            form.reset();
            navigate('/orders');
          })
          .catch((error) => {
            console.error(error);
          });
        console.log(email, password);
    }

    const handleGoogleSignIn = () =>{
        signInWithGoogle()
        .then(result =>{
            const user = result.user;
            navigate('/orders');
            console.log(user);
        })
        .catch(error =>{
            console.error(error);
        })
    }

    return (
    <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">Do you no Google? You know Google,Use Google Account.</p>
                <button onClick={handleGoogleSignIn } className="btn btn-outline btn-secondary">Google SignIn</button>
                </div>
                 <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <form onSubmit={handleSubmit} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>

                    <input type="email" name='email' placeholder="email" className="input input-bordered" required />

                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>

                    <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                    <label className="label">
                        <Link to='' className="label-text-alt link link-hover">Forgot password?</Link>
                    </label>
                    <label className="label">
                        <Link to='/register' className="label-text-alt link link-hover">You have no account?</Link>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                    </div>
                </form>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;