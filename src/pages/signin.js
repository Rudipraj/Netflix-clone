import React, { useState } from 'react';
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components';

export default function Signin(){

    const [emailAddress, setEmailAddress] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    

    //validations
    const isInvalid = password ==='' || emailAddress ==='';

    const handleSignin = (event) => {
        event.preventDefault();
    }


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
                        onChange= {({target}) => setPassword(target.value)}
                        >
                        Sign In
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