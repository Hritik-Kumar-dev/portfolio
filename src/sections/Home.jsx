const Home = ({ scrollTo, contactRef }) => (
  <section className="h-screen flex items-center justify-center bg-gray-800 text-4xl font-bold">


    <div className=' w-[100%] h-[100%] p-8 pt-18  '>

      <h1 className='w-[100%]  text-8xl text-gray-200 [-webkit-text-stroke:1px_#000000] audiowide-regular'>Hii , <br /> I'm  Hritik, <br /> Web Developer </h1>
      <p className='text-2xl  audiowide-regular '>creative web developer...</p>
    </div>
    <button
      className="mt-6 px-4 py-2 text-lg bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      onClick={() => scrollTo(contactRef)}
    >
      Contact Me
    </button>

  </section>
);
export default Home;
