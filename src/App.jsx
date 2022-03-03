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
  const [prefix, setPrefix] = useState('');

  return (
    <MainBox>
      <Routes>
        <Route
          path={`/`}
          element={<MainPage prefix={prefix} setPrefix={setPrefix} />}
        />
        <Route
          path={`/payment`}
          element={<Payment prefix={prefix} setPrefix={setPrefix} />}
        />
      </Routes>
    </MainBox>
  );
}

export default App;
