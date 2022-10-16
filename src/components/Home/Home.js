import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';


const Home = () => {
    const { user } = useContext(AuthContext)
    return (
        <div>
            <h4>This is home 
                {
                user?.email ? <div>
                    <p>{user.email}</p>
                    <p>{user.name}</p>
                </div>
            : <div>
                <br />
                <Link to='/login'><button className="btn btn-xs">Log In</button></Link>
            </div>
                }
            </h4>
        </div>
    );
};

export default Home;