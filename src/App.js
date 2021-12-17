import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
    return (
        <div className='App'>
            <Router>
                <Container>
                    <Header />
                    <Main>
                        <Sidebar />
                        <Routes>
                            <Route path='/' element = {<Chats />} />
                            <Route path='/login' element = {<Login />} />
                        </Routes>
                    </Main>    
                </Container>    
            </Router>
        </div>
    )
}

export default App

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 38px auto;

`
const Main =styled.div`
    display:grid;
    grid-template-columns: 260px auto;
`

