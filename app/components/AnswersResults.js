const AnswersResults = ({ answerData }) => {
  const { correctAnswers, incorrectAnswers } = answerData;
  return (
    <>
      <div className="bg-littleDarkBackground w-full border-[3px] border-primary p-3 mb-8 rounded-md">
        <p className="text-white">
          Respuestas correctas:{" "}
          <span className="text-green-400">{correctAnswers}</span>
        </p>
        <p className="text-white">
          Respuestas incorrectas:{" "}
          <span className="text-red-400">{incorrectAnswers}</span>
        </p>
      </div>
    </>
  );
};

export default AnswersResults;
