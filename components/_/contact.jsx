import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSlack, FaMeetup, FaGithub } from 'react-icons/fa';

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
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Slack+TButton"
              href="https://perart.io/slack">
              <FaSlack />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Facebook+TButton"
              href="https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368">
              <FaFacebook />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Twitter+TButton"
              href="https://twitter.com/perthartifact">
              <FaTwitter />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Instagram+TButton"
              href="https://www.instagram.com/theperthartifactory/">
              <FaInstagram />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Youtube+TButton"
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA">
              <FaYoutube />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Meetup+TButton"
              href="https://www.meetup.com/Perth-Artifactory/">
              <FaMeetup />
            </a>
          </li>
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl plausible-event-name=Github+TButton"
              href="https://github.com/Perth-Artifactory">
              <FaGithub />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
