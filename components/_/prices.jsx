import { AiFillStar } from 'react-icons/ai';
import { GiGuitar } from 'react-icons/gi';

export default function Prices() {
  return (
    <>
      {/* Container */}
      <div className="block p-4 pb-0.5 bg-secondary-1 mb-2 sm:mb-4">
        <ul className="sm:flex sm:flex-wrap sm:space-between">
          <li className="block bg-primary-1 p-4 text-white mb-4 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center">Casual</span>
              <div className="block w-100 text-center my-2">
                <span className="inline-block text-3xl text-center">$10</span>
                <span className="inline-block text-2xl text-center">/day</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Use of the workshop tools</li>
                <li className="text-sm border-b-2 border-gray-400">Access to most events</li>
                <li className="text-sm border-b-2 border-gray-400">Kitchen facilities</li>
                <li className="text-sm">WiFi</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-4 text-white mb-4 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center">Concession</span>
              <div className="block w-100 text-center my-2">
                <span className="inline-block text-3xl text-center">$45</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Access to the workshop during events</li>
                <li className="text-sm border-b-2 border-gray-400">24/7 Key (bond required)</li>
                <li className="text-sm border-b-2 border-gray-400">Material and project storage options</li>
                <li className="text-sm">Discounted tool usage fees</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-4 text-white mb-4 max-w-xs mx-auto sm:w-1/4 border-4 border-highlight-1">
            <div>
              <div className="text-4xl sm:text-xl">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center">Full</span>
              <div className="block w-100 text-center my-2">
                <span className="inline-block text-3xl text-center">$75</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Access to the workshop during events</li>
                <li className="text-sm border-b-2 border-gray-400">24/7 Key (bond required)</li>
                <li className="text-sm border-b-2 border-gray-400">Material and project storage options</li>
                <li className="text-sm">Discounted tool usage fees</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-4 text-white mb-4 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <GiGuitar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center">Band</span>
              <div className="block w-100 text-center my-2">
                <span className="inline-block text-3xl text-center">$100</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Rehearsal room</li>
                <li className="text-sm border-b-2 border-gray-400">Performance space</li>
                <li className="text-sm">Weekly rehearsal slots</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
