import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loding from '../Loding/Loding';

const Signup = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true}
        );
    const [updateProfile, updating] = useUpdateProfile(auth);

    
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // const agree = e.target.terms.checked;
        
        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        
        navigate('/home');   
    }
    const navigateLogin = e => {
        navigate('/signup')
    }
    if (loading || updating) {
        return <Loding
        ></Loding>
    }
    return (
        <div className='container col-md-4 mx-auto my-5'>
            <h1 className='my-3 text-center'>Registration</h1>
            <Form onSubmit={handleRegister}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="text"  name='name' placeholder="Enter Your Name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check onClick={() => setAgree(!agree)} className={agree ? '' : 'text-danger'} type="checkbox" name="terms" label="Terms and Conditions" />
                </Form.Group>
                <Button disabled={!agree} className='w-100' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>

            <p>Already Registered?  <Link to='/login' className='text-primary text-decoration-none' onClick={navigateLogin} >Please Login</Link> </p>
        </div>
    );
};

export default Signup;