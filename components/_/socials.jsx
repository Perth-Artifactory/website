import Link from 'next/link';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaSlack, FaMeetup } from 'react-icons/fa';

export default function Socials() {
  return (
    <>
      <div className="">
        <ul className="flex justify-between w-100 sm:w-1/2 sm:mx-auto px-4 md:max-w-md mx-auto">

          {/* Slack */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://space.artifactory.org.au/slack">
              <FaSlack />
            </a>
          </li>

          {/* Facebook */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.facebook.com/pages/The-Perth-Artifactory/178514525501368">
              <FaFacebook />
            </a>
          </li>

          {/* Twitter */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://twitter.com/perthartifact">
              <FaTwitter />
            </a>
          </li>

          {/* Instagram */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.instagram.com/theperthartifactory/">
              <FaInstagram />
            </a>
          </li>

          {/* YouTube */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.youtube.com/channel/UC9N4yG2QzYZV9Naud_IsUfA">
              <FaYoutube />
            </a>
          </li>

          {/* Meetup */}
          <li className="inline-block">
            <a
              className="block text-highlight-1 fill-current hover:text-secondary-1 text-xl sm:text-2xl md:text-3xl"
              href="https://www.meetup.com/Perth-Artifactory/">
              <FaMeetup />
            </a>
          </li>

        </ul>
      </div>
    </>
  );
}
