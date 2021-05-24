export default function Donations() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-6 pb-0 text-maintext mb-5 sm:mb-10">
        <h3 className="text-center text-2xl mb-4 mt-6 mb-10 sm:text-3xl sm:mb-10 sm:mt-4 text-header">Sponsors and Friends</h3>
        {/* Donation List */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">

          {/* Alby Beer */}
          <li className="block border-2 border-highlight-3 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http://alby.beer/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/alby.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-2">Alby Beer</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Alby's ALBY MADE community arts grant helped us revamp our design lab and offer a wider range of workshops for our
                members!
              </p>
            </a>
          </li>

          {/* LotteryWest */}
          <li className="block border-2 border-highlight-3 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.lotterywest.wa.gov.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/lotterywest.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-2">LotteryWest</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                We are proudly supported by LotteryWest grants that help us buy awesome equipment to do awesome things!
              </p>
            </a>
          </li>

          {/* PentaNet */}
          <li className="block border-2 border-highlight-3 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://pentanet.com.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/pentanet.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-2">PentaNet</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Huge thanks to Pentanet for providing the Perth Artifactory with mind blowing internet speeds!
              </p>
            </a>
          </li>

          {/* Supanova */}
          <li className="block border-2 border-highlight-3 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.supanova.com.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/supanova.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-2">Supanova</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Thanks to Supanova for giving us the opportunity to show off the space and our creations at Supanova
                Perth!
              </p>
            </a>
          </li>

          {/* WebInABox */}
          <li className="block border-2 border-highlight-3 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.webinabox.net.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/sponsors/webinabox.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center text-highlight-2">WebInABox</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                A big thank-you to Web In A Box for helping us out with their fantastic Web Hosting platform, you
                wouldn't be reading this without it!
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
