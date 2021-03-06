import { AiOutlineSmile } from 'react-icons/ai';
import { BsFillPeopleFill, BsPersonPlusFill, BsCalendar } from 'react-icons/bs';

export default function Stats() {
  return (
    <>
      {/* Container */}
      <div className="mb-2 sm:mb-20 pb-0">
        {/* Stat List */}
        <ul className="flex flex-wrap justify-center">
          {/* Stat List Item */}
          <li className="my-2 w-full max-w-sm md:flex-1/2 mx-2">
            {/* Stat Container */}
            <div className="bg-secondary-1 shadow-xl p-6 pl-8">
              <div className="w-100 flex justify-end">
                {/* Stat Icon */}
                <span className="block text-highlight-2 text-6xl flex items-center mr-3">
                  <BsFillPeopleFill />
                </span>
                {/* Stat Value */}
                <span className="inline-block text-highlight-2 text-6xl min-w-1/4 text-right font-mono">93</span>
              </div>
              <span className="block w-100 text-xl text-highlight-2 font-semibold text-right">Active Members</span>
            </div>
          </li>

          <li className="my-2 w-full max-w-sm md:flex-1/2 mx-2">
            {/* Stat Container */}
            <div className="bg-secondary-1 shadow-xl p-6 pl-8">
              <div className="w-100 flex justify-end">
                {/* Stat Icon */}
                <span className="block text-highlight-2 text-6xl flex items-center mr-3">
                  <BsPersonPlusFill />
                </span>
                {/* Stat Value */}
                <span className="inline-block text-highlight-2 text-6xl min-w-1/4 text-right font-mono">5</span>
              </div>
              <span className="block w-100 text-xl text-highlight-2 font-semibold text-right">Sponsored Members</span>
            </div>
          </li>

          <li className="my-2 w-full max-w-sm md:flex-1/2 mx-2">
            {/* Stat Container */}
            <div className="bg-secondary-1 shadow-xl p-6 pl-8">
              <div className="w-100 flex justify-end">
                {/* Stat Icon */}
                <span className="block text-highlight-2 text-6xl flex items-center mr-3">
                  <BsCalendar />
                </span>
                {/* Stat Value */}
                <span className="inline-block text-highlight-2 text-6xl min-w-1/4 text-right font-mono">15+</span>
              </div>
              <span className="block w-100 text-xl text-highlight-2 font-semibold text-right">Monthly Events</span>
            </div>
          </li>

          <li className="my-2 w-full max-w-sm md:flex-1/2 mx-2">
            {/* Stat Container */}
            <div className="bg-secondary-1 shadow-xl p-6 pl-8">
              <div className="w-100 flex justify-end">
                {/* Stat Icon */}
                <span className="block text-highlight-2 text-6xl flex items-center mr-3">
                  <AiOutlineSmile />
                </span>
                {/* Stat Value */}
                <span className="inline-block text-highlight-2 text-6xl min-w-1/4 text-right font-mono">300+</span>
              </div>
              <span className="block w-100 text-xl text-highlight-2 font-semibold text-right">Monthly Attendees</span>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
