import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSlack } from 'react-icons/fa';

export default function Contact() {
  return (
    <>
      {/* Container */}
      <div className="">
        {/* Contact Item List */}
        <ul className="flex justify-between w-100 sm:w-1/2 sm:mx-auto px-4 md:max-w-md mx-auto">
          {/* Contact Item List Item */}
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <AiOutlineMail />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <FaFacebook />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <FaTwitter />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <FaInstagram />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <FaYoutube />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-secondary-1 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.google.com">
              <FaSlack />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
