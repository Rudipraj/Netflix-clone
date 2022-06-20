import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

export default function Signin(){
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);
    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    //validations
    const isInvalid = password ==='' || emailAddress ==='';

    const handleSignin = (event) => {
        event.preventDefault();
    }

    //firebase

    firebase.auth()
    .signInWithEmailAndPassword(emailAddress, password)
    .then(() => {
        //push to browse page
        navigate(ROUTES.BROWSE)
    })
    .catch((error) => {
        setEmailAddress('');
        setPassword('');
        setError(error.message);
    })


    return (
        <>
        <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign In
                </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit ={handleSignin}>
                    <Form.Input 
                    placeholder="Email Address"
                    onChange= {({target}) => setEmailAddress(target.value)}
                    />

                    <Form.Input 
                        type= "password"
                        autoComplete="off"
                        placeholder="Password"
                        onChange= {({target}) => setPassword(target.value)}
                        />

                    <Form.Submit 
                        disbaled = {isInvalid}
                        type = "submit"
                        data-testid="sign-in"
                        >
                        Sign Up
                    </Form.Submit>
                </Form.Base>

                <Form.Text>New to Netflix? 
                    <Form.Link to="/signup">Sign up Now</Form.Link>
                </Form.Text>

                <Form.TextSmall>
                    This page is protected by Google reCAPTCHA to ensure you are not a robot. Learn More.
                </Form.TextSmall>
            </Form>
        </HeaderContainer>
        <FooterContainer />
        </>
        )
}