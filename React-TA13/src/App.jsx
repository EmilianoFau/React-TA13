import React from 'react';
import { UserProvider } from './Context';
import Display from './components/Display';
import Input from './components/Input';

const App = () => {
  return (
    <UserProvider>
      <div>
        <Input />
        <Display />
      </div>
    </UserProvider>
  );
};

export default App;
