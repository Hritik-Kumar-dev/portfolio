import SocialLinks from "../components/SocialLinks";

const Contact = () => (
  <section className="h-screen  w-screen flex items-center justify-center bg-pink-100 gap-10 ">

    <div className="form flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-100">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>
      <p className="">Fill up the form below to send  me a   message </p>
      <form className="w-full flex flex-col gap-0.2 mt-4">
        <label htmlFor="name">Name:</label>
        <input className="border border-gray-300 p-2 rounded-md" type="text" id="name" placeholder="Your Name" />

        <label htmlFor="email">Email:</label>
        <input className="border border-gray-300 p-2 rounded-md" type="email" id="email" placeholder="Your Email" />

        <label htmlFor="message">Message:</label>
        <textarea className="border border-gray-300 p-2 rounded-md h-[200px] w-full" id="message" placeholder="Your Message"></textarea>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
          
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25">
              Submit
            </button>
          </div>

      </form>
    </div>



    <div className="flex flex-col items-center justify-center w-96">

      <div className="assistant flex flex-col items-center justify-center bg-white p-8 rounded-lg shadow-lg w-96">
        <h2>chat with my ai assistant</h2>

        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
           
            <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25">
              Chat with AI
            </button>
          </div>


      </div>
      <SocialLinks />
    </div>



  </section>
);
export default Contact;
