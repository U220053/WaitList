import React from "react";

import JoinWaitlistForm from "@/components/JoinWaitlistForm";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen  flex flex-col justify-center items-center">
      <div className="w-full min-h-screen flex justify-center items-center bg-gray-900">
        <div className="relative w-[480px] h-[420px] bg-gray-800 rounded-lg overflow-hidden">
          <div className="absolute w-[480px] h-[420px] bg-gradient-to-r from-emerald-600 via-sky-400 to-transparent -top-[50%] -left-1/2 animate-spin-slow origin-bottom-right"></div>
          <div className="absolute inset-1 bg-gray-800 rounded-lg z-10 p-5">
            <JoinWaitlistForm />
          </div>
        </div>
      </div>
    </div>
    //
  );
};

export default Home;
