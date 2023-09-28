const TotalQuestions = ({ totalQuestions }) => {
  return (
    <h1 className="py-2 px-4 m-2 bg-gradient-to-r from-[rgba(255,_87,_51,1)] to-[rgba(255,_87,_51,0.75)] rounded-[20px]">
      {totalQuestions}/11
    </h1>
  );
};
export default TotalQuestions;
