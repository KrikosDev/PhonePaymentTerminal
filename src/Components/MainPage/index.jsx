import { Link } from 'react-router-dom';
import styled from 'styled-components';
import React from 'react';

const MainBox = styled.div`
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande',
    'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;

  h1 {
    font-size: 80px;
  }
  h2 {
    color: rgb(2, 12, 94);
  }
  h3 {
    margin-top: 80px;
    color: rgb(2, 12, 94);
  }
`;

const ParagraphBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;

  button {
    margin: 5px;
    padding: 10px;
    width: 200px;
    height: 60px;
    border-radius: 15px;
    border-style: none;
    color: white;
    font-size: larger;
  }

  button:active {
    opacity: 0.8;
  }
`;

const ColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;

  .mts {
    background-color: rgb(227, 39, 17);
  }

  .megaphone {
    background-color: rgb(3, 153, 97);
  }

  .tele2 {
    background-color: rgb(25, 103, 209);
  }

  .beeline {
    background-color: rgb(239, 190, 53);
  }
`;

const RulesBox = styled.div`
  display: flex;
  align-items: flex-end;
  height: 50%;

  h6 {
    margin: 0;
  }
`;

const ColorBox = styled.div`
  display: flex;

  .blue {
    color: rgb(25, 103, 209);
  }

  .yellow {
    color: rgb(239, 190, 53);
  }

  .green {
    color: rgb(3, 153, 97);
  }

  .red {
    color: rgb(227, 39, 17);
  }
`;

function MainPage() {

  return (
    <MainBox>
      <h1>
        <ColorBox>
          <div className='blue'>O</div>
          <div className='yellow'>n</div>
          <div className='green'>l</div>
          <div className='blue'>i</div>
          <div className='yellow'>n</div>
          <div className='red'>e</div>
          <div className='blue'>P</div>
          <div className='green'>a</div>
          <div className='red'>y</div>
          <div className='blue'>m</div>
          <div className='red'>e</div>
          <div className='yellow'>n</div>
          <div className='green'>t</div>
        </ColorBox>
      </h1>
      <ParagraphBox>
        <h2>
          Do you want to pay for mobile communication without registration and
          SMS?
        </h2>
        <h2>You are in the right place.</h2>
      </ParagraphBox>
      <h3>Please select your mobile operator</h3>
      <ButtonBox>
        <ColumnBox>
          <Link to='/payment/MTS'>
            <button
              className='mts'
            >
              МТС
            </button>
          </Link>
          <Link to='/payment/MEGAPHONE'>
            <button
              className='megaphone'
            >
              Мегафон
            </button>
          </Link>
        </ColumnBox>
        <ColumnBox>
          <Link to='/payment/TELE2'>
            <button
              className='tele2'
            >
              ТЕЛЕ2
            </button>
          </Link>
          <Link to='/payment/BEELINE'>
            <button
              className='beeline'
            >
              Билайн
            </button>
          </Link>
        </ColumnBox>
      </ButtonBox>
      <RulesBox>
        <h6>All rights reserved</h6>
      </RulesBox>
    </MainBox>
  );
}

export default MainPage;
