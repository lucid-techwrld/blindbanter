import FeatureCard from "./FeatureCard";

const Feature = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center px-10 py-5 space-y-4">
      <h1 className="text-3xl font-bold text-orange-500 mb-5">How it Works</h1>
      <FeatureCard
        num={1}
        title={"Blind Chat"}
        subText={"Match & message without seeing photo first"}
      />

      <FeatureCard
        num={2}
        title={"Voice Rooms"}
        subText={"Join Group calls about and talk about shared interest"}
      />

      <FeatureCard
        num={3}
        title={"Reveal Later"}
        subText={
          "Unlock photo after you vibe, get to know personality first before face"
        }
      />
    </div>
  );
};

export default Feature;
