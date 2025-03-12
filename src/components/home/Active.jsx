import computerEmoji from "../../assets/images/memoji-computer.png";
const Active = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <img className="size-20" src={computerEmoji} alt="" />
      <div className=" text-md 2xl:text-lg font-medium flex gap-4 items-center px-4 py-1 bg-Navbar rounded-lg">
        <span class="relative flex size-3">
          <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
          <span class="relative inline-flex size-3 rounded-full bg-green-500"></span>
        </span>
        <h2>Available for opportunities</h2>
      </div>
    </div>
  );
};

export default Active;
