import React, { useState, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { FirebaseContext } from '../context/firebase'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components';
import * as ROUTES from '../constants/routes'

export default function Signup(){
    const navigate = useNavigate();
    const { firebase } = useContext(FirebaseContext);

    const [firstName, setFirstName] = useState('')
    const [emailAddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = firstName ==='' || emailAddress=== '' || password==='';

    const handleSignup = (event) => {
        event.preventDefault();

        firebase.auth()
        .createUserWithEmailAndPassword(emailAddress, password)
        .then((result) =>
        result.user
        .updateProfile({
            displayName : firstName,
            photoURL : Math.floor(Math.random()*5)+1,
        }).then(() => {
            navigate(ROUTES.BROWSE)
        })
        )
        .catch((error) => {
            setFirstName('')
            setPassword('')
            setEmailAddress('')
            setError(error.message)
        })
    }

    return (
        <>
            <HeaderContainer>
            <Form>
                <Form.Title>
                    Sign Up
                </Form.Title>
                {error && <Form.Error>{error}</Form.Error>}

                <Form.Base onSubmit ={handleSignup}>
                    <Form.Input 
                    placeholder="First Name"
                    value={firstName}
                    onChange= {({target}) => setFirstName(target.value)}
                    />

                    <Form.Input 
                    placeholder="Email Address"
                    value={emailAddress}
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
                        >
                        Sign In
                    </Form.Submit>
                </Form.Base>

                <Form.Text>Already a user? 
                    <Form.Link to="/signin">Sign in Now</Form.Link>
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