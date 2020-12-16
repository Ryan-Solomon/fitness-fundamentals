import React, { createContext, FC, useContext, useState } from 'react';
import { data, TData } from '../data/data';

type TQuizContext = {
  data: TData[];
};

const initialContext: TQuizContext = {
  data,
};

const QuizContext = createContext<TQuizContext>(initialContext);

export const QuizContextProvider: FC = ({ children }) => {
  const [quizData, setQuizData] = useState(data);

  return (
    <QuizContext.Provider value={{ data: quizData }}>
      {children}
    </QuizContext.Provider>
  );
};

export const useQuizContext = () => {
  return useContext(QuizContext);
};
