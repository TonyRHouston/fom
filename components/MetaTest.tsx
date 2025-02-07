import { useSDK } from '@metamask/sdk-react';
import React, { useState } from 'react';

export const App = () => {
  const web3 = useSDK();
  const connect = async () => {
    try {
      await web3.sdk?.connect();
    } catch (err) {
      console.warn(`failed to connect..`, err);
    }
  };
  const disconnect = async () => {
    try {
      await web3.sdk?.disconnect();
    } catch (err) {
      console.warn(`failed to disconnect..`, err);
    }
  };
  return (
    <div className="App">
      <button style={{ padding: 10, margin: 10 }} onClick={web3.connected ? disconnect : connect}>
        {web3.connected ? 'Disconnect Web3' : "Connect Web3"}
      </button>
    </div>
  );
};