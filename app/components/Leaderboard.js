import Image from "next/image";

const Leaderboard = () => {
  return (
    <table className="w-full md:w-2/4 text-white bg-red-500 rounded-xl">
      <tr className="rounded-full bg-orange-400 mb-2 my-2 px-2 h-10 mx-auto  w-[calc(100%_-_16px)] flex items-center">
        <td className="text-left flex-grow h-6">1</td>
        <td className="text-left w-3/4 h-6">
          <Image
            objectFit="cover"
            quality={100}
            width={5}
            height={5}
            alt=""
            src="/profile.jpg"
            className="inline h-5 w-auto rounded-full"
          />{" "}
          Benito Pérez
        </td>
        <td className="text-left  flex-grow h-6">7</td>
      </tr>
      <tr className="rounded-full bg-orange-400 mb-2 my-2 px-2 h-10 mx-auto  w-[calc(100%_-_16px)] flex items-center">
        <td className="text-left flex-grow h-6">1</td>
        <td className="text-left w-3/4 h-6">
          <Image
            objectFit="cover"
            quality={100}
            width={5}
            height={5}
            alt=""
            src="/profile.jpg"
            className="inline h-5 w-auto rounded-full"
          />{" "}
          Benito Pérez
        </td>
        <td className="text-left  flex-grow h-6">7</td>
      </tr>
    </table>
  );
};
export default Leaderboard;
