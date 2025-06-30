import SocialLinks from "../components/SocialLinks";

const About = () => (
  <section className="h-screen  w-screen p-4 flex items-center justify-center bg-green-100 font-bold">
  


  <div className="Avatar"></div>
  <div className="detail w-[50%] translate-x-[50%] flex flex-col gap-3  justify-end  p-8">
    <h1 className=" text-4xl" >About Me - Hritik kumar</h1>
    <p className="text-lg">I'm a passionate web developer with a knack for creating dynamic and responsive web applications.</p>
    <div className="flex gap-4.5  ">

    <button className="mt-4 px-4 py-2 w-3xs bg-blue-600 text-white rounded hover:bg-blue-700 transition">View Projects</button>
    <button className="mt-4 px-4 py-2 w-3xs bg-blue-600 text-white rounded hover:bg-blue-700 transition">Download Resume</button>
    </div>
  <SocialLinks/>
  </div>
  </section>
);
export default About;

