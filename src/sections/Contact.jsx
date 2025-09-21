import SocialLinks from "../components/SocialLinks";
import Swal from 'sweetalert2'
import { TbMail } from "react-icons/tb";
import Card from "../components/Card";
const handleSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "972197c3-dbcf-43c4-8af9-a59538aec7e4");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "SUCCESS!",
      text: "Your message has been sent successfully!",
      icon: "success"
    });
  }
};

const Contact = () => (

  <section className=" relative text-white z-10 h-screen  w-screen flex items-center justify-center  gap-5 ">

    <div className="flex justify-between items-center mt-12 backdrop-blur-md bg-cyan-200/7  gap-12">



      <div className="form flex flex-col items-center justify-center  p-8 rounded-lg shadow-lg w-150">
        <span className='flex items-center justify-center gap-2'> <TbMail className='text-5xl' /> <h2 className='text-4xl font-bold mb-4'>Get In Touch</h2> </span>
        <p className="">Fill up the form below to send  me a   message </p>
        <form onSubmit={handleSubmit} className="w-full flex flex-col gap-0.2 mt-4">
          <label htmlFor="name">Name:</label>
          <input required className="border border-gray-300 p-2 rounded-md" type="text" id="name" name="name" placeholder="Your Name" />

          <label htmlFor="email">Email:</label>
          <input required className="border border-gray-300 p-2 rounded-md " type="email" id="email" name="email" placeholder="Your Email" />

          <label htmlFor="message">Message:</label>
          <textarea className="border border-gray-300 p-2 rounded-md h-[200px] w-full" id="message" name="message" placeholder="Your Message..."></textarea>



          <button type="submit" className="w-full mt-2 bg-purple-600 hover:bg-purple-700 text-white font-medium py-3 px-6 rounded-lg transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-purple-500/25">Submit</button>



        </form>
      </div>

      <div className="flex flex-col items-center justify-center gap-8 w-96">
        <Card />
        <SocialLinks />
      </div>

    </div>

  </section>
);
export default Contact;

