export default function Donations() {
  return (
    <>
      {/* Container */}
      <div className="block bg-primary-1 p-6 pb-0 text-white mb-2 sm:mb-20">
        <h3 className="text-center text-2xl mb-4 mt-6 mb-10 sm:text-3xl sm:mb-10 sm:mt-4">Sponsors and Friends</h3>
        {/* Donation List */}
        <ul className="flex flex-col sm:flex-row sm:flex-wrap sm:justify-center">
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http://alby.beer/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/alby.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Alby Beer</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Alby's ALBY MADE grant helped us revamp our design lab and offer a wider range of workshops for our
                members.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http://lotterywest.wa.gov.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/lotterywest.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">LotteryWest</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                LotteryWest grants helped us buy our original laser cutters, a foundation of many of the things we do.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://pentanet.com.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/pentanet.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">PentaNet</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Pentanet provides the blazing fast internet we all use in the workshop.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="#">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/supanova.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Supanova</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Supanova gives us the opportunity to show off the space and our creations at Supanova
                Perth!
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http://www.webinabox.net.au/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/webinabox.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">WebInABox</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                A big thank-you to Web In A Box for helping us out with their fantastic virtual private servers. Without their help many of our internal tools could not function.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="https://www.google.com.au/nonprofits/">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/google.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Google for Nonprofits</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Google's support helps us conduct business and advertise our space.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/healthchecks.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Healthchecks.io</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Healthchecks allows us to maintain high availability services for our members.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/github.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Github</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Github Teams helps our volunteers develop the many in house applications that our infrastructure is built on.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/altronics.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Altronics</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                The generous support we receive from Perth's best electronic component retailer is the backbone of many of our workshop made tools.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/stripe.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Stripe</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Without Stripe we'd be losing money on every payment we receive.
              </p>
            </a>
          </li>
          {/* Donation List Item */}
          <li className="block border-2 border-secondary-1 p-6 mb-4 sm:mx-2 sm:flex-1/3">
            <a href="http">
              {/* Donation Logo */}
              <img className="block w-100 mb-4 mx-auto" src="/assets/site/slack.jpg" alt="#" />
              {/* Donation Title */}
              <span className="block w-100 mb-4 text-center">Slack</span>
              {/* Donation Description */}
              <p className="block w-100 text-center text-sm">
                Slack is the lifeblood behind our social endeavours. 
              </p>
            </a>
          </li>
        </ul>
      </div>
    </>
  );
}
