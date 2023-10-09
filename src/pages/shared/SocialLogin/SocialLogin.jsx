import React, { useContext } from 'react';
import { AuthContext } from '../../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { SocialIcon } from "react-social-icons";

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate=useNavigate();
    const location=useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleGoogleSignIn = () => {
        
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                const savedUser = { name: loggedUser.displayName, email: loggedUser.email }   
            })
    }
    return (
        <div>
            <div className="divider"></div>
            <div>
                <button onClick={handleGoogleSignIn}><SocialIcon network="google" /></button>
            </div>
        </div>
    );
};

export default SocialLogin;