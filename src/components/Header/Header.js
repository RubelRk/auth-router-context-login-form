import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const {user, logOut } = useContext(AuthContext)

    const handleSignOut = () =>{
        logOut()
        .then(() => {
          })
          .catch((error) => {console.log(error)
          });
        }
    return (
        <div>
               <div className="navbar bg-primary text-primary-content">
                <Link to='/' className="btn btn-ghost normal-case text-xl">RK</Link>
               <div className=''>
               <Link className="btn btn-ghost normal-case text-md" to='/' >Home</Link>
               <Link className="btn btn-ghost normal-case text-md" to='/orders' >Orders</Link>
                <Link className="btn btn-ghost normal-case text-md" to='/login'>Login</Link>
                <Link className="btn btn-ghost normal-case text-md" to='/register'>Register</Link>
                {
                user?.email ? <button onClick={logOut} className="btn btn-xs">Logout</button> : <Link to='/login'><button className="btn btn-xs">Log In</button></Link>
                }
               </div>
            </div>
        </div>
    );
};

export default Header;