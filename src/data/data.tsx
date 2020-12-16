export const data = [
  {
    category: 'Beginner',
    questions: [
      {
        question: 'what is a calorie',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
    ],
  },
  {
    category: 'Intermediate',
    questions: [
      {
        question: 'what is a calorie',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
    ],
  },
  {
    category: 'Advanced',
    questions: [
      {
        question: 'what is a calorie',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        incorrectAnswers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'd',
        answeredCorrectly: false,
      },
    ],
  },
];

export type TData = typeof data[0];
