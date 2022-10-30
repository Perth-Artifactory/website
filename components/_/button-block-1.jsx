export default function ButtonBlock1({ groupedBelow }) {
  return (
    <>
      {/* Container */}
      <div className={`mt-5 sm:mt-10 md:max-w-xl mx-auto ${groupedBelow ? 'mb-2' : 'mb-5'} ${groupedBelow ? 'sm:mb-2' : 'sm:mb-10'}`}>
      {/*  <div className={`mt-5 sm:mt-10 mb-5 sm:mb-10 md:max-w-xl mx-auto ${groupedBelow ? 'mb-2' : 'mb-5' ? 'sm:mb-10' : 'sm:mb-2'} `}>  */}
        {/* Button List */}
        <ul className="sm:flex justify-center">
          {/* Button List Item */}
          {/* Contains extra classes. */}
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-2 sm:w-1/2">
            {/* Button */}
            <a
              className="block p-2 bg-secondary-1 hover:bg-secondary-3 focus:bg-secondary-3 text-highlight-2 hover:text-highlight-2 font-semibold"
              href="mailto:info@artifactory.org.au">
              Book a Visit
            </a>
          </li>
          <li className="block max-w-xs mb-2 mx-auto text-center w-100 sm:flex-grow sm:inline-block sm:mb-0 sm:mr-0 sm:w-1/2">
            {/* Outbound links will need the Next.js Link component */}
            <a
              className="block p-2 bg-secondary-1 hover:bg-secondary-3 focus:bg-secondary-3 text-highlight-2 hover:text-highlight-2 font-semibold"
              href="/pages/membership">
              Become a Member
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
