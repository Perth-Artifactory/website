import { AiFillStar } from 'react-icons/ai';
import { GiGuitar } from 'react-icons/gi';
import { BsMusicNoteBeamed } from 'react-icons/bs';

export default function Prices() {
  return (
    <>
      {/* Container */}
      <div className="block p-2 bg-secondary-1 mb-5 sm:mb-10">
        <ul className="sm:flex sm:flex-wrap sm:space-between">
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl text-secondary-1">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center text-secondary-1">Casual</span>
              <div className="block w-100 text-center my-2 text-secondary-1">
                <span className="inline-block text-3xl text-center">$15</span>
                <span className="inline-block text-2xl text-center">/day</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Use of Artifactory tools</li>
                <li className="text-sm border-b-2 border-gray-400">Access to most events</li>
                <li className="text-sm border-b-2 border-gray-400">Kitchen facilities</li>
                <li className="text-sm">Free WiFi</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl text-secondary-1">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                  <li className="inline-block">
                    <AiFillStar />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center text-secondary-1">Concession</span>
              <div className="block w-100 text-center my-2 text-secondary-1">
                <span className="inline-block text-3xl text-center">$45</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">24/7 Access (with bond)</li>
                <li className="text-sm border-b-2 border-gray-400">Personal storage locker</li>
                <li className="text-sm border-b-2 border-gray-400">Discounted tool usage fees</li>
                <li className="text-sm">Free access to events</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 max-w-xs mx-auto sm:w-1/4 border-4 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl text-secondary-1">
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
              <span className="block text-4xl sm:text-xl text-center text-secondary-1">Full</span>
              <div className="block w-100 text-center my-2 text-secondary-1">
                <span className="inline-block text-3xl text-center">$75</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">24/7 Access (with bond)</li>
                <li className="text-sm border-b-2 border-gray-400">Personal storage locker</li>
                <li className="text-sm border-b-2 border-gray-400">Discounted tool usage fees</li>
                <li className="text-sm">Free access to events</li>
              </ul>
            </div>
          </li>
          <li className="block bg-primary-1 p-6 text-maintext mb-3 sm:mb-0 max-w-xs mx-auto sm:w-1/4 border-2 border-secondary-1">
            <div>
              <div className="text-4xl sm:text-xl text-secondary-1">
                <ul className="block w-auto text-center my-4">
                  <li className="inline-block">
                    <BsMusicNoteBeamed />
                  </li>
                </ul>
              </div>
              <span className="block text-4xl sm:text-xl text-center text-secondary-1">Band</span>
              <div className="block w-100 text-center my-2 text-secondary-1">
                <span className="inline-block text-3xl text-center">$100</span>
                <span className="inline-block text-2xl text-center">/mo</span>
              </div>
            </div>
            <div>
              <ul className="block w-100 text-center">
                <li className="text-sm border-b-2 border-gray-400">Rehearsal room</li>
                <li className="text-sm border-b-2 border-gray-400">Weekly rehearsal slots</li>
                <li className="text-sm border-b-2 border-gray-400">Performance space</li>
                <li className="text-sm">24/7 Access (with bond)</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
