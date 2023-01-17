import React from "react";

interface HomeProps {}

const Home: React.FC<HomeProps> = ({}) => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <canvas
        width={750}
        height={750}
        className='border border-black rounded-lg'
      />
    </div>
  );
};

export default Home;
