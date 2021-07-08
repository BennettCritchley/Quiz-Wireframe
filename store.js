const STORE = {
  questions: [//1
    {
      question: 'Open the abbreviation HTML',
      answers: [
        'Hyper Text Module Language',
        'Hyper Text Markup Language',
        'Hyper Test Markup Language',
        'Hyperlink Markup Language'
      ],
      correctAnswer: 'Hyper Text Markup Language'
    },
    //2
    {
      question: 'What is the correct HTML tag for a new paragraph?',
      answers: [
        'paragraph',
        'p',
        'pre',
        'para'
      ],
      correctAnswer: 'p'
    },
    //3
    {
      question: 'What is the HTML attribute to reference the location of an image inside the image tag?',
      answers: [
        'src',
        'href',
        'link',
        'Location'
      ],
      correctAnswer: 'src'
    },
    //4
    {
      question: 'Which tag would you use to create a hyperlink?	',
      answers: ['a', 'img', 'dl', 'h1'],
      correctAnswer: 'a'
    },
    //5
    {
      question: 'How to write HTML Comment?',
      answers: [
        '// This is HTML comment',
        '/* This is HTML comment */',
        '< !-- This is HTML comment -->',
        '**'
      ],
      correctAnswer: '< !-- This is HTML comment -->'
    }
  ],
  quizStarted: false,
  currentQuestion: 0,
  score: 0
};