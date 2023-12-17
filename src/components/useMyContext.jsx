import  { createContext, useContext, useState } from 'react';

const MyContext = createContext();

// eslint-disable-next-line react/prop-types
export const InputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');

  const setInput = (value) => {
    setInputValue(value);
  };

  return (
    <MyContext.Provider value={{ inputValue, setInput }}>
      {children}
    </MyContext.Provider>
  );
};

export const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error('useMyContext must be used within a InputProvider');
  }
  return context;
};