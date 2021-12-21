import React from 'react'
import {useEffect, useState} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Chats from './components/Chats';
import Login from './components/Login';
import styled from 'styled-components';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import db from "./firebase";


function App() {
    const [rooms, setRooms] = useState([]);
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));
    
    const getChannels = () =>{
        db.collection('rooms').onSnapshot((snapshot) => {
            setRooms(snapshot.docs.map((doc) => {
                return {id: doc.id, name:doc.data().name }
            }))
        })
    }

    useEffect(() => {
        getChannels();
    }, [])
    
    console.log('user in app state', user);
    console.log(rooms);
    
    return (
        <div className='App'>
            <Router>
                {
                    !user ?
                    <Login setUser={setUser}/>
                    :
               
                        <Container>
                            <Header user={user}/>
                            <Main>
                                <Sidebar rooms={rooms}/>
                                <Routes>
                                    <Route path='/rooms' element = {<Chats />} />
                                    
                                </Routes>
                            </Main>    
                        </Container>
                 }    
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

