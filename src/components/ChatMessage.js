import React from 'react'
import styled from 'styled-components';

function ChatMessage() {
    return (
        <Container>
            <UserAvatar>
                <img src='https://randomuser.me/api/portraits/men/47.jpg' />
            </UserAvatar>
            <MessageContent>
                <Name>
                    Peter Maich
                    <span>20/12/2021 2:30:00 AM</span>
                </Name>
                <Text>
                    This is the best Challenge  
                </Text>
            </MessageContent>
        </Container>
    )
}

export default ChatMessage

const Container = styled.div`
    padding: 8px 12px;
    display: flex;
    align-items: center;
`
const UserAvatar = styled.div`
    width: 32px;
    height: 32px;
    border-radius: 2px;
    overflow: hidden;
    margin-right: 8px;
    img{
        width: 100%;
    }
`
const MessageContent = styled.div`
    display: flex;
    flex-direction: column;
`
const Name = styled.span`
    font-weight: 700;
    font-size: 15px;
    line-height: 1.4;
    span{
        margin-left: 8px;
        font-size: 13px;
        font-weight: 400;
        color: rgb(97, 96, 97);
    }
`
const Text = styled.span``
