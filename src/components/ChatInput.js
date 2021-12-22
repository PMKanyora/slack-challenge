import React, {useState} from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

    const[input, setInput] = useState(""); //keeping track of our input
        const send = (e) => {
            e.preventDefault();
            if(!input) return;
            sendMessage(input);
            setInput(""); // refreshing the input field to empty after sending the message
        }
    return (
        <Container>
            <InputContainer>
                <form>
                    <input type='text'
                    value={input}
                    onChange={(e)=> setInput(e.target.value)} 
                    placeholder='Message here...' />
                    <SendButton 
                    type="submit"
                    onClick={send}>
                        <Send />
                    </SendButton>
                </form>
            </InputContainer>
        </Container>
    )
}

export default ChatInput

const Container = styled.div`
    padding-left: 20px;
    padding-right: 20px;
    padding-bottom: 24px
`
const InputContainer = styled.div`
    border: 1px solid #8D8D8E;
    border-radius: 4px;

    form {
        display: flex;
        height: 42px;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            font-size: 13px;
            border: none;
        }
        input:focus{
            outline: none;
        }
    }
`
const SendButton = styled.button`
    background: #007a5a;
    border-radius: 2px;
    width: 32px;
    height: 32px;
    display:flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    margin-right: 5px;
    border: none; 

    .MuiSvgIcon-root{
        width: 18px;
    }
    :hover{
        background: #148567;
    }
`
const Send = styled(SendIcon)`
    color: #D9D9D9; 
`

