import Link from 'next/link';

export default function Footer() {
  return (
    <>
      {/* Container */}
      <div className="bg-secondary-1 p-3 sm:flex">
        {/* Sitemap Container */}
        <div className="block w-100 mb-4 p-6 bg-primary-2 text-maintext sm:mr-2 min-w-1/4 sm:mb-0">
          <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-secondary-1">
            Sitemap
          </span>
          {/* Sitemap Link List */}
          <ul>
            {/* Sitemap Link List Item */}
            <li>
              {/* Sitemap Link */}
              <Link href="/">
                <a className="text-maintext">Home</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/freeMembership">
                <a className="text-maintext">Free Membership</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/membership">
                <a className="text-maintext">Membership</a>
              </Link>
            </li>
            <li>
              <Link href="https://wiki.artifactory.org.au/">
                <a className="text-maintext">Wiki</a>
              </Link>
            </li>
            <li>
              <Link href="https://space.artifactory.org.au/">
                <a className="text-maintext">Webcams</a>
              </Link>
            </li>
            <li>
              <Link href="/pages/code_of_conduct">
                <a className="text-maintext">Code of Conduct</a>
              </Link>
            </li>
          </ul>
        </div>
        {/* More Info Container */}
        <div className="block w-100 bg-primary-2 p-6 text-maintext sm:flex-1">
          <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:mb-4 font-semibold border-b-2 border-secondary-1">
            More Info
          </span>
          <p>
            If you need further contact, you can easily message us by{' '}
            <a className="text-secondary-1" href="mailto:info@artifactory.org.au">
              email
            </a>
            .
          </p>
          {/* Extranous Link Container */}
          <div className="block w-100">
            {/* Similar Places List */}
            <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:my-4 font-semibold border-b-2 border-secondary-1">
              Australian Hackerspaces
            </span>
            <ul>
              <li>
                <a className="text-maintext" href="https://www.hackerspace-adelaide.org.au/">ADEL: Hackerspace Adelaide</a>
              </li>
              <li>
                <a className="text-maintext" href="https://hsbne.org/">BRIS: HSBNE</a>
              </li>
              <li>
                <a className="text-maintext" href="https://brisbanemaker.space/">BRIS: Brisbane Makerspace</a>
              </li>
              <li>
                <a className="text-maintext" href="http://swmakers.org/">BUNB: South West Makers</a>
              </li>
              <li>
                <a className="text-maintext" href="https://canberramaker.space/">CANB: Make, Hack, Void</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.hobarthackerspace.org.au/">HOBART: Hackerspace</a>
              </li>
              <li>
                <a className="text-maintext" href="https://hackmelbourne.com/">MELB: CCHS</a>
              </li>
              <li>
                <a className="text-maintext" href="https://robodino.org/">SYD: Robots &amp; Dinosaurs</a>
              </li>
            </ul>
            <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:my-4 font-semibold border-b-2 border-secondary-1">
              Friends
            </span>
            <ul>
              <li>
                <a className="text-maintext" href="http://www.artsource.net.au/">Artsource</a>
              </li>
              <li>
                <a className="text-maintext" href="http://blazingswan.com.au/">Blazing Swan</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.rflan.org/">Red Flag Lan Fest Inc (RFLAN)</a>
              </li>
              <li>
                <a className="text-maintext" href="http://swancon.com.au/">Swancon</a>
              </li>
            </ul>

            {/* Tech Used (?) List */}
            <span className="text-highlight-1 text-lg sm:text-xl block mb-2 sm:my-4 font-semibold border-b-2 border-secondary-1">
              Affiliated Groups
            </span>
            <ul>
              <li>
                <a className="text-maintext" href="http://www.adug.org.au/meetings/overview/">ADUG WA</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.noizemaschin.com/">NoizeMaschin!!</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.meetup.com/en-AU/Perth-Django-Users-Group/">Perth Djano and Python Developers</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.pmlg.org/">Perth Machine Learning Group</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.meetup.com/Perth-Linux-Users-Group-PLUG/">Perth Linux Users Group</a>
              </li>
              <li>
                <a className="text-maintext" href="https://www.facebook.com/WAMod-West-Australian-Modular-Synthesizers-416747535171732/">WAMod</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
