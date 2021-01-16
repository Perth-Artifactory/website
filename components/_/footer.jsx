import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Container */}
      <div className="bg-secondary-1 p-4 sm:flex">
        {/* Sitemap Container */}
        <div className="block w-100 mb-4 p-4 bg-primary-2 text-white sm:mr-2 min-w-1/4 sm:mb-0">
          <span className="text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-highlight-1">
            Sitemap
          </span>
          {/* Sitemap Link List */}
          <ul>
            {/* Sitemap Link List Item */}
            <li>
              {/* Sitemap Link */}
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>About</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Membership</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Wiki</a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>Webcams</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* More Info Container */}
        <div className="block w-100 bg-primary-2 p-4 text-white sm:flex-1">
          <span className="text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-highlight-1">
            More Info
          </span>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sed alias qui, natus itaque iste nisi
            ipsam cumque, maxime illum id? Ducimus corrupti vel error magni quibusdam praesentium ut asperiores!
          </p>
          {/* Extranous Link Container */}
          <div className="block w-100">
            {/* Similar Places List */}
            <span className="text-lg sm:text-xl block mb-2 sm:my-4 font-semibold border-b-2 border-highlight-1">
              Australian Hackerspaces
            </span>
            <ul>
              <li>
                <a href="#">ADEL: Hackerspace Adelaide</a>
              </li>
              <li>
                <a href="#">BRIS: HSBNE</a>
              </li>
              <li>
                <a href="#">BUNB: South West Makers</a>
              </li>
              <li>
                <a href="#">CANB: Make, Hack, Void</a>
              </li>
              <li>
                <a href="#">HOBART: Hackerspace</a>
              </li>
              <li>
                <a href="#">MELB: CCHS</a>
              </li>
              <li>
                <a href="#">SYD: Robots &amp; Dinosaurs</a>
              </li>
            </ul>

            {/* Tech Used (?) List */}
            <span className="text-lg sm:text-xl block mb-2 sm:my-4 font-semibold border-b-2 border-highlight-1">
              Tech Used
            </span>
            <ul>
              <li>
                <Link href="/">
                  <a>Lorem Ipsum</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Lorem Ipsum</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Lorem Ipsum</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Lorem Ipsum</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
