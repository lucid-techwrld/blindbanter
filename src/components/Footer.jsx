import WaitlistForm from "./WaitListForm";

const Footer = () => {
  return (
    <div className="flex flex-col justify-center items-center bg-black text-white py-5 space-y-4">
      <h1 className="text-3xl font-bold">Get Early Access!</h1>
      <p className="text-center text-md">
        Be the first to try{" "}
        <strong className="text-orange-500">BlindBanter</strong>, Launching
        Soon!
      </p>
      <WaitlistForm />
      <p className="text-center font-semibold">
        Finally an app that's not about looks! <br />
        -Future Users-
      </p>
    </div>
  );
};

export default Footer;
