import React from 'react'
import styled from 'styled-components';

function ChatMessage({text, name, image, timestamp}) {
    return (
        <Container>
            <UserAvatar>
                <img src={image} />
            </UserAvatar>
            <MessageContent>
                <Name>
                    {name}
                    <span>{new Date(timestamp.toDate()).toUTCString()}</span>
                </Name>
                <Text>
                    {text}  
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
