import React, { useRef } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// 리덕스 관련
import { useDispatch } from 'react-redux';
import { createWordFB } from '../redux/modules/card';


function Add () {
  const history = useHistory();

  const word = useRef(null);
  const mean = useRef(null);
  const example = useRef(null);

  const dispatch = useDispatch();

  const addWord = () => {
    dispatch(createWordFB({
      word: word.current.value, 
      mean: mean.current.value,
      example: example.current.value
    }))
    window.alert("단어 추가 완료!")
    history.push('/');
  };

  // console.log(addWord)

  return (
    <AddWord>
      <p>단어 추가하기</p>
      <Input>
        <label>단어</label>
        <input type="text" maxLength="30" ref={word}></input>
      </Input>
      <Input>
        <label>뜻</label>
        <input type="text" maxLength="20" ref={mean}></input>
      </Input>
      <Input>
        <label>예문</label>
        <input type="text" maxLength="60" ref={example}></input>
      </Input>
      <button onClick={addWord}>저장하기</button>
    </AddWord>
  )
}

const AddWord = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: 30px;
  padding-top: 20px;
  width: 500px;
  height: 600px;
  border: 1px solid gray;
  border-radius: 10px;

  p {
    margin-top: 30px;
    padding: 5px 40px;
    font-size: 30px;
    font-weight: bold;
    font-family: 'Hi Melody', cursive;
    /* background-color: peachpuff; */
    border: 5px solid peachpuff;
    border-radius: 30px;
  }

  button {
    padding: 5px 40px;
    font-size: 30px;
    margin-top: 20px;
    border: none;
    border-radius: 10px;
    background-color: peachpuff;
    font-family: 'Hi Melody', cursive;
    font-weight: bold;
  }
`

const Input = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  font-family: 'Hi Melody', cursive;
  font-size: 30px;

  label {
    text-align: left;
    font-weight: bold;
    margin-bottom: 10px;
  }

  input {
    width: 400px;
    height: 30px;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px dashed black;
    background-color: transparent;
  }
`

export default Add;