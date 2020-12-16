export const data = [
  {
    category: 'Beginner',
    questions: [
      {
        question: 'what is a calorie',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
    ],
  },
  {
    category: 'Intermediate',
    questions: [
      {
        question: 'what is a calorie',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
    ],
  },
  {
    category: 'Advanced',
    questions: [
      {
        question: 'what is a calorie',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
      {
        question: 'what is a macro',
        answers: [{ answer: 'a' }, { answer: 'b' }, { answer: 'c' }],
        correctAnswer: 'c',
        answeredCorrectly: false,
      },
    ],
  },
];

export type TData = typeof data[0];
