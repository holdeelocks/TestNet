const dummydata = {
  quizzes: [
    {
      id: 0,
      title: "Is this a test?",
      votes: 0,
      author: "Holden",
      topic: "test",
      questions: [
        {
          question: "Is this a test question?",
          answers: ["true", "false", "Idk stop yelling at me"]
        }
      ]
    },
    {
      id: 1,
      title: "ES6",
      votes: 0,
      author: "lauren",
      topic: "JavaScript",
      questions: [
        {
          question: "How about this second quiz?",
          answers: [
            "This works",
            "This is broken",
            "You messed this up bigtime",
            "What was the question?"
          ]
        },
        {
          question: "This is another question?",
          answers: ["Yes", "No", "Maybe"]
        },
        {
          question: "Is even this question showing?",
          answers: ["Yay!", "Yes but it's ugly", "Nope, you messed up bigtime!"]
        }
      ]
    }
  ]
};

export default dummydata;
