import React, { useState } from 'react';
import styled from 'styled-components';
import InputMask from 'react-input-mask';
import { Link } from 'react-router-dom';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 95vh;

  h1 {
    font-size: 100px;
    margin-top: 0;
  }

  #TELE2 {
    color: rgb(25, 103, 209);
  }

  #BEELINE {
    color: rgb(239, 190, 53);
  }

  #MEGAPHONE {
    color: rgb(3, 153, 97);
  }

  #MTS {
    color: rgb(227, 39, 17);
  }

  #phoneNumber {
  }

  input {
    text-align: center;
    height: 50px;
    width: 400px;
    margin: 5px;
    padding: 5px;
    font-size: 30px;
    border-radius: 8px;
  }

  button {
    background-color: white;
    color: black;
    margin-top: 200px;
    padding: 10px;
    width: 200px;
    height: 60px;
    border-radius: 15px;
    font-size: larger;
  }
`;

const ModalBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  background: rgba(128, 128, 128, 0.7);
  width: 100vw;
  height: 100vh;
`;

const ModalWindow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  height: 30%;
  width: 60%;
  border-radius: 40px;

  p {
    font-weight: 20px;
  }

  button {
    background-color: white;
    margin-top: 40px;
    color: black;
    padding: 10px;
    width: 200px;
    height: 60px;
    border-radius: 15px;
    font-size: larger;
  }
`;

function Payment({ prefix }) {
  const [sum, setSum] = useState(null);
  const [number, setNumber] = useState('');
  const [modalOpen, setModalOpen] = useState({
    open: false,
    key: '',
    flag: false,
  });

  const startPay = () => {
    if (sum < 1 || sum > 1000) {
      setModalOpen({
        open: true,
        key: 'The amount must be at least 1 and not more than 1000',
        flag: false,
      });
    } else if (number[15] == false) {
      setModalOpen({
        open: true,
        key: 'Phone number is incorrect',
        flag: false,
      });
    } else {
      const successful = Math.floor(Math.random() * 100);
      if (successful > 10) {
        setTimeout(() => {
          setModalOpen({ open: true, key: 'Successful payment', flag: true });
        }, 2000);
      } else {
        setTimeout(() => {
          setModalOpen({ open: true, key: 'Payment failed', flag: false });
        }, 2000);
      }
    }
  };

  return (
    <MainBox>
      <h1 id={prefix}>{prefix}</h1>
      <p id={prefix}>Enter your phone number</p>
      <InputMask
        placeholder='+7'
        mask='+7 999 999 99 99'
        maskChar=' '
        onChange={(e) => {
          setNumber(e.target.value);
        }}
      ></InputMask>
      <p id={prefix}>Enter the replenishment amount</p>
      <input
        value={sum}
        minLength={1}
        maxLength={4}
        onChange={(e) => {
          setSum(e.target.value);
        }}
      ></input>
      <button
        id={prefix}
        onClick={() => {
          startPay();
        }}
      >
        Pay
      </button>
      {modalOpen.open && (
        <ModalBackground>
          <ModalWindow>
            <p>{modalOpen.key}</p>

            {modalOpen.flag ? (
              <Link to='/'>
                <button
                  onClick={() => {
                    setModalOpen({ open: false, key: '', flag: false });
                  }}
                >
                  Ok
                </button>
              </Link>
            ) : (
              <button
                onClick={() => {
                  setModalOpen({ open: false, key: '', flag: false });
                }}
              >
                Ok
              </button>
            )}
          </ModalWindow>
        </ModalBackground>
      )}
    </MainBox>
  );
}

export default Payment;
