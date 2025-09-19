import SocialLinks from "../components/SocialLinks";

const About = () => (
  <section className=" Second-Section  h-[160vh]  w-screen p-4 flex items-center justify-center    font-bold">

  
  <div className="Avatar"></div>
  <div className="detail w-[50%] translate-x-[50%] flex flex-col gap-4 align justify-end  p-8">
    <h1 className=" text-4xl" >About Me - Hritik kumar</h1>
    <p className="text-lg poetsen-one-regular">I'm a passionate web developer with a knack for creating dynamic and responsive web applications.</p>
    <div className="flex gap-4.5  ">

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
  <SocialLinks/>
  </div>
  </section>
);
export default About;

