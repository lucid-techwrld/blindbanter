import ui from "../assets/fake-ui.png";
import vector1 from "../assets/blindbanter-vec.png";
import vector2 from "../assets/blindbanter-vec2.png";
import heart from "../assets/heart.png";

const HeroSection = () => {
  return (
    <div className="w-full h-auto flex flex-col justify-center items-center text-md py-10 space-y-3">
      <div className="relative w-full h-full text-center mb-5">
        <img
          src={heart}
          alt="heart"
          className="absolute w-5 h-5 left-20 top-4"
        />
        <p className="font-semibold text-2xl">Welcome to</p>
        <h1 className="text-4xl font-bold text-orange-500">BlindBanter</h1>
      </div>

      <div className="relative w-full h-full text-center mb-5 flex justify-center items-center text-white">
        <img
          src={vector1}
          alt="vector"
          className="absolute w-5 h-5 right-14 top-1"
        />
        <img
          src={vector2}
          alt="arrow"
          className="absolute w-16 h-16 left-0 top-0"
        />
        <p className="p-3 bg-black w-[70%] rounded-md text-xl">
          <strong className="text-orange-500">Meet</strong> Poeple!,{" "}
          <strong className="text-orange-500">Not</strong> Profiles!
        </p>
      </div>

      <p className="text-center">
        <strong className="text-orange-500">BlindBanter</strong> lets you
        connect through voice chats <br /> and conversation first - no photo
        until you click
      </p>
      <div className="relative flex justify-center items-center">
        <img
          src={heart}
          alt="heart"
          className="absolute w-20 h-20 right-0 bottom-0"
        />
        <img src={ui} alt="ui" />
      </div>
    </div>
  );
};

export default HeroSection;
