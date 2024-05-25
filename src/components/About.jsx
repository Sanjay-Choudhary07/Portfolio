import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-auto">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-10">
          Hi! I am Sanjay Choudhary 
          currently pursuing a Bachelor of Engineering degree from Rajasthan Institute of
          Engineering and Technology. I am passionate web developer with a strong drive 
          to contribute to innovative ideas. 
        </p>

        <br />

        <p className="text-xl">
         I am passionate about building excellent software solutions that improves
         the lives of those around me. I specialize in creating amazing websites
          using frontend technologies like HTML, CSS, Javascript, React and more.
        </p>
      </div>
    </div>
  );
};

export default About;