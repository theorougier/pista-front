import React, { useState } from "react";
import Question from "./Question";

function SliderForm({ questions, onComplete }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleChange = (e) => {
    setAnswers({
      ...answers,
      [questions[currentQuestion].name]: e.target.value,
    });
  };

  return (
    <section className="m-3">
      <div>
        <Question
          currentQuestion={currentQuestion}
          questions={questions}
          handleNext={handleNext}
          sub_label={questions[currentQuestion].sub_label}
          label={questions[currentQuestion].label}
          type={questions[currentQuestion].type}
          onChange={handleChange}
          value={answers[questions[currentQuestion].name] || ""}
          options={questions[currentQuestion].options}
        />
      </div>
    </section>
  );
}

export default SliderForm;
