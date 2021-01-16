import Contact from '../../components/_/contact';

export default function Header() {
  return (
    <>
      {/* Container */}
      <header className="p-4 ">
        {/* Hidden H1 for SEO */}
        <h1 className="invisible">Artifactory</h1>

        {/* Logo */}
        <img className="block w-100 mb-8 md:max-w-md mx-auto" src="/assets/site/header.png" alt="The Artifactory" />

        {/* Contact Component */}
        <Contact />
      </header>
    </>
  );
}
