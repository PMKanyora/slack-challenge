import React from 'react'
import styled from 'styled-components';
import {auth, provider} from '../firebase';

function Login(props) {

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result) => {
            const newUser = {
                name: result.user.displayName,
                photo: result.user.photoURL,
            }
            // console.log(newUser);
            localStorage.setItem('user', JSON.stringify(newUser))
            props.setUser(newUser);
        })
        .catch((error) =>{
            console.log(error.message);
        })
    }
    return (
        <Container>
            <Content>
                <SlackImg src='http://assets.stickpng.com/images/5cb480cd5f1b6d3fbadece79.png'/>
                <h1>Sign in Slack</h1>
                <SignInButton onClick={()=> signIn()}>
                    Sign In With Google
                </SignInButton>
            </Content>

        </Container>
    )
}

export default Login

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: #f8f8f8;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Content = styled.div`
    background: #fff;
    padding: 100px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 0 1px 3px rgb(0 0 0 / 12%), 0 1px 2px rgb(0 0 0 / 24%);
`
const SlackImg = styled.img`
    height: 100px;
    margin-bottom: 15px;
`
const SignInButton = styled.button`
    margin-top: 50px;
    background: #0a8d48;
    color: #fff;
    border: none;
    height: 40px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 15px;
    padding-left: 3px;
    padding-right: 3px;
`
