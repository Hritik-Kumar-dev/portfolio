const Home = ({ scrollTo, contactRef }) => (
  <section className="h-screen mt-20 m-3 w-screen flex    text-4xl font-bold">


      <h1 className="bitcount-grid-double-dotted  mt-10 text-6xl text-gray-300">WELCOME...</h1>

    <div className=' w-[70%] h-[100%] -top-25 -left-20 p-5 relative z-20 flex flex-col items-center justify-center gap-21 '>
      <h1 className='w-fit h-max -top-3 relative  text-7xl text-gray-300  poetsen-one-regular'>Hii ,  I'm <br />  <span className="audiowide-regular font-bold ">Frontend Developer</span></h1>
      {/* <h1 className='w-fit h-max -top-3 relative  text-7xl text-gray-300  poetsen-one-regular'>Hii ,  I'm <br />  <span className="audiowide-regular bg-gradient-to-r from-pink-500 via-purple-400 to-cyan-300 bg-clip-text text-transparent drop-shadow-[0_1px_3px_cyan] ">Frontend Developer</span></h1> */}

      <p className='text-2xl w-[60%] text-gray-700 audiowide-regular '> From concept to code —   <br />
                            your vision, my creation.</p>

    </div>
{/* audiowide-regular */}
 {/* poetsen-one-regular */}
  </section>
);
export default Home;
