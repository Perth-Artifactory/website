import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSlack, FaMeetup } from 'react-icons/fa';

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
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://space.artifactory.org.au/slack">
              <FaSlack />
            </a>
          </li>
          {/* <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://groups.google.com/group/artifactory-core">
              <AiOutlineMail />
            </a>
          </li> */}
          <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368">
              <FaFacebook />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://twitter.com/perthartifact">
              <FaTwitter />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.instagram.com/theperthartifactory/">
              <FaInstagram />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA">
              <FaYoutube />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-2 fill-current hover:text-highlight-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.meetup.com/Perth-Artifactory/">
              <FaMeetup />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
