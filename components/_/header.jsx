import Link from 'next/link';
import Contact from '../../components/_/contact';

export default function Header() {
  return (
    <>
      {/* Container */}
      <header className="ml-6 mr-6 mb-6">
        {/* Hidden H1 for SEO */}
        <h1 className="invisible">Artifactory</h1>

        {/* Logo */}
        <Link href="/">
          <a>
            <img
              className="block w-100 mb-5 md:max-w-md lg:max-w-2xl mx-auto"
              src="/assets/site/header-light.png"
              alt="The Artifactory"
            />
          </a>
        </Link>

        {/* Contact Component */}
        <Contact />
      </header>
    </>
  );
}
