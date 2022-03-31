import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

// 리덕스 관련
import { useDispatch, useSelector } from 'react-redux';
import { loadWordFB, deleteWordFB } from '../redux/modules/card';


function Show () {
  const history = useHistory();

  // 리덕스에서 저장된 값 가져오기
  const dic_list = useSelector((state) => state.card.list);
  console.log(dic_list)

  // 리듀서에게 액션을 발생시키도록 보내주기
  const dispatch = useDispatch();

  React.useEffect(() => {
      dispatch(loadWordFB());
  }, [dispatch]);

  return (
    <Wrap>
      {dic_list.map((list, idx) => {
        return (
          <Card key={idx} id={list.id}>
            <ButtonWrap>
              <div>
                <input type="checkbox"/>
              </div>
              <div>
                <Button>수정</Button>
                <Button style={{paddingTop: "3px"}}
                  onClick={() => {
                    dispatch(deleteWordFB(list.id))
                    alert('단어 삭제 완료!')
                    history.push('/')
                  }} >X</Button>
              </div>
            </ButtonWrap>
            <Word>
                <label>단어</label>
                <p>{list.word}</p>
            </Word>
            <Word>
                <label>뜻</label>
                <p>{list.mean}</p>
            </Word>
            <Word>
                <label>예문</label>
                <Example>{list.example}</Example>
            </Word>     
        </Card>
        )
      })}
    </Wrap>
    )
  }

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`

const Card = styled.div`
  background-color: papayawhip;
  width: 400px;
  height: 430px;
  margin: 20px;

  box-sizing: border-box;
  box-shadow: 2px 2px 2px 1px gray;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* float: left; */

  /* font-family: 'Hi Melody', cursive; */
  border: 1px solid gray;
  border-radius: 10px;

  p {
    border: 1px solid gray;
    border-radius: 3px;
    border-top: none;
    width: 90%;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: floralwhite;
  }

  label {
    font-size: 20px;
    font-weight: bold;
    background-color: peachpuff;
    width: 90%;
    border-radius: 10px;
    margin-top: 10px;
  }
`
const Word = styled.div`
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

const Example = styled.p`
  color: blue;
`
const ButtonWrap = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  background-color: orange;
  color: white;
  border: 1px solid orange;
  border-radius: 2px;
  margin-left: 10px;
`

export default Show;


// onClick={() => {
//   dispatch(deleteWordFB(dic_list.id))
//   history.goBack()
// }}