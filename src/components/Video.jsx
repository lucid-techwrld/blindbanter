import React from "react";

const Video = () => {
  return (
    <div className="w-full h-auto p-4">
      <iframe
        src="https://www.youtube.com/embed/3o2-xWB0hEE?autoplay=1&mute=1&loop=1&playlist=3o2-xWB0hEE"
        title="BlindBanter Dating App"
        className="w-full h-72 rounded-lg bg-gray-400"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; pictue-in-picture"
        frameborder="0"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Video;
