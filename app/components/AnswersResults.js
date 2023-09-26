const AnswersResults = ({ answerData }) => {
  const { correctAnswers, incorrectAnswers } = answerData;
  return (
    <>
      <div className="bg-[rgba(0,0,0,1)] w-full border-[3px] border-[#fc6812] p-3 mb-8 rounded-md">
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
