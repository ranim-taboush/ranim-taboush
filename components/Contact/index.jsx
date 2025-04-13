import { FaPhoneAlt } from "react-icons/fa";
import { MdMail } from "react-icons/md";

export default function Contact() {
  return (
    <section className="py-16 px-4 text-center">
      <h2 className="uppercase tracking-wider lg:text-5xl font-bold [text-shadow:2px_2px_4px_#ff0266,-2px_-2px_4px_#03dac6] text-light mb-4">Contact Me</h2>
      <div className="flex flex-col items-center space-y-4">
        <a href="mailto:ranim.taboush@gmail.com" className="flex items-center text-gray-200 hover:text-neonPink">
          <MdMail size={20} className="mr-2" /> By. Email
        </a>
        <a href="tel:+201147675444" className="flex items-center text-gray-200 hover:text-neonPink">
          <FaPhoneAlt size={20} className="mr-2" /> By. Phone
        </a>
      </div>
    </section>
  );
}
