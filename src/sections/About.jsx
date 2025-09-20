// import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";

const About = () => (
  <section className=" Second-Section  h-[160vh]  w-screen p-4 flex items-center justify-center  relative -top-55 z-10  ">



    <div className="detail w-[45%] translate-x-[50%] flex flex-col gap-4 align justify-end  p-8">
      {/* <h1 className=" text-4xl" >About Me - Hritik kumar</h1> */}
      <p className="text-2xl text-gray-300 wdxl-lubrifont-jp-n-regular">Hi, I’m <span className="strong text-5xl bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-300 bg-clip-text text-transparent">Hritik Kumar</span>,<br /> a web developer and B.Tech IT student passionate about building clean, modern, and user-friendly digital experiences. I enjoy solving problems with code and turning ideas into reality.  <br />I also enjoy building 3D web experiences that bring ideas to life in a unique way.

      </p>
      <div className="flex gap-8.5 ">

        {/* <Button text="View Projects" />
        <Button text="Contact Me" /> */}
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1.9 border border-white/20">

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25">
            View Projects
          </button>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-1.9 border border-white/20">

          <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25">
            Download Resume
          </button>
        </div>

      </div>
      <SocialLinks />
    </div>
  </section>
);
export default About;

