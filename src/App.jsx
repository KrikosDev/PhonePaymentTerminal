import React, { useState } from 'react';
import styled from 'styled-components';
import MainPage from './Components/MainPage';
import { Route, Routes } from 'react-router-dom';
import Payment from './Components/PaymentComponent';

const MainBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {

  return (
    <MainBox>
      <Routes>
        <Route
          path={`/`}
          element={<MainPage/>}
        />
        <Route
          path={`/payment/MTS`}
          element={<Payment prefix={'MTS'}/>}
        />
        <Route
          path={`/payment/TELE2`}
          element={<Payment prefix={'TELE2'}/>}
        />
        <Route
          path={`/payment/MEGAPHONE`}
          element={<Payment prefix={'MEGAPHONE'}/>}
        />
        <Route
          path={`/payment/BEELINE`}
          element={<Payment prefix={'BEELINE'}/>}
        />
      </Routes>
    </MainBox>
  );
}

export default App;
