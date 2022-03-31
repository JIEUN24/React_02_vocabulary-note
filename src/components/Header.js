import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

function Header () {
    const history = useHistory();

    return (
        <Wrap>
            <h1 onClick={() => {
                history.push('/');
            }}>포르투갈어 단어장</h1>
            <Link>
                <button onClick={() => {
                  history.push('/add')
                }}>+</button>
            </Link>
        </Wrap>
    )
}

const Wrap = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-left: 40px;
    margin-right: 40px;

    h1 {
        font-family: 'Hi Melody', cursive;
        font-size: 40px;
    }
`

const Link = styled.div`
    button {
        position: absolute;
        top: 2vh;
        right: 3vh;
        background-color: orange;
        color: white;
        font-size: 40px;
        font-weight: bold;
        text-decoration: none;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 100%;
    }

    button:hover {
        background-color: blueviolet;
    }
`

export default Header;

