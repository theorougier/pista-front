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
    <section>
      <div>
        <Question
          label={questions[currentQuestion].label}
          sub_label={questions[currentQuestion].sub_label}
          type={questions[currentQuestion].type}
          onChange={handleChange}
          value={answers[questions[currentQuestion].name] || ""}
        />
        <button onClick={handleNext}>
          {currentQuestion === questions.length - 1 ? "✅" : "➡️"}
        </button>
      </div>
    </section>
  );
}

export default SliderForm;
