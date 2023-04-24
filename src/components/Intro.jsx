import React from 'react';
import profilePic from '../assets/profileJaider.jpg'

const Intro = () => {
  return (
    <section id="intro" className="pt-[65px] text-white bg-gray-800 flex justify-center p-2">
      <div className="flex flex-col items-center justify-center">
        <img src={profilePic} alt="Profile" className="mb-2.5 rounded-full w-64 h-64 object-cover" />
        {/* <div> */}
        <h2 className="text-3xl font-bold mb-2">Jaider Nunes</h2>
        <h3 className="text-2xl mb-4">Full-stack Developer</h3>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Intro;