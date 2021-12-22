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
import {auth, provider} from './firebase';


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

    const signOut = () => {
        auth.signOut().then(() => {
            localStorage.removeItem('user');
            setUser(null);
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
                            <Header signOut={signOut} user={user}/>
                            <Main>
                                <Sidebar rooms={rooms}/>
                                {/* <Chats /> */}
                                <Routes>
                                
                                    <Route path="/room/:channelId" element = {<Chats user={user}/>} />
                                    <Route path="/" element = {'peter'} />
                                   
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
    grid-template-rows: 38px minmax(0, 1fr);

`
const Main =styled.div`
    display:grid;
    grid-template-columns: 260px auto;
`

