import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import google from '../../../image/google.png'

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth)
        ;
    const navigate = useNavigate()
    let errorElement;
    if (error) {
         errorElement =
            <div>
                <p className='text-danger'>Error: {error.message}</p>
            </div>
    }

    if (user) {
        navigate('/home');
    }

    return (
        <div>
            {errorElement}
            <div className='d-flex align-items-center'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            
            <div>
                <Button className='w-100' variant="primary" type="submit"
                    onClick={() => signInWithGoogle()}
                ><span><img style={{ width: '30px' }} className='mx-2' src={google} alt="" /></span> Google Sign In
                </Button>
            </div>
        </div>
    );
};

export default SocialLogin;